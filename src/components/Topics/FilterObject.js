import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [{
                name: 'bob',
                job: 'plumber',
                money: 'none'
            }, {
                name: 'joe',
                hobbies: 'running',
                likesSoccer: false
            }, {
                age: 22,
                hobbies: 'golf',
                money: 'lots'
            }],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterArray(input) {
        let arr = this.unFilteredArray
        let filtered = arr.filter((ele) => {Object.keys(ele).includes(input)})
        this.setState({filteredArray: filtered})
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