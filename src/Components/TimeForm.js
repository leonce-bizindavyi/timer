//importer les modules dont on a besoin
import React, { Component } from 'react'
//creer le compoant Box
class TimeForm extends Component {
    state = {
        Titre: this.props.Titre || "",
        Proget: this.props.Proget || ""
    }
    handleTitleChange = (e) =>{
        this.setState({Titre: e.target.value})
    }
    handleProgetChange = (e) =>{
        this.setState({Proget: e.target.value})
    }
    handleClick = () =>{
        const {Titre, Proget} = this.state
        if(this.props.id){
            //on va modifier
            const id =this.props.id
            this.props.onFormSubmit({id,Titre, Proget})
        }else{
            //on va creer
            this.props.onFormSubmit({Titre, Proget})
        }
    }
    render() {
        const submitText = this.props.Titre ? "Modifier" : "Creer"
        return (
            <div className='form'>
                <div className='form--content'>
                    <div className='form--item'>
                        <label>Titre</label>
                        <input type='text' 
                        placeholder='Mon titre' 
                        value={this.state.Titre}
                        onChange={this.handleTitleChange}>
                        </input>
                    </div>
                    <div className='form--item'>
                        <label>Projet</label>
                        <input type='text' 
                        placeholder='Mon projet' 
                        value={this.state.Proget} 
                        onChange={this.handleProgetChange}>
                        </input>
                    </div>
                </div>
                <div className='form--button'>
                    <button className='button btn--submit'
                      onClick={this.handleClick}>
                        {submitText}
                    </button>
                    <button onClick={this.props.onFormClose} className='button btn--cancel'>
                        Annuler
                    </button>
                </div>
            </div>
        );
    }
}
//exporter le composant Box
export default TimeForm