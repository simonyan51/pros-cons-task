import React from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../../core/constants/objects';
import './styles.css';
import PropTypes from 'prop-types';

const cardSource = {
    beginDrag({ children, onDrag }, monitor) {
        if (onDrag) {
            onDrag();
        }
        return children.props;
    },
    canDrag(props, monitor) {
        return props.canDrag;
    },
    endDrag({ onEndDrag }) {
        if (onEndDrag) {
            onEndDrag();
        }
    }
  };
  
  
const collect = (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
      isDraggable: monitor.canDrag()
    };
}

/**
 * @name DragSourceWrapper
 * @description this function is wrapper component for adding draggable functionality to other components
 */
const DragSourceWrapper = ({ connectDragSource, isDraggable, isDragging, children }) => {
    const pointerClass = isDraggable ? 'DragSourceWrapper-grabbing' : 'DragSourceWrapper-pointer';
    return (connectDragSource(<div className={pointerClass}>{children}</div>));
}

DragSourceWrapper.propTypes = {
    canDrag: PropTypes.bool,
    onEndDrag: PropTypes.func,
    onDrag: PropTypes.func
}

DragSourceWrapper.defaultProps = {
    canDrag: true
}

export default DragSource(ItemTypes.ListItem, cardSource, collect)(DragSourceWrapper);