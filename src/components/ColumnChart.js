import React from 'react'
import Chart from 'react-google-charts'

import heatTable from '../data/heatTable'

const reworkHeatTableData = () => {
	const data = [['Variety', 'Minimum Heat', 'Max Heat']]
	heatTable.reverse().map((heat) => {
		const heatMap = [heat.varieties, heat.SHU.min, heat.SHU.max]
		data.push(heatMap)
	})
	return data
}
const ColumnChart = () => {
	const inputs = reworkHeatTableData()
	return (
		<div className='App'>
			<Chart
				chartType='ColumnChart'
				width='100%'
				height='400px'
				data={inputs}
			/>
		</div>
	)
}

export default ColumnChart
