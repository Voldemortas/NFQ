'use strict'
/**
 * localStorage item pavadinimas
 */
const name = 'clients'
let storage = localStorage.getItem(name)
/**
 * @type {Array.<{id: Number, subject: String, time: Number}>}
 */
let data = []
function init() {
    if (storage != null) {
        data = JSON.parse(storage)
    }
}
