import React from 'react'
import LineIcon from 'react-lineicons'

function Service({ content: { icon, title, details, link, linkTitle } }) {
	return (
		<div className='mi-service'>
			<span className='mi-service-icon'>
				<LineIcon name={icon} />
			</span>
			<h5>{title}</h5>
			<p>{details}</p>
			<a target='_blank' href={link} rel='noopener noreferrer'>
				{linkTitle}
			</a>
		</div>
	)
}

export default Service
