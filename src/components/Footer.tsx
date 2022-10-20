import React from 'react';
import styles from '../../styles/Footer.module.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.social}>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chenjialigrenet/">
					<FaLinkedinIn size={30} />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/cligrenet">
					<FaGithub size={30} />
				</a>
			</div>

			<div>&copy; Chenjia LI-GRENET 2022</div>
		</footer>
	);
};

export default Footer;
