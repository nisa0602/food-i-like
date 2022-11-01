import { Component } from "react";

class Food extends Component{
    constructor(){
        super();
        this.state = {
            favFood: []
        }
    }
    likeButton = (index) => {
        const copyFavFood = [...this.state.favFood];
        //mengambil index yg diklik, trs push ke copy-an state
        copyFavFood.push(this.props.data[index]);
        this.setState({
            favFood: copyFavFood
        })
    }
    render(){
        const foodList = this.props.data.map((food, i) => {
            return(
                <div key={i} className="max-w-sm bg-white rounded-lg border border-gray-100 shadow-md dark:bg-white-600 dark:border-gray-300 mt-3">
                    <img className="w-full px-8 pt-3" src={`${food.image}`} />
                    <h5 className='text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black'>{food.name}</h5>
                    <button 
                        onClick={()=>{this.likeButton(i)}}
                        type='button' 
                        className='ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none 
                            focus:ring-4 focus:ring-blue-300 font-medium rounded-full 
                            text-md px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 
                            dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                            Like this!
                        </button>
                </div>
            )
        })

        const myFood = this.state.favFood.map((food, i) => {
            return(
                <div key={i} className='text-center'>
                    <h1 className="text-xl font-bold">I like this food:</h1>
                    <h3 className="text-lg">{food.name}</h3>
                </div>
            )
        })
        return(
                <>  
                    <h1 className="text-center text-2xl font-bold">Choose Your Food</h1>
                    <div className="grid grid-cols-3">
                        {foodList}
                    </div>
                    <div>
                        {myFood}
                    </div>
                </>
        )
    }
}

export default Food;