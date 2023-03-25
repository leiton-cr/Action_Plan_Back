import "dotenv/config";

import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import swaggerDocs from "../routes/swagger";
import TestRouter from "../routes/v1/TestRouter";

export default class Server {
    private app: Application;
    private port: number;

    private testRoutes: TestRouter;

    constructor() {
        this.port = parseInt(process.env.PORT || "");
        this.app = express();
        this.middlewares();

        this.testRoutes = new TestRouter();

        this.routes();
    }

    /**
     * This method configures the middlewares
     */
    private middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.json({ limit: "1mb" }));
        this.app.use(cors());
    }

    /**
     * This method allows to set the routes
     */
    private routes() {
        this.app.use("/api/v1/test", this.testRoutes.getRouter());
    }

    /**
     * This method launches the server
     */
    public launch() {
        this.app.listen(this.port, () => {
            console.log("🚀Backend running on port", this.port)
            swaggerDocs(this.app, this.port)
        });
    }
}
