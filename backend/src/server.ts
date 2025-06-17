import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import testRoutes from "./routes/test.routes";

const PORT = process.env.PORT || 3000;

const app = express();
const corsOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
    ],
    allowHeaders: [
        'Content-Type',
        'Authorization',
        'Accept'
    ],
    credentials: true
};

app.use(cors(corsOpts));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.get('/api/v1', (req: Request, res: Response) => {
    res.send('Server Up & Running!');
});

app.use("/api/v1/test", testRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on PORT: ${PORT}`);
});