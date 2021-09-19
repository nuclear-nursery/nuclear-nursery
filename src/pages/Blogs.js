import { Helmet } from 'react-helmet'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import BlogsView from '../components/BlogsView'
import Pagination from '../components/Pagination'

function Blogs() {
	const [posts, setPosts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(6)

	useEffect(() => {
		let mounted = true
		axios.get(`${process.env.REACT_APP_SERVER}/api/blog`).then((response) => {
			if (mounted) {
				const blogs = []
				response.data.map((blog) => {
					return blog.is_viewable ? blogs.push(blog) : null
				})
				setPosts(blogs)
			}
		})
		return () => (mounted = false)
	}, [])

	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

	const paginate = (e, pageNumber) => {
		e.preventDefault()
		setCurrentPage(pageNumber)
	}

	return (
		<Layout>
			<Helmet>
				<title>Blogs - Nuclear Nursery</title>
				<meta name='description' content='Nuclear Nursery Blogs Page' />
			</Helmet>
			<div className='mi-about mi-section mi-padding-top mi-padding-bottom'>
				<div className='container'>
					<Sectiontitle title='Recent Blogs' />
					{currentPosts && currentPosts.length > 0 ? (
						<BlogsView blogs={currentPosts} />
					) : null}
					{!(posts.length > postsPerPage) ? null : (
						<Pagination
							className='mt-50'
							itemsPerPage={postsPerPage}
							totalItems={posts.length}
							paginate={paginate}
							currentPage={currentPage}
						/>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Blogs
