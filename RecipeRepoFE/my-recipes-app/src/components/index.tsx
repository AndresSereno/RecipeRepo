import React, {Component} from 'react'

import Home from './pages/RecipeSearch'
import RecipeDetail from './pages/RecipeDetail'
import RecipeAdd from './pages/RecipeAdd'
import BestRecipes from './pages/BestRecipes'
import Error404 from './pages/Error404'





//import './ui'
import { 
	Route,
	BrowserRouter as Router,
	Switch
} from 'react-router-dom'

type AppState = {
    loading : boolean           
}

type Props = {}

class App extends Component<Props,AppState> {
    state = {loading : false}
    

    render(){
        return this.state.loading===true
            ? <h1>Caargando</h1>
            : (
                <Router>
                    <div id="layout">           
                        <div id="main">
                            <main>
                                <Switch>
                                    <Route path='/' exact component={Home} />
                                    <Route path='/recipeDetail' component={RecipeDetail} />
                                    <Route path='/addRecipe' component={RecipeAdd} />
                                    <Route path='/recipeRank' component={BestRecipes} />
                                    <Route component={Error404} />
                                </Switch>
                            </main>
                        </div>

                    </div>
                </Router>
        )
    }
        
    
}



export default App