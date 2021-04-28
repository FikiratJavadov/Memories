import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv"
import postRoutes from './routes/posts.js';


const app = express();
app.use(express.json())
dotenv.config();

// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/posts', postRoutes);

app.get("/", (req, res) => {
    res.send("Tech academy")
})

const CONNECTION_URL = 'mongodb+srv://Fikret:5595979@cluster0.apbam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
