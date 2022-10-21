import React, { useRef, useEffect } from 'react';
import styles from '../../styles/About.module.css';

type Props = {
	setAboutRef: any;
};

const About = (props: Props) => {
	const aboutSection = useRef(null);
	useEffect(() => {
		props.setAboutRef(aboutSection.current);
	}, [props]);

	return (
		<div className={styles.main} ref={aboutSection}>
			<span className={styles.title}>ABOUT</span>
			<p>
				Hello, I am Chenjia, a web developer.
				<br />
				Being recognised as a reliable contributor by various companies/clients around the world.
				<br />
				I am prepared to apply my communication, detail-oriented and problem solving skills in my new missions.
				<br />
				After close to a year of honing my programming chops, both in an intense Bootcamp as well as consistent
				self-study, I am ready and eager to join a concret project to put my skills to use!
				<br />
				I am most comfortable with front-end development and I would like to focus my effort there for now, tho
				a bit of back-end work here and there is welcome to keep sharpening my overall understanding of the web
				stack.
				<br />
				Here is my current tool box: JavaScript(ES6), TypeScript, HTML5, CSS3, ReactJS, Bootstrap, TailwindCSS,
				NodeJS, ExpressJS, MongoDB, Python3, SQLite, PostgreSQL, Git, Github, Axios, REST API...
				<br />
				Let me help you build your project.
			</p>
		</div>
	);
};

export default About;
