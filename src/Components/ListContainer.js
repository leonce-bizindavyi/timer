//importer les modules dont on a besoin
import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

//creer le composant ListContainer
const ListContainer = props => {
  return props.timer.map(timer => {
    return (
      <Container
        onFormSubmit={props.onFormSubmit}
        key={timer.id}
        {...timer}
        onDelete={props.onDelete}
        onPlay={props.onPlay}
        onPause={props.onPause}
      />
    );
  });
};

ListContainer.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  timer: PropTypes.array.isRequired,
  onPause: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
};

//exporter le composant ListContainer
export default ListContainer;