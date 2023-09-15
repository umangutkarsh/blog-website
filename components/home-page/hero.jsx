import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/photo6.png'
					alt='Image showing rottenApple'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm RottenApple</h1>
			<p>
				I'm interested in the tech industry, and I talk about various tools and
				technologies such as React and Angular.
			</p>
		</section>
	);
}

export default Hero;
