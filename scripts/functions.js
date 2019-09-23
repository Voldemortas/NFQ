/**
 * ČIA YRA BENDRAI NAUDOJAMOS FUNKCIJOS
 *
 *
 */

/**
 * port'as naudojamas, norint jungtis į serverį
 * @type {number}
 */
const Port = 35000;

/**
 * pirminis serverio url
 * @type {string}
 */
const Url = `http://localhost:${Port}`;

/**
 * {string} localStorage item pavadinimas
 */
const Name = 'clients';
/**
 * @type {Client[]}
 */
let data = [];

/**
 * Specialistų darbo pobūdžio sąrašas
 * @type {{pratesimas: string, isdavimas: string, uzsakymas: string, registracija: string}}
 */
const Fields = {
    registracija: 'Registracija',
    isdavimas: 'Išdavimas',
    pratesimas: 'Pratęsimas',
    uzsakymas: 'Užsakymas',
};
/**
 * norint naudoti serverį, o ne localStorage, pakeisti į false
 * @type {boolean}
 */
const UseLocal = true;
/**
 * užkrauna duomenis iš localStorge arba serverio
 */
async function loadData() {
    if (UseLocal) {
        let storage = localStorage;
        if (storage != null) {
            data = JSON.parse(localStorage.getItem(Name));
            data =
                data === null
                    ? []
                    : data.sort((a, b) => b.register - a.register);
        } else {
            throw new Error('No localStorage');
        }
    } else {
        let output = await fetch(Url + '/getdata');
        let json = await output.json();
        console.log(json);
        data = json.map(
            e => new Client(e.id, e.subject, e.register, e.unique, e.served)
        );
    }
}

/**
 * padeda duomenis į localstorage arba serverį
 * @return {boolean} success?
 */
async function putData() {
    if (UseLocal) {
        let storage = localStorage;
        if (storage != null) {
            localStorage.setItem(Name, JSON.stringify(data));
            return true;
        } else {
            throw new Error('No localStorage');
        }
    } else {
        let output = await fetch(Url + '/putdata', {
            method: 'PUT',
            body: JSON.stringify({ clients: data }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let json = await output.json();
        return (
            json.success !== undefined &&
            Object.keys(json).includes('success') &&
            json.success
        );
    }
}

async function deleteData() {
    if (UseLocal) {
        let storage = localStorage;
        if (storage != null) {
            localStorage.removeItem(Name);
            data = [];
            return true;
        } else {
            throw new Error('No localStorage');
        }
    } else {
        let output = await fetch(Url + '/deleteData', {
            method: 'DELETE',
            body: JSON.stringify({ key: 'clients' }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let json = await output.json();
        if (
            json.success !== undefined &&
            Object.keys(json).includes('success') &&
            json.success
        ) {
            data = [];
            return true;
        } else {
            return false;
        }
    }
}
