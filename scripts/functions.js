/**
 * ČIA YRA BENDRAI NAUDOJAMOS FUNKCIJOS
 *
 *
 */

/**
 * localStorage item pavadinimas
 */
const name = 'clients';
let storage = {};
/**
 * @type {Client[]}
 */
let data = [];

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
