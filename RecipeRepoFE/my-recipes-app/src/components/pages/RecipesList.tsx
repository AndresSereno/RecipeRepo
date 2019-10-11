import React, { Component } from 'react'

import { Rate, Recipe } from '../../types'

const getPromedioValoraciones =(valores:Array<Rate>)=>valores.reduce((acc, rate) => acc + rate.value, 0) / valores.length

type Props = {recipes:Recipe[]}

export default class RecipesList extends Component<Props> {
	render() {
		return (
			<article>
				<table>
					<tr>
						<th>Receta</th>
						<th>Puntaje Promedio</th>
					</tr>
					<tbody>
						{this.props.recipes.map((receta) =>{
							return (
							<tr >
								<td>{receta.name}</td>
								<td align="center">{getPromedioValoraciones(receta.rates)}
								</td>
							</tr>
							);
							})
						}
        			</tbody>
				</table>
			</article>
		)
	}
}