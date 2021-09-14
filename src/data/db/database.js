import Mock from '../mock'

const database = {
	information: {
		name: 'Joseph Thompson',
		aboutContent:
			'Nuclear Nursery is a product child of my fascination with gardening. My 9 year old has asked me to grow different types of peppers over the years. Recently we decided to share our passion with people around us. It is our pleasure to bring the people newly released and classic style super hot peppers. Our peppers range from the hottest reaper pepper and 7 pots, down to habanero strains.',
		age: 24,
		phone: '',
		nationality: 'American',
		language: 'English, French',
		email: '',
		address: '121 King Street, Melbourne, Australia',
		freelanceStatus: 'Available',
		socialLinks: {
			facebook: 'https://www.facebook.com/nuclear.nursery/',
			twitter: 'https://twitter.com/nuclear_nursery',
			instagram: 'https://www.instagram.com/nuclear_nursery/',
		},
		brandImage: '/images/logo/default.png',
		aboutImage: '/images/about-image.jpg',
		aboutImageLg: '/images/about-image-lg.jpg',
		cvfile: '/files/empty.pdf',
	},
	people: [
		{
			name: 'Joseph Thompson',
			aboutContent:
				'Nuclear Nursery is a product child of my fascination with gardening. My 9 year old has asked me to grow different types of peppers over the years. Recently we decided to share our passion with people around us. It is our pleasure to bring the people newly released and classic style super hot peppers. Our peppers range from the hottest reaper pepper and 7 pots, down to habanero strains.',
			age: 31,
			phone: '',
			email: 'joseph@nuclear-nursery.com',
			address: 'Acworth, GA',
			socialLinks: {
				facebook: 'https://www.facebook.com/nuclear.nursery/',
				twitter: 'https://twitter.com/nuclear_nursery',
				instagram: 'https://www.instagram.com/nuclear_nursery/',
			},
			aboutImage: '/images/about-image.jpg',
			aboutImageLg: '/images/about-image-lg.jpg',
		},
		{
			name: 'Parker Cain',
			aboutContent:
				'Nuclear Nursery is a product child of my fascination with gardening. My 9 year old has asked me to grow different types of peppers over the years. Recently we decided to share our passion with people around us. It is our pleasure to bring the people newly released and classic style super hot peppers. Our peppers range from the hottest reaper pepper and 7 pots, down to habanero strains.',
			age: 9,
			phone: '',
			email: '',
			address: 'Acworth, GA',
			socialLinks: {
				facebook: 'https://www.facebook.com/nuclear.nursery/',
				twitter: 'https://twitter.com/nuclear_nursery',
				instagram: 'https://www.instagram.com/nuclear_nursery/',
			},
			aboutImage: '/images/about-image.jpg',
			aboutImageLg: '/images/about-image-lg.jpg',
		},
	],
	services: [
		{
			title: 'Pepper Seedlings',
			icon: 'sprout',
			details: 'Seedlings are around 80-90 days old, and are sold year round.',
		},
		{
			title: 'Fresh Peppers',
			icon: 'grow',
			details:
				'Fresh Peppers are offered based on the plant that we are growing on site.',
		},
		{
			title: 'Seeds',
			icon: 'package',
			details: 'Seeds are available from our previous seasons grow.',
		},
	],
	reviews: [
		{
			id: 1,
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
			author: {
				name: 'Burdette Turner',
				designation: 'Web Developer, Abc Company',
			},
		},
		{
			id: 2,
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
			author: {
				name: 'Susan Yost',
				designation: 'Client',
			},
		},
		{
			id: 3,
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
			author: {
				name: 'Irving Feeney',
				designation: 'Fiverr Client',
			},
		},
	],
	contactInfo: {
		phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
		emailAddress: ['admin@nuclear-nursery.com', 'support@nuclear-nursery.com'],
		address: 'Acworth, GA',
	},
}

Mock.onGet('/api/information').reply((config) => {
	const response = database.information
	return [200, response]
})

Mock.onGet('/api/people').reply((config) => {
	const response = database.people
	return [200, response]
})

Mock.onGet('/api/services').reply((config) => {
	const response = database.services
	return [200, response]
})

Mock.onGet('/api/reviews').reply((config) => {
	const response = database.reviews
	return [200, response]
})

Mock.onGet('/api/contactinfo').reply((config) => {
	const response = database.contactInfo
	return [200, response]
})
