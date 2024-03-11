import express, { Express } from "express";
import { UserRoutes } from "../routes/user.route";
import { defaultExceptionHandler, notFoundRoute } from "../routes";
import { useClerkAuth } from "../middlewares/clerk.middleware";
import { getSecurityMiddleware } from "../middlewares/security.middleware";
import { Auth, Request } from "../types";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(useClerkAuth());
// app.use(getSecurityMiddleware);


// setup routes
app.use("/user", UserRoutes(express.Router()))

app.use(notFoundRoute)

app.use(defaultExceptionHandler);

export default app;