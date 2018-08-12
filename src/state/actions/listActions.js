import { listActionTypes } from '../actionTypes'

export const cntrlSetListItem = (item, value, index, type) => {
    const payload = {
        value, 
        item, 
        index, 
        type
    }
    return {
        type: listActionTypes.CNTRL_SET_LIST_ITEM,
        payload
    }
}

export const cntrlDropItem = (item, type) => {
    const payload = { 
        item,
        type
    }
    return {
        type: listActionTypes.CNTRL_DROP_ITEM,
        payload
    }
}

export const rxSetProsList = payload => {
    return {
        type: listActionTypes.RX_SET_PROS_LIST,
        payload
    }
}

export const rxSetConsList = payload => {

    return {
        type: listActionTypes.RX_SET_CONS_LIST,
        payload
    }
}