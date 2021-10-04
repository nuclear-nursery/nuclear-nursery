import React from 'react'
import { Link } from 'react-router-dom'
import Socialicons from './Socialicons'
import NewsLetter from './NewsLetter'

const ComingSoon = () => {
	return (
		<div className='mi-contact-area mi-section mi-padding-top'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 mi-section justify-content-center'>
						<h4>
							We will be posting our current season grow around January 2022.
							Please sign up for our newsletter for our most recent updates. If
							you have any further questions about what varieties we plan to
							grow for the 2022 season, please use our{' '}
							<Link to='/contact'>Contact Form </Link>
							or connect with us on Social Media.
						</h4>
						<hr />
						<Socialicons
							bordered
							style={{ textAlign: 'center', padding: '0 0 50px 0' }}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-4' />
					<NewsLetter />
					<div className='col-lg-4' />
				</div>
			</div>
		</div>
	)
}

export default ComingSoon
