//importer les modules dont on a besoin
import React, { Component } from 'react'
import TimeForm from './TimeForm';
import Timer from './Timer';

//creer le compoant Box
class Container extends Component {
    state = {
        isFormOpen: false
    }
    handleEditFormOpen = () =>{
        this.setState({ isFormOpen : true})
    }
    handleEditFormClose = () =>{
        this.setState({ isFormOpen : false})
    }
    onFormSubmit = ({id,Titre, Proget})=>{
        this.handleEditFormClose()
        this.props.onFormSubmit({id,Titre, Proget})
    }
    render() {
        return (
            <div className='list--container'>
            {this.state.isFormOpen ? (
                <TimeForm 
                    Titre= {this.props.Titre}
                    Proget = {this.props.Proget}
                    id= {this.props.id}
                    onFormSubmit={this.onFormSubmit}
                    onFormClose={this.handleEditFormClose}
                />
            ) : (
                <Timer 
                    Titre= {this.props.Titre}
                    Proget = {this.props.Proget}
                    id= {this.props.id}
                    elapsed= {this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditFormOpen={this.handleEditFormOpen}
                    onDelete={this.props.onDelete}
                    onPlay ={this.props.onPlay}
                    onPause={this.props.onPause}
                    />
            )}
            </div>
        );
    }
}
//exporter le composant Box
export default Container