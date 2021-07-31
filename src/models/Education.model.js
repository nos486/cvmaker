export default class Education {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get school() {
        return this._school;
    }

    set school(value) {
        this._school = value;
    }

    get degree() {
        return this._degree;
    }

    set degree(value) {
        this._degree = value;
    }

    get field() {
        return this._field;
    }

    set field(value) {
        this._field = value;
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

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }


    /**
     *
     * @param {string} _id
     * @param {string} school
     * @param {string} degree
     * @param {string} field
     * @param {string} startDate
     * @param {string} endDate
     * @param {string} description
     */
    constructor({_id, school, degree, field, startDate, endDate, description}) {
        this._id = _id
        this._school = school
        this._degree = degree
        this._field = field
        this._startDate = new Date(startDate)
        this._endDate = new Date(endDate) ;
        this._description = description
    }

}