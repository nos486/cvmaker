export default class Experience {

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    get icon() {
        return this._icon;
    }

    set icon(value) {
        this._icon = value;
    }
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get company() {
        return this._company;
    }

    set company(value) {
        this._company = value;
    }

    /**
     *
     * @return {Date}
     */
    get startDate() {
        return this._startDate;
    }

    set startDate(value) {
        this._startDate = value;
    }

    /**
     *
     * @return {Date}
     */
    get endDate() {
        return this._endDate;
    }

    set endDate(value) {
        this._endDate = value;
    }

    get atThisRole() {
        return this._atThisRole;
    }

    set atThisRole(value) {
        this._atThisRole = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    /**
     *
     * @param {string} _id
     * @param {string} title
     * @param {string} company
     * @param {string} startDate
     * @param {string} endDate
     * @param {boolean} atThisRole
     * @param {string} description
     * @param {string} icon
     */
    constructor({_id,title, company, startDate, endDate, atThisRole, description,icon}) {
        this._id = _id
        this._title = title
        this._company = company
        this._startDate = new Date(startDate)
        this._endDate = endDate ? new Date(endDate) : null
        this._atThisRole = atThisRole;
        this._description = description
        this._icon = icon
    }

    toString(){

    }

}