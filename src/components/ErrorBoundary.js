import React, { Component} from 'react'

class ErrorBounday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. An error happens!</h1>
        }
        else {
            return this.props.children
        }
    }
}

export default ErrorBounday;