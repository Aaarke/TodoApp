import React, { Component } from 'react';

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}
                </div>
            </>

        )
    }
}

export default WelcomeComponent