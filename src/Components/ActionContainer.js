//importer les modules dont on a besoin
import React, { Component } from 'react'
import Button from './Button';
import TimeForm from "./TimeForm";
import PropTypes from 'prop-types';
//creer le compoant Box
class ActionContainer extends Component {
    static PropTypes = {
        onFormSubmit : PropTypes.func.isRequired
    }
    state = {
        isFomOpen: false }
        handleFormOpen = () =>{
            this.setState({isFomOpen: true})
        }
        handleFormClose = () =>{
            this.setState({isFomOpen: false})
        }
        onFormSubmit = ({Titre, Proget})=>{
            this.handleFormClose()
            this.props.onFormSubmit({Titre, Proget})
        }
    render() {
        if(this.state.isFomOpen){
            return <TimeForm 
            onFormSubmit ={this.onFormSubmit} 
            onFormClose={this.handleFormClose} />
        }else {
            return <Button handleFormOpen ={this.handleFormOpen} />
        }
    }
}
//exporter le composant Box
export default ActionContainer