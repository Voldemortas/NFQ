'use strict';
/**
 * localStorage item pavadinimas
 */
const name = 'clients';
let storage = {};
/**
 * @type {Client[]}
 */
let data = [];

/**
 * @property {number} id           id on screen
 * @property {string} subject      reason of visit
 * @property {number} register     time of registration
 * @property {string} unique       unique id
 * @property {number} served       time when client was served
 */
class Client {
    /**
     * @constructor
     * @param {number} id           id on screen
     * @param {string} subject      reason of visit
     * @param {number} register     time of registration
     * @param {string} unique       unique id
     * @param {number} served       time when client was served
     */
    constructor(id, subject, register, unique = '', served = 0) {
        this.id = id;
        this.subject = subject;
        this.register = register;
        this.unique = unique !== '' ? unique : this.generate(id);
        this.served = served;
    }

    /**
     *
     * @param {number} id
     * @param {number} size
     * @returns {string} unique hash for user
     */
    generate(id, size = 5) {
        let string = 'abcdefghijklmnoqrstuvwxyz0123456789';
        let answer = '';
        for (let i = 0; i < size; i++) {
            answer += string[Math.floor(Math.random() * string.length)];
        }
        //prevent same hash
        return answer + '_' + id;
    }
}

const fields = {
    registracija: 'Registracija',
    isdavimas: 'Išdavimas',
    pratesimas: 'Pratęsimas',
    uzsakymas: 'Užsakymas',
};
function loadStorage() {
    storage = localStorage.getItem(name);
    if (storage != null) {
        data = JSON.parse(storage).sort((a, b) => b.register - a.register);
    } else {
        data = [];
    }
}
