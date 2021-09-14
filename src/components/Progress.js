import React from 'react'

const changePercentageColor = (percent) => {
	let backgroundColor = 'green'
	if (percent >= 80) {
		backgroundColor = 'red'
	} else if (percent >= 65) {
		backgroundColor = 'orange'
	} else if (percent >= 50) {
		backgroundColor = 'yellow'
	}
	return backgroundColor
}

function Progress({ isVisible, percentage, title, showPercent = true }) {
	const winWidth = window.innerWidth
	const backgroundColor = changePercentageColor(percentage)
	console.log()
	const progressQuery = () => {
		if (winWidth && winWidth > 767) {
			return (
				<span
					className='mi-progress-active'
					style={
						isVisible
							? {
									width: `${percentage}%`,
									backgroundColor: backgroundColor,
							  }
							: { width: 0 }
					}
				></span>
			)
		}
		return (
			<span
				className='mi-progress-active'
				style={{
					width: `${percentage}%`,
					backgroundColor: backgroundColor,
				}}
			></span>
		)
	}
	return (
		<div className='mi-progress'>
			<h6 className='mi-progress-title'>{title}</h6>
			<div className='mi-progress-inner'>
				{showPercent ? (
					<div className='mi-progress-percentage'>{`${percentage}%`}</div>
				) : null}
				<div className='mi-progress-container'>{progressQuery()}</div>
			</div>
		</div>
	)
}

export default Progress
