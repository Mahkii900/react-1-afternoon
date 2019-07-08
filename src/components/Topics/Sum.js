import React, {Component} from 'react'

class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(val) {
        this.setState({number1: val})
    }

    updateNum2(val) {
        this.setState({number2: val})
    }

    handleSum() {
        let num = this.state.number1 + this.state.number2
        this.setState({sum: num})
    }
    
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={(e) => this.updateNumber1(e.target.value)}></input>
                <input className='inputLIne' onChange={(e) => this.updateNum2(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.handleSum()}>Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum