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
        id: 10,
        subject: 'registracija',
        register: 1569269051187,
        unique: 'aql5d_10',
        served: 1569269139800,
    },
    {
        id: 9,
        subject: 'isdavimas',
        register: 1569268977524,
        unique: 'foqba_9',
        served: 0,
    },
    {
        id: 6,
        subject: 'registracija',
        register: 1569246836658,
        unique: 'kxqo2_6',
        served: 1569247459254,
    },
    {
        id: 8,
        subject: 'registracija',
        register: 1569246833149,
        unique: 'igaeo_8',
        served: 1569247354666,
    },
    {
        id: 4,
        subject: 'registracija',
        register: 1569246830319,
        unique: 'vst7v_4',
        served: -1,
    },
    {
        id: 3,
        subject: 'registracija',
        register: 1569246829361,
        unique: 'm467y_3',
        served: 1569247095577,
    },
    {
        id: 2,
        subject: 'registracija',
        register: 1569246828207,
        unique: '6wtde_2',
        served: 1569246931831,
    },
    {
        id: 5,
        subject: 'registracija',
        register: 1569243231411,
        unique: 'oa4u2_5',
        served: 1569243742327,
    },
    {
        id: 1,
        subject: 'registracija',
        register: 1569243195141,
        unique: 'ey3fl_1',
        served: 1569243291050,
    },
    {
        id: 7,
        subject: 'isdavimas',
        register: 1569239635293,
        unique: '63m9b_7',
        served: 1569239906769,
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
