import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import * as Icon from 'react-feather'
import ProgressiveImage from 'react-progressive-image'

const AboutProfile = ({ person, reverse = false }) => {
	const [toggler, setToggler] = useState(false)

	const handleToggler = (event) => {
		setToggler({
			toggler: !toggler,
		})
	}

	return (
		<div
			className={`mi-about-area mi-section mi-padding-top row ${
				reverse ? 'flex-row-reverse' : 'flex-row'
			}`}
		>
			<div className='col-lg-6'>
				<div className='mi-about-image'>
					<ProgressiveImage
						src={person.aboutImage}
						placeholder='/images/about-image-placeholder.png'
					>
						{(src) => (
							<img
								src={src}
								alt='aboutimage'
								onClick={() => handleToggler(!toggler)}
							/>
						)}
					</ProgressiveImage>
					<span className='mi-about-image-icon'>
						<Icon.ZoomIn />
					</span>
					<FsLightbox toggler={toggler} sources={[person.aboutImageLg]} />
				</div>
			</div>
			<div className='col-lg-6'>
				<div className='mi-about-content'>
					<h3>
						I am <span className='color-theme'>{person.name}</span>
					</h3>
					<p>{person.aboutContent}</p>
					<ul>
						{!person.name ? null : (
							<li>
								<b>Full Name</b> {person.name}
							</li>
						)}
						{!person.age ? null : (
							<li>
								<b>Age</b> {person.age} Years
							</li>
						)}
						{!person.phone ? null : (
							<li>
								<b>Phone</b> {person.phone}
							</li>
						)}
						{!person.email ? null : (
							<li>
								<b>Email</b> {person.email}
							</li>
						)}
						{!person.address ? null : (
							<li>
								<b>Address</b> {person.address}
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default AboutProfile
