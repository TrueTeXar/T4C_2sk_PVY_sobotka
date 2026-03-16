import express, {json} from 'express';
import cors from 'cors';
import {getPool} from "./db.mjs";

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});


app.get("/api/rooms", async (req, res)=> {
    const [data, metaData] = await getPool().executeSql("SELECT * FROM rooms");
    res.send(data);
})


async function getData() {
    try {
        const response = fetch('/api/rooms');

        if (response.ok) {
            return await response.json();
        }
    }
    catch (error) {
        console.error(error);
    }
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port} `);
})