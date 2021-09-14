import { Helmet } from 'react-helmet'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import VarietyProfile from '../components/VarietyProfile'

function VarietyDetails(props) {
	const [content, setContent] = useState('')
	const { id } = props.match.params

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_SERVER}/api/peppers/${id}`)
			.then((result) => {
				setContent(result.data)
			})
	}, [id])

	return (
		<Layout>
			<Helmet>
				<title>Variety Details - Nuclear Nursery</title>
				<meta name='description' content='Nuclear Nursery Blog Details Page' />
			</Helmet>
			<VarietyProfile variety={content} />
		</Layout>
	)
}

export default VarietyDetails
