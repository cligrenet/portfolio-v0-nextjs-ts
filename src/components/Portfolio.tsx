import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import styles from '../../styles/Portfolio.module.css';

const Portfolio = () => {
	const ref = useRef(null);
	const { scrollXProgress } = useScroll({ container: ref });
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div>
			<span className={styles.title} onClick={() => setIsClicked(!isClicked)}>
				PORTFOLIO
			</span>
			{isClicked && (
				<div className={styles.desp}>
					<ul ref={ref}>
						<li>
							<p>Meal Planner</p>
							<Image src="https://i.imgur.com/jzaecf3.png" alt="helpdesk" width={200} height={230} />
						</li>
						<li>
							<p>Helpdesk Ticketing</p>
							<Image src="https://i.imgur.com/AM5q406.gif" alt="helpdesk" width={200} height={200} />
						</li>
						<li>
							<p>Expense Tracker</p>
							<Image src="https://i.imgur.com/36OnkAE.png" alt="helpdesk" width={170} height={250} />
						</li>
						<li>
							<p>Toy Shop</p>
							<Image src="https://i.imgur.com/6YMp5tq.png" alt="helpdesk" width={200} height={270} />
						</li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Portfolio;
