import { createStore, combineReducers, applyMiddleware } from 'redux';
import { prosAndConsListReducer } from '../reducers';
import { actionMapperMiddleware } from '../middlewares';
import actionMapper from '../../actionMapper';

/**
 * @name rootReducer
 * @description this constant is a rootReducer of whole application
 */
const rootReducer = combineReducers({
    prosAndConsList: prosAndConsListReducer
});


/**
 * @name middlewares
 * @description this constant is a middlewares of whole application
 */
const middlewares = applyMiddleware(actionMapperMiddleware(actionMapper));

const store = createStore(rootReducer, middlewares);

export default store;