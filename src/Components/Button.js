//importer les modules dont on a besoin
import React, { Component } from 'react'

//creer le compoant Box
class Button extends Component {
    render() {
        return (
            <button onClick={this.props.handleFormOpen} className='button__outline'>
                +
            </button>
        );
    }
}
//exporter le composant Box
export default Button