import React from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaAngleDown } from 'react-icons/fa';
import styles from '../../styles/Landing.module.css';

type Props = {
	onScroll: () => void;
};

const Landing = (props: Props) => {
	const {
		selectedElement: {
			position: { angle: angleLeftEye },
		},
	} = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
	const {
		selectedElement: {
			position: { angle: angleRightEye },
		},
	} = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });

	const rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
	const rotateRightEye = `rotate(${-angleRightEye}deg)`;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				CHEN
				<div className={styles.eye_right}>
					<div className={styles.eyelid} />
					<div>
						<div id="right-eye" className={styles.eye} style={{ transform: rotateRightEye }}>
							<div className={styles.pupil} />
						</div>
					</div>
				</div>
				JIA
			</div>
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
			<div className={styles.title_bottom}>
				LI{' '}
				<div>
					<div className={styles.eye_left}>
						<div>
							<div className={styles.eyelid} />
							<div id="left-eye" className={styles.eye} style={{ transform: rotateLeftEye }}>
								<div className={styles.pupil} />
							</div>
						</div>
					</div>
				</div>{' '}
				GRENET
			</div>
			<div className={styles.down}>
				<span onClick={props.onScroll}>
					<FaAngleDown />
				</span>
			</div>
		</div>
	);
};

export default Landing;
