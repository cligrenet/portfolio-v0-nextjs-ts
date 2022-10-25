import React, { useRef, useEffect, useState } from 'react';
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPostgresql,
	SiGit,
	SiGithub,
	SiBootstrap,
	SiTailwindcss,
	SiPython,
	SiSqlite,
} from 'react-icons/si';
import styles from '../../styles/About.module.css';

type Props = {
	setAboutRef: any;
};

const About = (props: Props) => {
	const [isClicked, setIsClicked] = useState(false);

	const aboutSection = useRef(null);

	useEffect(() => {
		props.setAboutRef(aboutSection.current);
	}, [props]);

	return (
		<div ref={aboutSection}>
			<span className={styles.title} onClick={() => setIsClicked(!isClicked)}>
				ABOUT
			</span>
			{isClicked && (
				<div className={styles.desp}>
					<div className={styles.circle_container}>
						<div className={styles.circle}>
							<p>Hello, I am Chenjia, a web developer.</p>

							<p>Being recognised as a reliable contributor by various clients around the world.</p>

							<p>
								I am most comfortable with front-end development and I would like to focus my effort
								there for now, tho a bit of back-end work here and there is welcome to keep sharpening
								my overall understanding of the web stack.
							</p>

							<p>Let me help you build your project.</p>
						</div>
					</div>

					<div className={styles.icons}>
						<SiHtml5 />
						<SiCss3 />
						<SiJavascript />
						<SiTypescript />
						<SiReact />
						<SiNextdotjs />
						<SiNodedotjs />
						<SiExpress />
						<SiMongodb />
						<SiPostgresql />
						<SiGit />
						<SiGithub />
						<SiBootstrap />
						<SiTailwindcss />
						<SiPython />
						<SiSqlite />
					</div>
				</div>
			)}
		</div>
	);
};

export default About;
