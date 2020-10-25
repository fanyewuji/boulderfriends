import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import {robots} from './robots';
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            friends: [],
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            resp => resp.json()
        ).then(
            users => this.setState({ friends: users})
        )
    }

    render() {
        const {friends, searchfield} = this.state;
        const filteredFriends = friends.filter(friend => {
            return friend.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (friends.length === 0){
            return <h1>loading...</h1>
        } 
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Boulder Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots = {filteredFriends} />
                        </ErrorBoundary>
                        
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;