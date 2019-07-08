import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: ['abra', 'kadabra', 'alakazam', 'deoxyribonucleic acid', 'inconceivable'], //Add Strings
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterStrings(input) {
        let arr = this.unFilteredArray
        let str = arr.filter((ele) => {ele.includes(input)})
        this.setState({filteredArray: str})
    }
    
    render() {
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Unfiltered: {this.unFilteredArray}</span>
                <input className='inputLine' onChange={ (e) => {this.handleChange(e.target.value)}}></input>
                <button className='confirmationButton' onClikc={ () => this.filterStrings(this.state.userInput)}></button>
                <span className='resultsBox filterStringRB'>Filtered: {this.filteredArray}</span>
            </div>
        )
    }
}

export default FilterString