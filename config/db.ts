import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const URL = `mongodb://127.0.0.1/`


export const dbconnect = async () =>{
    try {
        await mongoose.connect(URL).then(() =>{
            console.log("Connected to MongoDB")
        })
        .catch((error) =>{
            console.log("Error connecting to MongoDB", error)
        })
    } catch (error) {
        console.log(error)
    }
}