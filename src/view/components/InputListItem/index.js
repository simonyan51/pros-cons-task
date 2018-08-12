import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * @name InputListItem
 * @description this is a stateless component InputListItem
 * this component handles input typing and send callback on typing
 */
const InputListItem = ({ index, item, onType }) => {
    return (
        <div className="InputListItem-container">
            <div className="InputListItem-index">
                {index}
            </div>
            <div className="InputListItem-input-container">
                <input className="InputListItem-input" 
                    type="text" value={item.value} onChange={onType} />
            </div>
        </div>
    );
}

/**
 * @description prop types
 */
InputListItem.propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onType: PropTypes.func.isRequired
}

export default InputListItem;