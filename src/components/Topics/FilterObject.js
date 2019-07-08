import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        this.state = {
            unFilteredArray: [{name: 'Bob'}, {name: 'Joe'}, {name: 'Freddy-boy'}],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterArray(input) {
        
    }
    
    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: </span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={ () => this.filterArray(this.state.userInput)}> Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: </span>
            </div>
        )
    }
}

export default FilterObject