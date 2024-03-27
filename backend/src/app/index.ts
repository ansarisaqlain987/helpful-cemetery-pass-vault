import express, { Express } from "express";
import { UserRoutes } from "../routes/user.route";
import { defaultExceptionHandler, notFoundRoute } from "../routes";
import { useClerkAuth } from "../middlewares/clerk.middleware";
import { VaultRoutes } from "../routes/vault.route";
import { connectToDB } from "../config/db";
import { getSecurityMiddleware } from "../middlewares/security.middleware";
import morgan from "morgan";

const app: Express = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(useClerkAuth());
app.use(getSecurityMiddleware());

connectToDB();
// setup routes
app.use("/user", UserRoutes(express.Router()));
app.use("/vault", VaultRoutes(express.Router()));

app.use(notFoundRoute);
app.use(defaultExceptionHandler);

export default app;