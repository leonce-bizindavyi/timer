//importer les modules dont on a besoin
import React, { Component } from 'react'
import ActionContainer from './ActionContainer';
import ListContainer from './ListContainer';
import { v4 as uuidv4 } from 'uuid';
//creer le compoant Box
class Box extends Component {
    state ={
        timers: [
            {
                Titre: "Apprendre React",
                Proget: "Development web",
                id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
                elapsed: 5609620,
                runningSince: null
            },{
                Titre: "Apprendre Angular",
                Proget: "Development web",
                id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d4",
                elapsed: 1349620,
                runningSince: null
            }
        ]
    }
    handleCreateTimer = ({Titre, Proget}) =>{
        const timer = {
            Titre,
            Proget,
            id: uuidv4(),
            elapsed:0,
            runningSince: null
        }
        this.setState({
            timers: [...this.state.timers, timer]
        })
    } 
    handleEditerTimer = ({id,Titre, Proget}) =>{
        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === id){
                    return {
                        ...timer,
                        Titre,
                        Proget
                    }
                }
                return {...timer}
            } )
        })
    }
    handleDelete = id => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        })
    }
    handlePause = id =>{
        const now = Date.now()
        this.setState({
            timers: this.state.timers.map(timer =>{
                if (id  === timer.id) {
                    const nextelapsed = now - timer.runningSince
                    return {
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextelapsed
                    }
                } else {
                    return { ...timer}
                }
            })
        })
    }
    handlePlay = id =>{
        const now = Date.now()
        this.setState({
            timers: this.state.timers.map(timer =>{
                if (id  === timer.id) {
                    return {
                        ...timer,
                        runningSince: now
                    }
                } else {
                    return { ...timer}
                }
            })
        })
    }
    render() {
        return (
            <div className='boxed--view'>
                <div className='boxed--view__box'>
                    <ListContainer 
                    onDelete={this.handleDelete} 
                    onFormSubmit={this.handleEditerTimer} 
                    timer= {this.state.timers} 
                    onPause={this.handlePause}
                    onPlay={this.handlePlay}
                    />
                    <ActionContainer onFormSubmit = {this.handleCreateTimer} />
                </div>
            </div>
        );
    }
}
//exporter le composant Box
export default Box