import React, { useState } from 'react'
import LineIcon from 'react-lineicons'

function Socialicons(props) {
	const [socialLinks] = useState({
		facebook: 'https://www.facebook.com/nuclear.nursery/',
		twitter: 'https://twitter.com/nuclear_nursery',
		instagram: 'https://www.instagram.com/nuclear_nursery/',
		youtube: 'https://www.youtube.com/channel/UCKMzakiC_TZhlOvjlm_D1wQ',
		tiktok: 'https://www.tiktok.com/@nuclear_nursery?lang=en',
		linkedin: 'https://www.linkedin.com/company/nuclear-nursery/about/',
	})

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
			{!socialLinks.linkedin ? null : (
				<li>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href={socialLinks.linkedin}
					>
						<LineIcon name='linkedin' />
					</a>
				</li>
			)}
			{!socialLinks.youtube ? null : (
				<li>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href={socialLinks.youtube}
					>
						<LineIcon name='youtube' />
					</a>
				</li>
			)}
		</ul>
	)
}

export default Socialicons
