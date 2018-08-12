/**
 * @name createReducer
 * @description this is a helper for creating reducers
 */
const createReducer = (initialState, actionHandlers) => (state = initialState, action) => {
    return actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state;
};

export default createReducer;