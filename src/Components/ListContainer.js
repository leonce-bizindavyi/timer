//importer les modules dont on a besoin
import React from 'react'
import PropTypes from 'prop-types';
import Container from './Container';

//creer le compoant Box
const ListContainer = props => {
        return props.timer.map((timer =>{
            return <Container 
            onFormSubmit={props.onFormSubmit} 
            key={timer.id}
            {...timer}
            onDelete={props.onDelete}
            onPlay ={props.onPlay}
            onPause={props.onPause}
            />
        }))
        return (
            <div className='list--container'>
                {renderContainer()}
            </div>
        );
}

ListContainer.PropTypes={
    onDelete : PropTypes.func.isRequired,
    onFormSubmit : PropTypes.func.isRequired,
    timer : PropTypes.func.isRequired,
    onPause : PropTypes.func.isRequired,
    onPlay : PropTypes.func.isRequired,
}
//exporter le composant Box
export default ListContainer