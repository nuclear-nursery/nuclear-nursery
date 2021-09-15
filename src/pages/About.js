import { Helmet } from 'react-helmet'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Layout from '../components/Layout'
import Sectiontitle from '../components/Sectiontitle'
import Service from '../components/Service'
import Testimonial from '../components/Testimonial'
import AboutProfile from '../components/AboutProfile'
import staff from '../data/staff'
import products from '../data/services'

function About() {
	const [people] = useState(staff)
	const [services] = useState(products)
	const [reviews, setReviews] = useState([])

	const sliderSettings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	useEffect(() => {
		axios.get('/api/reviews').then((response) => {
			setReviews(response.data)
		})
	}, [])

	return (
		<Layout>
			<Helmet>
				<title>About - Nuclear Nursery</title>
				<meta name='description' content='Nuclear Nursery About Page' />
			</Helmet>
			<div className='mi-about-area mi-section mi-padding-top'>
				<div className='container'>
					<Sectiontitle title='About Nuclear Nursery' />
					<div className='row'></div>
				</div>
			</div>
			{people.map((person, index) => {
				return (
					<AboutProfile
						key={person.name}
						person={person}
						reverse={!!index % 2 !== 0}
					/>
				)
			})}
			<div className='mi-service-area mi-section mi-padding-top'>
				<div className='container'>
					<Sectiontitle title='Services' />
					<div className='mi-service-wrapper'>
						<div className='row mt-30-reverse'>
							{services.map((service) => (
								<div
									className='col-lg-4 col-md-6 col-12 mt-30'
									key={service.title}
								>
									<Service content={service} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='mi-review-area mi-section mi-padding-top mi-padding-bottom'>
				<div className='container'>
					<Sectiontitle title='Reviews' />
					<div className='row justify-content-center'>
						<div className='col-12'>
							<Slider className='mi-testimonial-slider' {...sliderSettings}>
								{reviews && reviews.length
									? reviews.map((review) => (
											<Testimonial key={review.id} content={review} />
									  ))
									: null}
							</Slider>
							<p>
								If you wish to leave a review, please contact us{' '}
								<Link to='/contact'>here</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default About
