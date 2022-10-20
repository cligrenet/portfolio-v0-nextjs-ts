import React from 'react';
import styles from '../../styles/Contact.module.css';

const Contact = () => {
	return (
		<div className={styles.main}>
			<span className={styles.title}>CONTACT</span>
			<form>
				<input className={styles.input} type="text" placeholder="Who are you ?" id="name" name="name" />
				<input
					className={styles.input}
					type="email"
					placeholder="What is your email ?"
					id="email"
					name="email"
				/>
				<textarea
					className={styles.input}
					name="message"
					id="message"
					placeholder="Tell me your ideas !"
				></textarea>

				<button>SEND</button>
			</form>
		</div>
	);
};

export default Contact;
