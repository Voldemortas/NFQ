import express from 'express';
import cors from 'cors';
const Port = 35000;
let backend = express();
backend.use(cors());
backend.use(express.json());
/**
 * iš tiesų tai reikėtų naudot duomenų bazę, bet dėl paprastumo panaudosim vidinę atmintį
 * @type {Client[]}
 */
let data = [
    {
        id: 3,
        subject: 'registracija',
        register: 1568715980299,
        unique: '5h83o',
        served: 0,
    },
    {
        id: 2,
        subject: 'pratesimas',
        register: 1568715973299,
        unique: 'gub0t',
        served: 0,
    },
    {
        id: 1,
        subject: 'isdavimas',
        register: 1568715971299,
        unique: 'vnxk1',
        served: 0,
    },
    {
        id: 999,
        subject: 'pratesimas',
        register: 1568715970463,
        unique: 'det4i',
        served: 0,
    },
    {
        id: 998,
        subject: 'uzsakymas',
        register: 1568715960999,
        unique: 'uvrmf',
        served: 0,
    },
    {
        id: 997,
        subject: 'uzsakymas',
        register: 1568715960299,
        unique: 'lmsm5',
        served: 0,
    },
    {
        id: 996,
        subject: 'isdavimas',
        register: 1568715959299,
        unique: 'z8iz0',
        served: 0,
    },
    {
        id: 995,
        subject: 'registracija',
        register: 1568715958299,
        unique: 'nmloo',
        served: 0,
    },
];

backend.get('/getdata', (req, res) => {
    res.set('Content-Type', 'text/json');
    res.send(JSON.stringify(data, null, 4));
});

backend.put('/putdata', (req, res) => {
    res.set('Content-Type', 'text/json');
    try {
        data = req.body.clients;
        res.send(JSON.stringify({ success: true }, null, 4));
    } catch (e) {
        res.send(JSON.stringify({ success: false }, null, 4));
    }
});

backend.delete('/deleteData', (req, res) => {
    res.set('Content-Type', 'text/json');
    if (req.body.key === 'clients') {
        data = [];
        res.send(JSON.stringify({ success: true }, null, 4));
    } else {
        res.send(JSON.stringify({ success: false }, null, 4));
    }
});

backend.listen(Port, () => {
    console.log('App is running on http://localhost:' + Port);
});
