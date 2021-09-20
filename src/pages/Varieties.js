import { Helmet } from 'react-helmet'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import VarietiesView from '../components/VarietiesView'

const VARIETY_PAGE_NUMBER = 'VARIETY_PAGE_NUMBER'

function Varieties() {
	const [varieties, setVarieties] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [varietiesPerPage] = useState(15)
	let session = {}
	if (window !== 'undefined') {
		session = window.sessionStorage
	}
	useEffect(() => {
		if (session && session.getItem(VARIETY_PAGE_NUMBER))
			setCurrentPage(Number(session.getItem(VARIETY_PAGE_NUMBER)))
		let mounted = true
		axios
			.get(`${process.env.REACT_APP_SERVER}/api/peppers`)
			.then((response) => {
				if (mounted) {
					setVarieties(response.data)
				}
			})
		return () => (mounted = false)
	}, [session])

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

		if (session) session.setItem(VARIETY_PAGE_NUMBER, pageNumber)
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
