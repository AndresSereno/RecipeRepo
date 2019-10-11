import React, { Component } from 'react'
import {recetas} from '../../data/recetas'
import RecipesList from '../pages/RecipesList'
import { Recipe } from '../../types'

type State = {
    criterial: string
}

const filterByName=(recipes:Recipe[],criterial:string)=>{
    return recipes.filter(recipe => recipe.name.includes(criterial))
} 


export default class Home extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {criterial:""}

    }

    handleCriterialChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({ criterial:e.target.value })
    }
	render() {
		return (
			<article>
                <form>
                    <input type="text"  onChange = {this.handleCriterialChange}></input>
                    <input type = "button" value = "Buscar"></input>
                </form>

				<RecipesList recipes={filterByName(recetas,this.state.criterial)}></RecipesList>
                <a href="/addRecipe">Agregar Receta</a>  
			</article>
		)
	}
}