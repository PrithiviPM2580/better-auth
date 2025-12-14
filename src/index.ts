import "dotenv/config";
import express, { Express } from "express";
import { toNodeHandler } from "better-auth/node"
import auth from "./config/auth.config";

const app: Express = express();

const PORT = process.env.PORT || 8080;

app.all("/api/v1/auth/*", toNodeHandler(auth));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Better Auth Service is running!");
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});