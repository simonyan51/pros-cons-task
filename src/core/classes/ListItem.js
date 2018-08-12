/**
 * @name ListItem
 * @description this is a plain class List Item
 */
class ListItem {

    // -- Constructor -- //
    
    constructor(id = new Date().getTime()) {
        this.id = id;
        this._value = ''
    }

    // -- Getters / Setters -- //

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}

export default ListItem;