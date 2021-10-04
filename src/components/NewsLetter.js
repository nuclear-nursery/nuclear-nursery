import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NewsLetter = ({ className }) => {
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

	useEffect(() => {
		if (success || error) {
			setTimeout(() => {
				setError('')
				setSuccess('')
			}, 4000)
		}
	}, [success, error])

	const handleChange = (e) => setEmail(e.currentTarget.value)
	const submitHandler = (e) => {
		e.preventDefault()
		if (!email) setError('Email must be provided')
		else {
			axios
				.post(`${process.env.REACT_APP_SERVER}/api/newsletter`, { email })
				.then(({ data }) => {
					console.log(data)
					if (data.status === 400) {
						setError('Email already signed up for Newsletter.')
					} else {
						setSuccess('Email successfully added to Newsletter.')
						setError('')
					}
				})
		}
	}
	const handleAlerts = () => {
		if (error) {
			return <div className='alert alert-danger mt-4'>{error}</div>
		} else if (success) {
			return <div className='alert alert-success mt-4'>{success}</div>
		} else {
			return null
		}
	}

	return (
		<div className={`mi-contact-formwrapper col-lg-4 ${className}`}>
			<h4>Join our Newsletter</h4>
			<form
				action='#'
				className='mi-form mi-contact-form'
				onSubmit={submitHandler}
			>
				<div className='mi-form-field'>
					<label htmlFor='newsletter-email'>Enter your email address</label>
					<input
						onChange={handleChange}
						type='email'
						name='email'
						id='newsletter-email'
						value={email}
					/>
				</div>
				<div className='mi-form-field'>
					<button className='mi-button' type='submit'>
						Join
					</button>
				</div>
			</form>
			{handleAlerts()}
		</div>
	)
}

export default NewsLetter
