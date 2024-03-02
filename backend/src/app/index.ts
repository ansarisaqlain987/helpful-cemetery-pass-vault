import express, { Express } from "express";
import { UserRoutes } from "../routes/user.route";
import { defaultExceptionHandler, notFoundRoute } from "../routes";
import { useClerkAuth } from "../middlewares/clerk.middleware";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(useClerkAuth);

// setup routes
app.use("/user", UserRoutes(express.Router()))

app.use(notFoundRoute)

app.use(defaultExceptionHandler);

export default app;