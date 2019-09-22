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
 * @property {number} postponed    next visit time
 * @property {number} served       time when client was served
 */
class Client {
    /**
     * @constructor
     * @param {number} id           id on screen
     * @param {string} subject      reason of visit
     * @param {number} register     time of registration
     * @param {string} unique       unique id
     * @param {number} postponed    next visit time
     * @param {number} served       time when client was served
     */
    constructor(id, subject, register, unique = '', postponed = 0, served = 0) {
        this.id = id;
        this.subject = subject;
        this.register = register;
        this.unique = unique !== '' ? unique : Client.generate();
        this.posponed = postponed;
        this.served = served;
    }

    /**
     *
     * @param {Client[]} clients
     * @param {number} size
     * @returns {string} unique hash for user
     */
    static generate(clients = [], size = 5) {
        let string = 'abcdefghijklmnoqrstuvwxyz0123456789';
        let answer = '';
        for (let i = 0; i < size; i++) {
            answer += string[Math.floor(Math.random() * string.length)];
        }
        //prevent same hash
        if (clients.filter(e => e.unique === answer).length !== 0) {
            return this.generate(clients, size);
        } else {
            return answer;
        }
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
        data = JSON.parse(storage).sort((a, b) => b.time - a.time);
    } else {
        data = [];
    }
}
