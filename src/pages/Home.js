import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Particles from 'react-particles-js'
import Layout from '../components/Layout'
import Socialicons from '../components/Socialicons'

function Home({ lightMode }) {
	const paramConfig = {
		particles: {
			number: {
				value: 160,
				density: {
					enable: true,
				},
			},
			color: {
				value: '#CC1D22',
			},
			opacity: {
				value: 0.1,
			},
			size: {
				value: 10,
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
				value: '#FE7400',
			},
			opacity: {
				value: 0.1,
			},
			size: {
				value: 10,
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
								<img src='images/logo/logo.svg' alt='logo' />
								<p>
									Georgia Grown Hot Pepper Varieties that cannot be found at
									other local nurseries. Check out our{' '}
									<Link to='/current-season'>Current Season</Link> varieties
									that may be available.
								</p>
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
