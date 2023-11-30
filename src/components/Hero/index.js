import React from 'react';
import './hero.css';
import HeroPhone from './HeroPhone';
import ver_line from "../../images/line.svg";

import {TableBox, Item, Amount, AmountPara } from "./HeroElement";

const Hero = () => {
	return (
		<>
		
		<div className="container">
			<div className="heading-grp">
				<p className="main-heading">It'time to trade,</p>
				<p className="main-heading">
					the <span className="color-heading">future.</span>
				</p>
				<p className="para">Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
			</div>

			<div>
				<HeroPhone />
			</div>
			


		</div>

<TableBox>
<Item>
	<Amount>
		00%
	</Amount>
	<AmountPara>
		Conversion Fee
	</AmountPara>
</Item>
 <img className='line' src={ver_line} alt="" />

 <Item>
	<Amount>
		500 Mn+
	</Amount>
	<AmountPara>
	LifeTime Volume Traded
	</AmountPara>
</Item>
 <img className='line' src={ver_line} alt="" />

 <Item>
	<Amount>
		250+
	</Amount>
	<AmountPara>
	Total Tradable Pairs
	</AmountPara>
</Item>
 <img className='line' src={ver_line} alt="" />

 <Item>
	<Amount>
		15,000+
	</Amount>
	<AmountPara>
		Traders 
	</AmountPara>
</Item>
 
</TableBox>
</>
	);
};

export default Hero;
