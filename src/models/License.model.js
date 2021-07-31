export default class License {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get issuingOrganization() {
        return this._issuingOrganization;
    }

    set issuingOrganization(value) {
        this._issuingOrganization = value;
    }

    /**
     *
     * @return {Date}
     */
    get issueDate() {
        return this._issueDate;
    }

    set issueDate(value) {
        this._issueDate = value;
    }

    get credentialID() {
        return this._credentialID;
    }

    set credentialID(value) {
        this._credentialID = value;
    }

    get credentialUrl() {
        return this._credentialUrl;
    }

    set credentialUrl(value) {
        this._credentialUrl = value;
    }

    /**
     *
     * @param {string} _id
     * @param {string} name
     * @param {string} issuingOrganization
     * @param {string} issueDate
     * @param {string} credentialID
     * @param {string} credentialUrl
     */
    constructor({_id, name, issuingOrganization, issueDate, credentialID, credentialUrl}) {
        this._id = _id
        this._issueDate = issueDate ? new Date(issueDate) : null;
        this._credentialID = credentialID
        this._credentialUrl = credentialUrl
        this._name = name;
        this._issuingOrganization = issuingOrganization;
    }

}