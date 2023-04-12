import { Application } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {title: "Backend API", version: "1.0.0"}
    },
    apis: [
        "src/routes/v1/TestRouter.ts",
        "src/routes/v1/PlanRouter.ts",
    ]
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app: Application, port:number) => {
    app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    console.log("🗒️ Swagger documentation running on", `http://localhost:${port}/api/v1/docs/`);
}

export default swaggerDocs