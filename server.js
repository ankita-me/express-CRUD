import express from "express";
import {router}  from "./controller/emplyeecontroller.js";
import { connectDB } from "./repository/employeeRepository.js";
import "dotenv/config"
import cors from "cors";

const app=express();
connectDB();

app.use(cors())
app.use(express.json());
app.use("/api/v1/employee",router);
app.listen(5000);