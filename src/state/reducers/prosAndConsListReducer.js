import createReducer from '../../core/utils/createReducer';
import { listActionTypes } from '../actionTypes/';
import ListItem from '../../core/classes/ListItem';

/**
 * @name setProsList
 * @description this function set pros list
 */
const setProsList = (state, action) => {
    return {...state, prosList: [...action.payload]};
};

/**
 * @name setConsList
 * @description this function set cons list
 */
const setConsList = (state, action) => {
    return {...state, consList: [...action.payload]};
};

/**
 * @name initialStatee
 * @description initial state for pros and cons list
 */
const initialState = {
    prosList: [new ListItem()],
    consList: [new ListItem(new Date().getTime() + 1)]
}

const actions = {
    [ listActionTypes.RX_SET_PROS_LIST ]: setProsList,
    [ listActionTypes.RX_SET_CONS_LIST ]: setConsList
};

const prosAndConsListReducer = createReducer(initialState, actions);

export default prosAndConsListReducer;