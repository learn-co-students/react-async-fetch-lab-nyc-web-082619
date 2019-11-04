// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        peopleInSpace : []
    }

    render () {
        return (
            <div>
                {this.state.peopleInSpace.map((person,craft) => 
                    <h1>{person.name} {person.craft} </h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response=>response.json())
        .then(({people}) => this.setState({peopleInSpace: people}))
    }


}
