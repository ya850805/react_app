import React, {Component} from 'react'
import PropTypes, {func} from 'prop-types'

export default class Search extends Component {

    static propTypes = {
        setSearchName : PropTypes.func.isRequired
    }

    search = () => {
        const searchName = this.input.value.trim();
        if(searchName){
            this.props.setSearchName(searchName);
        }

    }

    render() {
        return (
            <div>
                <h3>Search Github Users</h3>
                <input type="text" placeholder="enter the name you search" ref={input => this.input=input} />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}