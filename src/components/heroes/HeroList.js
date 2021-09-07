import React, {useMemo} from "react";
import {getHeroesByPublisher} from "../../selectors/getHeroesByPublisher";
import {HeroCard} from "./HeroCard";

export const HeroList = ({publisher}) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<div className='card-columns'>
			{heroes.map((hero, index) => (
				<div key={hero.id} style={{animationDelay: `${index * 20}ms`}}>
					<HeroCard {...hero} />
				</div>
			))}
		</div>
	);
};
