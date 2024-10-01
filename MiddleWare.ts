import express,{ Application } from "express";
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"


export const MiddleWare = (app:Application) =>{
    app.use(express.json());
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))

    // app.use("/api/v1",router)
}