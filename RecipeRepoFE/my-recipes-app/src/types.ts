export type Rate = {
	date : string
    value : number     
          
}

export type Ingredient = {
	name?: string
    value?: number
    measure:"Un"|"Kg"|"Lts"|"Tz"              
}

export type Steps = {
	description : string
    order : number              
}

export type Recipe = {
    name: string
    portions?:number
    ingredients?:Array<Ingredient>
    rates: Array<Rate>
    steps?: Array<Steps>
}