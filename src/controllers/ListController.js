import Controller from '../core/classes/Controller';
import { EListType } from '../core/constants/enums';
import { rxSetProsList, rxSetConsList } from '../state/actions';
import ListItem from '../core/classes/ListItem';

class ListController extends Controller {

    // -- Logics -- //

    /**
     * @name dropItem
     * @description this method handles drop action
     */
    dropItem(store, action) {

        const { payload } = action;

        const { prosAndConsList } = store.getState();
        
        switch(payload.type) {
            case EListType.Pros:
      
            const newConsList = this._deleteItem(prosAndConsList.consList, payload.item);
            store.dispatch(rxSetConsList(newConsList));
            const prosList = this._dropItem(prosAndConsList.prosList, payload.item);
            store.dispatch(rxSetProsList(prosList));
            
            break;
            case EListType.Cons:
            
            const newProsList = this._deleteItem(prosAndConsList.prosList, payload.item);
            store.dispatch(rxSetProsList(newProsList));
            const consList = this._dropItem(prosAndConsList.consList, payload.item);
            store.dispatch(rxSetConsList(consList));
            
            break;
            default:
            
            return;
        }

    }

    /**
     * @name _deleteItem
     * @description this method deletes item from an array and return new array
     * @prop list : array of items
     * @prop data : item that should be deleted
     */
    _deleteItem(list, data) {
        return list.filter(item => item.id !== data.id);
    }

    /**
     * @name _dropItem
     * @description this method drops item into array
     * @prop list : array of items
     * @prop item : item that should be dropped
     */
    _dropItem(list, item) {
        const lastItems = list.splice(list.length - 1);
        return [...list, item, ...lastItems];
    }

    /**
     * @name setListItem
     * @description this method is a public method, which detects which list type needs to be changed
     * and also dispatch the action
     * @prop store: app store
     * @prop action: dispatched action
     */
    setListItem(store, action) {

        const { payload } = action;

        const { prosAndConsList } = store.getState();
        
        switch(payload.type) {
            case EListType.Pros:
            const prosList = this._editList(prosAndConsList.prosList, payload);
            store.dispatch(rxSetProsList(prosList));
            break;
            case EListType.Cons:
            const consList = this._editList(prosAndConsList.consList, payload);
            store.dispatch(rxSetConsList(consList));
            break;
            default:
            return;
        }
      
    }

    /**
     * @name _editList
     * @description this is a private method _editList which handles editing list of pros / cons
     * @prop list: array of pros/cons
     * @prop payload: payload of action
     */
    _editList(list, payload) {
        
        const { value, item, index } = payload;
        
        item.value = value;

        if (value === '') {
            if (list.length === 1) {
                return list;
            }
            list.splice(index, 1);
        } else if (index === list.length - 1) {
             list.push(new ListItem());
        }
        
        return list;
    }

}

export default ListController;