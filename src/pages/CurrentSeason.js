import { Helmet } from 'react-helmet'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TrackVisibility from 'react-on-screen'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import Progress from '../components/Progress'
import ComingSoon from '../components/ComingSoon'

function compare(a, b) {
	if (a.heatIndex < b.heatIndex) {
		return -1
	}
	if (a.heatIndex > b.heatIndex) {
		return 1
	}
	return 0
}

function CurrentSeason() {
	const [peppers, setPeppers] = useState([])
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_SERVER}/api/peppers/current`)
			.then((response) => {
				if (response.data && response.data.length) {
					response.data.sort(compare)
					setPeppers(response.data)
				}
			})
	}, [])

	return (
		<Layout>
			<Helmet>
				<title>Current Grow - Nuclear Nursery</title>
				<meta name='description' content='Current Grow Resume Page' />
			</Helmet>
			<div className='mi-skills-area mi-section mi-padding-top'>
				<div className='container'>
					<Sectiontitle title='Available Varieties' />
					<div className='mi-skills'>
						<div className='row mt-30-reverse col-lg-12'>
							{peppers.length ? (
								peppers.map((pepper) => (
									<TrackVisibility
										once
										className='col-lg-6 mt-30'
										key={pepper.name}
									>
										<h4>
											<Link to={`${pepper.slug}/${pepper.id}`}>
												{pepper.name}
											</Link>
										</h4>
										<Progress
											title='Heat Index'
											percentage={pepper.heatIndex * 10}
											isLink
											link={pepper.slug}
											id={pepper.id}
										/>
									</TrackVisibility>
								))
							) : (
								<ComingSoon />
							)}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default CurrentSeason
