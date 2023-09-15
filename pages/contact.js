import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/contact/contact-form';

function ContactPage() {
	return (
		<React.Fragment>
			<Head>
				<title>Contact me</title>
				<meta name='description' content='Contact me on this page' />
			</Head>
			<ContactForm />
		</React.Fragment>
	);
}

export default ContactPage;
