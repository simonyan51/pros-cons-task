import defaultTypes from '../../core/constants/defaultTypes';

/**
 * @name actionMapperMiddleware
 * @description this middleware detects which action needs to be mapped to controllers, which to reducers
 */
const actionMapperMiddleware = actionMapper => state => next => action => {
    const { type } = action;
    if (actionMapper[type] && typeof actionMapper[type] === defaultTypes.function) {
        actionMapper[type](state, action);
    } else {
        next(action);
    }
}

export default actionMapperMiddleware;