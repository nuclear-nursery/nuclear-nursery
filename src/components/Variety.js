import FsLightbox from 'fslightbox-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather'
import ProgressiveImage from 'react-progressive-image'

function Variety({ content }) {
	const [toggler, setToggler] = useState(false)
	const { name, scientificName, imageUrl, largeImageUrl, slug, id } = content

	const handleToggler = (value) => {
		setToggler(value)
	}

	return (
		<div className='mi-portfolio mi-portfolio-visible'>
			<div className='mi-portfolio-image'>
				<ProgressiveImage
					src={imageUrl}
					placeholder='/images/portfolio-image-placeholder.png'
				>
					{(src) => <img src={src} alt={name} />}
				</ProgressiveImage>
				<ul>
					{!largeImageUrl ? null : (
						<li>
							<button onClick={() => handleToggler(!toggler)}>
								<Icon.ZoomIn />
							</button>
						</li>
					)}
					{slug ? (
						<li>
							<Link to={`${slug}/${id}`}>
								<Icon.Link />
							</Link>
						</li>
					) : null}
				</ul>
			</div>
			{!slug ? (
				<h5>{name}</h5>
			) : (
				<h5>
					<Link to={`${slug}/${id}`}>{name}</Link>
				</h5>
			)}
			{scientificName ? <h6>{scientificName}</h6> : null}
			{!largeImageUrl ? null : (
				<FsLightbox toggler={toggler} sources={largeImageUrl} />
			)}
		</div>
	)
}

export default Variety
