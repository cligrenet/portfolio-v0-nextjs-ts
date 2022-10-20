import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<FaLinkedinIn />
				<FaGithub />
			</div>

			<div>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					&copy; Chenjia LI-GRENET 2022
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
