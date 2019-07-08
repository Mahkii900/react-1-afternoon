import React, {Component} from 'react'

class EvenAndOdd extends Component {
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine'/>
                <button className='confirmationButton'></button>
                <span className='resultsBox'>Evens: {this.state.evenArray}</span>
                <span className='restulsBox'>Odds: {this.state.oddArray}</span>
            </div>
        )
    }

    constructor() {
        super()
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
}

export default EvenAndOdd