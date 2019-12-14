import React from 'react';
import './sorting.css';

export default class Sorting extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
           array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];

        //The for loop determines how many bars are in the array
        //The random number intervals determine how tall the bars are. We are using 5 because numbers less than 5 are harder to see
        for(let i=0; i< 310; i++) {
            array.push(randomNumberFrom(5, 550));
        }

        this.setState({array});
    }

    render() {
        const {array} = this.state;
        return (
            <>
                <div className='array-container'>

                    {array.map((value, index) => (

                        <div className='array-bar'
                            key={index}
                            style={{height: `${value}px`}}> </div>     
                        ))}

            {/* We are using an arrow function because we need a 'this' context here */}
                <button onClick={()=> this.resetArray() } >Generate New Array!</button>
                <button onClick={() => this.mergeSort() }>Merge Sort</button>
                <button onClick={() => this.quickSort() }>Quick Sort</button>
                <button onClick={() => this.bubbleSort() }>Bubble Sort</button>
                <button onClick={() => this.heapSort() }>Heap Sort</button>


                </div> 

            </>
        )
    }
}


//Generate random number between min and max intervals
function randomNumberFrom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}