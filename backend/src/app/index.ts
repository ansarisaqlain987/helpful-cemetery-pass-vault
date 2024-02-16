import express, { Express } from "express";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup routes
app.get("/", (req, res) => {
    res.send("HELLO")
});

app.use((req, res, next) => {
    res.status(404).send("HAHAHA")
})

app.use((err: any, req: any, res: any, next: any) => {
    console.log(err);
});

export default app;