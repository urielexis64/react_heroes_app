import React, {useMemo} from "react";
import {getHeroesByPublisher} from "../../selectors/getHeroesByPublisher";
import {HeroCard} from "./HeroCard";

export const HeroList = ({publisher}) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<div className='card-columns'>
			{heroes.map((hero, index) => (
				<div
					className='animate__animated animate__fadeInUp'
					style={{animationDelay: `${index * 20}ms`}}>
					<HeroCard key={hero.id} {...hero} />
				</div>
			))}
		</div>
	);
};
