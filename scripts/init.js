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
function loadStorage() {
    storage = localStorage.getItem(name);
    if (storage != null) {
        data = JSON.parse(storage).sort((a, b) => b.time - a.time);
    } else {
        data = [];
    }
}
