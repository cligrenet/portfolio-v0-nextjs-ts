import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Landing from '../src/components/Landing';
import Portfolio from '../src/components/Portfolio';
import styles from '../styles/Index.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Chenjia | Web Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Landing />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
