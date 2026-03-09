import express, {json} from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});


app.get('/api/rooms', function (req, res) {
    res.send([
        {
            id: 1,
            roomNumber: "S115",
            building: "Campus",
            capacity: 50,
            type: "Lecture Hall"
        }
    ]);
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port} `);
})