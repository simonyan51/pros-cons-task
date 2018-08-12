import { listActionTypes } from './state/actionTypes';
import { ListController } from './controllers';

// ! ---- This is a main application dependency injection container ---- ! //

// -- Controllers -- //

const listController = new ListController();

/**
 * @name actionMapper
 * @description this is a main object actionMapper
 * this object connects actions with controllers
 */
const actionMapper = {
    [ listActionTypes.CNTRL_SET_LIST_ITEM ] : listController.setListItem.bind(listController),
    [ listActionTypes.CNTRL_DROP_ITEM ]: listController.dropItem.bind(listController)
};


export default actionMapper;