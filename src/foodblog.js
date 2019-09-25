// edit.component.js

import React, { Component } from 'react';

 export default class Edit extends Component {
 	state = {
 		loading: true,
 		recipes: [],	
 	};

 	async componentDidMount() {
 		const url= "https://api.edamam.com/search?q=burger&app_id=c5da39b4&app_key=5350b072c90deef413b5f573ed35ed89&from=0&to=48&calories=591-722&health=alcohol-free";
 		const response = await fetch(url);
 		const data = await response.json();
 		this.setState({recipes: data.hits});
 		console.log(this.state.recipes)
 	}
    render() {
    	return(
    		<div>
    			<div className ="container">

			<div className="row">

				{ this.state.recipes.map((recipe) => {

	                return (

	           			<div key={recipe.recipe.calories} className ="col-md-4" style={{ marginBottom: "2rem" }}>
	           				<div className = "recipes__box">
									<img 
									className= "recipe__box-img"
									src={recipe.recipe.image}
									alt={recipe.recipe.label}/>
								<div className= "recipe__text">
										<h5 className="recipes__title">
											{recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 25)}...` }
										</h5>
										<p className= "recipes__subtitle">Publisher:  <span>{recipe.recipe.source}</span></p>
										<p className= "recipes__subtitle">Calories: <span>{recipe.recipe.calories}</span></p>
										<p className= "recipes__subtitle">Health Labels: <span>{recipe.recipe.healthLabels}</span></p>
								</div>
	           					<button className="recipe_buttons">View Recipe</button>&emsp;&nbsp;&nbsp;&nbsp;
								<button className= "recipe__buttons" ><a href={recipe.recipe.url} target="_blank">Visit Recipe</a></button>
	           				</div>
	           			</div>
	                );
	            })}
			</div>
		</div>
    		</div>
    		)
    }
        
}