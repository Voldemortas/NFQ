'use strict';
/**
 * localStorage item pavadinimas
 */
const name = 'clients';
let storage = {};
/**
 * @type {Array.<{id: Number, subject: String, time: Number}>}
 */
let data = [];
function init() {
    storage = localStorage.getItem(name);
    if (storage != null) {
        data = JSON.parse(storage);
    }
}
