import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { InputListItem, DragSourceWrapper } from '..';

/**
 * @name InputList
 * @description this is a stateless functional component InputList
 * this component maps input list items
 */
const InputList = ( { title, list, onType, onDrag, onEndDrag } ) => {
    return (
        <section className="InputList-container">
            <div className="InputList-title">{title}</div>
            <div className="InputList-items">
                { 
                    list.map((item, index) => (
                            <DragSourceWrapper 
                                onDrag={onDrag}
                                onEndDrag={onEndDrag}
                                canDrag={!!item.value} key={item.id}>
                                    <InputListItem
                                    index={index + 1} 
                                    item={item}  
                                    onType={event => onType(item, event.target.value, index)} />
                            </DragSourceWrapper>    
                        )
                    )
                }
            </div>
        </section>
    );
}


/**
 * @description prop types
 */
InputList.propTypes = {
    title: PropTypes.string.isRequired,
    onDrag: PropTypes.func,
    onEndDrag: PropTypes.func,
    list: PropTypes.array.isRequired,
    onType: PropTypes.func.isRequired
}

export default InputList;