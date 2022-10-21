import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaAngleDown } from 'react-icons/fa';
import styles from '../../styles/Landing.module.css';

const Landing = () => {
	return (
		<div className={styles.main}>
			<span className={styles.title}>CHENJIA</span>
			<div className={styles.banner}>
				<p>
					<span className={styles.desp}>
						<span>
							<GoPrimitiveDot />
						</span>{' '}
						WEB DEVELOPER
					</span>
					<span className={styles.desp}>
						<span>
							<GoPrimitiveDot />
						</span>{' '}
						RELIABLE COLLABORATOR
					</span>
					<span className={styles.desp}>
						<span>
							<GoPrimitiveDot />
						</span>{' '}
						PROBLEM SOLVER
					</span>
					<span className={styles.desp}>
						<span>
							<GoPrimitiveDot />
						</span>{' '}
						DETAIL FREAK
					</span>
				</p>
			</div>
			<span className={styles.title}>LI-GRENET</span>
			<div className={styles.down}>
				<span>
					<FaAngleDown />
				</span>
			</div>
		</div>
	);
};

export default Landing;
