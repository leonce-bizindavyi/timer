//importer les modules dont on a besoin
import React, { Component } from 'react'
import '../helpers.js'
//creer le compoant Box
class Timer extends Component {
    componentDidMount(){
        this.myInterval = setInterval(()=>{this.forceUpdate()}, 50)
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    handPlay = () =>{
        this.props.onPlay(this.props.id)
    }
    handPause = () =>{
        this.props.onPause(this.props.id)
    }
    renderButton() {
        if (this.props.runningSince) {
            return <button onClick={this.handPause} className='button'>Pause</button>
        } else {
            return <button onClick={this.handPlay} className='button'>Play</button>
        } 
    }
    render() {
        const elapsedString = window.helpers.renderElapsedString(this.props.elapsed, this.props.runningSince)
        return (
            <div className='timer--box'>
            <div className='timer--content'>
            <div className='timer--header'>
                <h2>{this.props.Titre}</h2>
            </div>
            <div className='timer--meta'>
            <p>{ this.props.Proget }</p>
            </div>
            <div className='timer--h2'>
                <h4>{elapsedString}</h4>
            </div>
            <div className='actions'>
            <span onClick={() =>{this.props.onDelete(this.props.id) }} className='trash'>Supprimer</span>
            <span onClick={this.props.onEditFormOpen} className='edit'>Modifier</span>
            </div>
            </div>
            {this.renderButton()}
            </div>
        );
    }
}
//exporter le composant Box
export default Timer