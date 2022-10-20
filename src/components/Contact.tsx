import React from 'react';
import styles from '../../styles/Contact.module.css';

const Contact = () => {
	return (
		<div>
			<span>CONTACT</span>
			<form>
				<label>NAME</label>
				<input type="text" placeholder="Who are you ?" />
				<label>EMAIL</label>
				<input type="email" placeholder="What is your email ?" />
				<label>MESSAGE</label>
				<textarea name="message" id="message" cols="30" rows="10" placeholder="Tell me your ideas !"></textarea>
				<button>SEND</button>
			</form>
		</div>
	);
};

export default Contact;
