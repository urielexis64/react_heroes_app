import React from "react";
import queryString from "query-string";
import {HeroCard} from "../heroes/HeroCard";
import {useForm} from "../../hooks/useForm";
import {useLocation} from "react-router";
import {getHeroesByName} from "../../selectors/getHeroesByName";

export const SearchScreen = ({history}) => {
	const location = useLocation();

	const {q = ""} = queryString.parse(location.search);

	const [values, handleInputChange] = useForm({
		query: q,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`?q=${values.query}`);
	};

	const heroesFiltered = getHeroesByName(q);

	return (
		<div>
			<h1>SearchScreen</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Search Form</h4>
					<hr />

					<form onSubmit={handleSubmit}>
						<input
							value={values.query}
							className='form-control'
							type='text'
							name='query'
							autoComplete='off'
							onChange={handleInputChange}
							placeholder='Find your hero'
						/>
						<button className='btn m-1 btn-outline-primary btn-block'>Search</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					{heroesFiltered.length === 0 ? (
						<p>There's no results.</p>
					) : (
						heroesFiltered.map((hero) => <HeroCard key={hero.id} {...hero} />)
					)}
				</div>
			</div>
		</div>
	);
};
