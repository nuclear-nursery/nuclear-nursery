import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Particles from 'react-particles-js'
import Layout from '../components/Layout'
import Socialicons from '../components/Socialicons'

function Home({ lightMode }) {
	const [information, setInformation] = useState('')
	const paramConfig = {
		particles: {
			number: {
				value: 160,
				density: {
					enable: true,
				},
			},
			color: {
				value: '#000000',
			},
			opacity: {
				value: 0.1,
			},
			size: {
				value: 30,
				random: true,
				anim: {
					speed: 4,
					size_min: 0.3,
				},
			},
			line_linked: {
				enable: false,
			},
			move: {
				random: true,
				speed: 1,
				direction: 'top',
				out_mode: 'out',
			},
		},
	}

	const paramConfigLight = {
		particles: {
			number: {
				value: 160,
				density: {
					enable: false,
				},
			},
			color: {
				value: '#ffffff',
			},
			opacity: {
				value: 0.1,
			},
			size: {
				value: 30,
				random: true,
				anim: {
					speed: 4,
					size_min: 0.3,
				},
			},
			line_linked: {
				enable: false,
				width: 0,
			},
			move: {
				random: true,
				speed: 1,
				direction: 'top',
				out_mode: 'out',
			},
		},
	}
	useEffect(() => {
		axios.get('/api/information').then((response) => {
			setInformation(response.data)
		})
	}, [])
	return (
		<Layout>
			<Helmet>
				<title>Home - Nuclear Nursery</title>
				<meta name='description' content='Nuclear Nursery Home Page' />
			</Helmet>
			<div className='mi-home-area mi-padding-section'>
				<Particles
					className='mi-home-particle'
					params={lightMode ? paramConfigLight : paramConfig}
				/>

				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-10 col-12'>
							<div className='mi-home-content'>
								<img
									src={
										lightMode
											? 'images/logo/default-monochrome-black.svg'
											: 'images/logo/default-monochrome.svg'
									}
									alt='logo'
								/>
								<p>{information.aboutContent}</p>
								<Socialicons bordered />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Home
