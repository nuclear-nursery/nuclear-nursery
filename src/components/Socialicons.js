import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LineIcon from 'react-lineicons'

function Socialicons(props) {
	const [socialLinks, setSocialLinks] = useState({})

	useEffect(() => {
		axios.get('/api/information').then((response) => {
			setSocialLinks(response.data.socialLinks)
		})
	}, [])

	return (
		<ul
			className={
				props.bordered
					? 'mi-socialicons mi-socialicons-bordered'
					: 'mi-socialicons'
			}
		>
			{!socialLinks.facebook ? null : (
				<li>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href={socialLinks.facebook}
					>
						<LineIcon name='facebook' />
					</a>
				</li>
			)}
			{!socialLinks.twitter ? null : (
				<li>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href={socialLinks.twitter}
					>
						<LineIcon name='twitter' />
					</a>
				</li>
			)}
			{!socialLinks.instagram ? null : (
				<li>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href={socialLinks.instagram}
					>
						<LineIcon name='instagram' />
					</a>
				</li>
			)}
		</ul>
	)
}

export default Socialicons