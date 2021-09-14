import React from 'react'
import Variety from './Variety'

function VarietiesView({ varieties }) {
	return (
		<div className='row mt-30-reverse'>
			{varieties.map((variety) => (
				<div className='col-lg-4 col-md-6 col-12 mt-30' key={variety.id}>
					<Variety content={variety} />
				</div>
			))}
		</div>
	)
}

export default VarietiesView
