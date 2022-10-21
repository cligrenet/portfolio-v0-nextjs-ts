import React, { useState } from 'react';
import styles from '../../styles/Portfolio.module.css';

const Portfolio = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div>
			<span className={styles.title} onClick={() => setIsClicked(!isClicked)}>
				PORTFOLIO
			</span>
			{isClicked && <div className={styles.desp}>projects</div>}
		</div>
	);
};

export default Portfolio;
