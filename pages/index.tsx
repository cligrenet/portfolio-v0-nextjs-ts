import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Landing from '../src/components/Landing';
import Portfolio from '../src/components/Portfolio';
import { FaAngleUp } from 'react-icons/fa';
import styles from '../styles/Index.module.css';

const Home: NextPage = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);
	const [aboutRef, setAboutRef] = useState(null);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const scrollDown = (ref: any) => {
		window.scrollTo({
			top: ref.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Chenjia | Web Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Landing onScroll={() => scrollDown(aboutRef)} />
			<About setAboutRef={setAboutRef} />
			<Portfolio />
			<Contact />
			<Footer />
			<div className={styles.btnTop}>
				{showTopBtn && <FaAngleUp onClick={goToTop} className={styles.btnPosition} />}
			</div>
		</div>
	);
};

export default Home;
