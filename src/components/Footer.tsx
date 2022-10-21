import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.social}>
				<Link href="https://www.linkedin.com/in/chenjialigrenet/">
					<a target="_blank" rel="noopener noreferrer">
						<FaLinkedinIn size={30} />
					</a>
				</Link>
				<Link href="https://github.com/cligrenet">
					<a target="_blank" rel="noopener noreferrer">
						<FaGithub size={30} />
					</a>
				</Link>
			</div>

			<div>&copy; Chenjia LI-GRENET 2022</div>
		</footer>
	);
};

export default Footer;
