import React, { Component } from 'react'
import { Recipe, Ingredient, Steps } from '../../types'

type State = {
	recipe: Partial<Recipe>
}


export default class About extends Component<{},State> {
	newIngredient:Partial<Ingredient>={}
	newStep:Partial<Steps>={}
	
	constructor(props:{}){
        super(props)
        this.state = {recipe:{ingredients:[],steps:[]}}
	}
	
	addIngredient = () =>{
		this.setState(state=>{
				const newState = {...state}
				console.log("Old State",state)
				console.log("New State",newState)
				newState!.recipe!.ingredients!.push(this.newIngredient as Ingredient) 
				this.newIngredient={...this.newIngredient}
				console.log("Old State after",state)
				console.log("New State after",newState)
				return newState
						})	
	}

	addStep = () =>{
		this.setState(state=>{
			const newState = {...state}
			newState!.recipe!.steps!.push(this.newStep as Steps)
			this.newStep={}
			return newState
		})
	}

	handleIngredientNameAdd =(e:React.FocusEvent<HTMLInputElement>)=>{
		this.newIngredient.name = e.target.value
	}
	
	handleIngredientValueAdd =(e:React.FocusEvent<HTMLInputElement>)=>{
			this.newIngredient.value = parseInt(e.target.value)
	}

	handleMeasureSelection =(e:React.ChangeEvent<HTMLOptionElement>)=>{
		// @ts-ignore
		this.newIngredient.measure = e.target.value
	}

	handleStepDescAdd =(e:React.FocusEvent<HTMLInputElement>)=>{
		this.newStep.description = e.target.value
		//this.newStep.order = this.newStep.recipe.steps!.length + 1
		console.log("Step",this.newStep) 
	}

	render() {
		return (
			<article>
				<form>
					Nombre <input type="text"></input><br></br>
					Cantidad de Porciones <input type="text"></input><br></br>
					Ingredientes <input type="text" onBlur={this.handleIngredientNameAdd}></input> 
					<input type="text"  onBlur={this.handleIngredientValueAdd}></input> 
					{/* 
					// @ts-ignore */}
					<select onChange ={this.handleMeasureSelection} defaultValue="Un">
						<option value="Un">Un</option>
						<option value="Kg">Kg</option>
						<option value="Lts">Lts</option>
						<option value="Tz">Tz</option>
					</select> 
					<input type="button" onClick={this.addIngredient} value="+"></input> <br></br>
					<table>
						<tbody>
						{this.state.recipe.ingredients!.map((ingrediente,index)=>{
							return (
								<tr key={index}>
									<td>{ingrediente.name}</td> 
									<td>{ingrediente.value} 
									{ingrediente.measure}</td>
								</tr>
									)
						})}
						</tbody>
					</table>
					Pasos <input type = "text" onBlur={this.handleStepDescAdd}></input> 
					{/* 
					// @ts-ignore */}
					<input type= "button" onClick={this.addStep} value="+"></input><br></br>
					<ul>
					{this.state.recipe.steps!.map((step,index)=>{
							return (
								<li key={index}>{step.description}</li>
									)
						})}
					</ul>
					<input type="button" value="Guardar"></input>
				</form>
			</article>
		)
	}
}