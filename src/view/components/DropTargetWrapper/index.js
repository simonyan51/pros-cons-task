import { DropTarget  } from 'react-dnd';
import { ItemTypes } from '../../../core/constants/objects';
import PropTypes from 'prop-types';

const cardSource = {
    drop(props, monitor) {
      if (props.onDrop) {
        props.onDrop(monitor.getItem());
      }
      
    },
    canDrop({ canDrop }) {
      return canDrop;
    }
  };
  
  
const collect = (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget()
    };
}

/**
 * @name DropTargetWrapper
 * @description this function is wrapper component for adding droppable functionality to other components
 */
const DropTargetWrapper = ({ connectDropTarget, children }) => {
    return (connectDropTarget(children));
}

DropTargetWrapper.propTypes = {
  onDrop: PropTypes.func,
  canDrop: PropTypes.bool
}

DropTargetWrapper.defaultProps = {
  canDrop: true
}

export default DropTarget(ItemTypes.ListItem, cardSource, collect)(DropTargetWrapper);