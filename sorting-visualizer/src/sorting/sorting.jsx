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

        for(let i=0; i< 100; i++) {
            array.push(randomNumberFrom(5, 100));
        }

        this.setState({array});
    }

    render() {
        const {array} = this.state;
        return (
            <>
                {array.map((value, index) => (
                    <div className='array-bar'key={index}>
                        {value}
                    </div>
                ))}
            </>
        )
    }
}


//Generate random number between min and max intervals
function randomNumberFrom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}