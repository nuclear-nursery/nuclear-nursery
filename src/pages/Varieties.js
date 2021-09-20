import { Helmet } from 'react-helmet'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import VarietiesView from '../components/VarietiesView'

function Varieties() {
	const [varieties, setVarieties] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [varietiesPerPage] = useState(15)

	useEffect(() => {
		let mounted = true
		axios
			.get(`${process.env.REACT_APP_SERVER}/api/peppers`)
			.then((response) => {
				if (mounted) {
					setVarieties(response.data)
				}
			})
		return () => (mounted = false)
	}, [])

	const indexOfLastVarieties = currentPage * varietiesPerPage
	const indexOfFirstVarieties = indexOfLastVarieties - varietiesPerPage
	const currentVarieties = varieties.slice(
		indexOfFirstVarieties,
		indexOfLastVarieties,
	)

	const paginate = (e, pageNumber) => {
		e.preventDefault()
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
		setCurrentPage(pageNumber)
	}

	return (
		<Layout>
			<Helmet>
				<title>Pepper Collections - Nuclear Nursery</title>
				<meta name='description' content='Nuclear Nursery Pepper Collections' />
			</Helmet>
			<div className='mi-about mi-section mi-padding-top mi-padding-bottom'>
				<div className='container'>
					<Sectiontitle title='Pepper Collections' />
					{currentVarieties ? (
						<VarietiesView varieties={currentVarieties} />
					) : null}
					{!(varieties.length > varietiesPerPage) ? null : (
						<Pagination
							className='mt-50'
							itemsPerPage={varietiesPerPage}
							totalItems={varieties.length}
							paginate={paginate}
							currentPage={currentPage}
						/>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Varieties
