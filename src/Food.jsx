import { Component } from "react";

class Food extends Component{
    constructor(){
        super();
    }
    render(){
        const foodList = this.props.data.map((food, i) => {
            return(
                <div className="max-w-sm bg-white rounded-lg border border-gray-100 shadow-md dark:bg-white-600 dark:border-gray-300 mt-3">
                    <img className="w-full px-8 pt-3" src={`${food.image}`} />
                    <h5 key={i} className='text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black'>{food.name}</h5>
                    <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none 
                            focus:ring-4 focus:ring-blue-300 font-medium rounded-full 
                            text-md px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 
                            dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Like this!</button>
                </div>
            )
        })
        return(
                <>
                    {foodList}
                </>
        )
    }
}

export default Food;