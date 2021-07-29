import ExperienceModel from "@/models/Experience.model";

export default class User {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get userJson() {
        return this._userJson;
    }

    set userJson(value) {
        this._userJson = value;
    }

    get username() {
        return this.capitalizeFirstLetter(this._username);
    }

    set username(value) {
        this._username = value;
    }

    get firstName() {
        return this.capitalizeFirstLetter(this._firstName);
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this.capitalizeFirstLetter(this._lastName);
    }

    set lastName(value) {
        this._lastName = value;
    }

    get gender() {
        return this.capitalizeFirstLetter(this._gender);
    }

    set gender(value) {
        this._gender = value;
    }

    get email() {
        return this.capitalizeFirstLetter(this._email);
    }

    set email(value) {
        this._email = value;
    }

    get headLine() {
        return this.capitalizeFirstLetter(this._headLine);
    }

    set headLine(value) {
        this._headLine = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get website() {
        return this.capitalizeFirstLetter(this._website);
    }

    set website(value) {
        this._website = value;
    }

    get github() {
        return this.capitalizeFirstLetter(this._github);
    }

    set github(value) {
        this._github = value;
    }

    get linkedin() {
        return this.capitalizeFirstLetter(this._linkedin);
    }

    set linkedin(value) {
        this._linkedin = value;
    }

    get country() {
        return this.capitalizeFirstLetter(this._country);
    }

    set country(value) {
        this._country = value;
    }

    get city() {
        return this.capitalizeFirstLetter(this._city);
    }

    set city(value) {
        this._city = value;
    }

    /**
     *
     * @return {Date}
     */
    get birthday() {
        return this._birthday;
    }

    set birthday(value) {
        this._birthday = value;
    }

    get about() {
        return this._about;
    }

    set about(value) {
        this._about = value;
    }

    /**
     *
     * @return {{title:string,list:string[],icon:string}[]}
     */
    get skills() {
        return this._skills;
    }

    set skills(value) {
        this._skills = value;
    }

    /**
     *
     * @return {{title:	string,company:	string,startDate:Date,endDate:Date,atThisRole:boolean,description:string}[]}
     */
    get experiences() {
        return this._experiences;
    }

    set experiences(value) {
        this._experiences = value;
    }

    get educations() {
        return this._educations;
    }

    set educations(value) {
        this._educations = value;
    }

    get licenses() {
        return this._licenses;
    }

    set licenses(value) {
        this._licenses = value;
    }

    get languages() {
        return this._languages.map((language) => {
            return this.capitalizeFirstLetter(language)
        });
    }

    set languages(value) {
        this._languages = value;
    }

    get avatar() {
        return this._avatar;
    }

    set avatar(value) {
        this._avatar = value;
    }

    /**
     *
     * @return {{color:string,type:string}}
     */
    get settings() {
        return this._settings;
    }

    set settings(value) {
        this._settings = value;
    }


    /**
     * @param _id
     * @param username
     * @param firstName
     * @param lastName
     * @param gender
     * @param email
     * @param headLine
     * @param phone
     * @param website
     * @param github
     * @param linkedin
     * @param country
     * @param city
     * @param birthday
     * @param about
     * @param {[Object]} skills
     * @param {Object[]} experiences
     * @param {[Object]} educations
     * @param {[Object]} licenses
     * @param {[String]} languages
     * @param {Object} settings
     */
    constructor({
                    _id,
                    username,
                    firstName,
                    lastName,
                    gender,
                    email,
                    headLine,
                    phone,
                    website,
                    github,
                    linkedin,
                    country,
                    city,
                    birthday,
                    about,
                    skills,
                    experiences,
                    educations,
                    licenses,
                    languages,
                    settings
                }) {
        this._id = _id
        this._username = username
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._email = email
        this._headLine = headLine
        this._phone = phone
        this._website = website
        this._github = github
        this._linkedin = linkedin
        this._country = country
        this._city = city
        this._birthday = new Date(birthday)
        this._about = about
        this._skills = skills
        this._experiences = []
        for (const experience of experiences) {
            this._experiences.push(new ExperienceModel(experience))
        }
        this._educations = educations
        this._licenses = licenses
        this._languages = languages
        this._avatar = ""
        this._settings = settings

    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}