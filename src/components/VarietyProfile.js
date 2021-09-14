import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import * as Icon from 'react-feather'
import TrackVisibility from 'react-on-screen'
import ProgressiveImage from 'react-progressive-image'
import Progress from './Progress'
import FlavorBadge from './FlavorBadge'

const VarietyProfile = ({ variety, reverse = false }) => {
	const [toggler, setToggler] = useState(false)
	const {
		name,
		facts,
		imageUrl,
		largeImageUrl,
		lineage,
		flavorProfile,
		daysToHarvest,
		heatIndex,
		scovilleHeatUnits,
		scientificName,
	} = variety
	const handleToggler = () => {
		setToggler(!toggler)
	}
	return (
		variety && (
			<div
				className={`mi-about-area mi-section mi-padding-top container row ${
					reverse ? 'flex-row-reverse' : 'flex-row'
				}`}
			>
				<div className='col-lg-6'>
					<div className='mi-about-image'>
						<ProgressiveImage
							src={imageUrl}
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
						{largeImageUrl ? (
							<FsLightbox
								toggler={toggler}
								sources={largeImageUrl.split(',')}
							/>
						) : null}
					</div>
				</div>
				<div className='col-lg-6'>
					<div className='mi-about-content'>
						<h3>{name}</h3>
						<p>{facts}</p>
						<ul>
							{!name ? null : (
								<li>
									<b>Species</b> {scientificName}
								</li>
							)}
							{!lineage ? null : (
								<li>
									<b>Lineage</b> {lineage}
								</li>
							)}
							{!flavorProfile ? null : (
								<li>
									<b>Flavor</b>{' '}
									{flavorProfile.split(',').map((flavor) => (
										<FlavorBadge key={flavor} flavor={flavor.toLowerCase()} />
									))}
								</li>
							)}
							{!daysToHarvest ? null : (
								<li>
									<b>Harvest</b> {daysToHarvest}+ days
								</li>
							)}
							{!heatIndex ? null : (
								<li style={{ display: 'flex', alignItems: 'center' }}>
									<b>Heat Index</b>{' '}
									<TrackVisibility once className='col-lg-6' key={name}>
										<Progress percentage={heatIndex * 10} />
									</TrackVisibility>
								</li>
							)}
							{!scovilleHeatUnits ? null : (
								<li>
									<b>Scoville Heat Units (SHU):</b> {scovilleHeatUnits}
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		)
	)
}

export default VarietyProfile
