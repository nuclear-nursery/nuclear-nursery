import React from 'react'

const badges = {
	sweet: <span className='badge sweet'>Sweet</span>,
	'super hot': <span className='badge super-hot'>Super Hot</span>,
	smokey: <span className='badge smokey'>Smokey</span>,
	fruity: <span className='badge fruity'>Fruity</span>,
	pungent: <span className='badge pungent'>Pungent</span>,
	floral: <span className='badge floral'>Floral</span>,
	bitter: <span className='badge bitter'>Bitter</span>,
	citrus: <span className='badge citrus'>Citrus</span>,
}

const FlavorBadge = ({ flavor }) => {
	if (flavor in badges) {
		return badges[flavor]
	}
	return null
}

export default FlavorBadge
