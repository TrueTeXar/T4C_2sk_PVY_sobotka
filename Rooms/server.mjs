import express from "express";
import cors from "cors";
import getPool from "./db/db.mjs";
import {Logger} from "./logger.mjs";
import LoggingMiddleware from "./middleware/logging.middleware.mjs";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(LoggingMiddleware);

const logger = new Logger();

// Rooms
app.get('/api/rooms', async (req, res) => {
    // Získá POOL s připojením do DB
    const pool = await getPool();

    // Spustí konkrétní SQL query nad DB
    const [data] = await pool.query("SELECT * FROM rooms");

    // Vrátí data jako JSON
    res.json(data);
});
app.get('/api/rooms/:id', async (req, res) => {
    const pool = await getPool();
    const id = req.params.id;

    const [data] = await pool.query("SELECT * FROM rooms WHERE id = ?", [id]);
    res.json(data);
})
app.post('/api/rooms', async (req, res) => {
    const pool = await getPool();
    const {RoomNumber, Building, Type, Capacity} = req.body;

    await pool.query("INSERT INTO rooms (RoomNumber, Building, Capacity, Type) VALUES (?, ?, ?, ?)", [RoomNumber, Building, Capacity, Type]);
});

app.put('/api/rooms', async (req, res) => {
    // TODO: Implement together
});
app.delete('/api/rooms/:id', async (req, res) => {
    // TODO: Implement delete with cascade (F key) - delete all equipment and after that the room (or in one go with SQL).
});


app.get(`/api/equipment/autocomplete/:keyword`, async (req, res) => {
    // TODO: Implement together or alone
    // Case: User types a text, it searches the autocomplete by column and returns the dataset.

    const pool = await getPool();
    const keyword = req.params.keyword;

    const [autoData] = await pool.query("SELECT * FROM equipment WHERE name LIKE ? LIMIT 5", [`%${keyword}%`]);

    res.json(autoData);
});

// Equipment
app.get('C', async (req, res) => {
    // TODO: Implement together or alone
    // Case: User types a text, it searches the autocomplete by column and returns the dataset.
});
app.get('/api/equipment/:id', async (req, res) => {
    const pool = await getPool();
    const id = req.params.id;

    const [data] = await pool.query("SELECT * FROM equipment WHERE id = ?", [id]);
    res.json(data);
});
app.post('/api/equipment', async (req, res) => {
    // TODO: Implement on your own
});


app.delete('/api/equipment/:id', async (req, res) => {
    const pool = await getPool();
    const id = req.params.id;

    try {
        await pool.query("DELETE FROM equipment WHERE id = ?", [id]);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});
app.get('/api/equipment/room/:roomId', async (req, res) => {});

app.listen(port, () => {
    logger.log(`Example app listening on port ${port}`)
});

