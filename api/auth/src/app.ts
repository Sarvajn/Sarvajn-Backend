import { MongoDatabase } from "@sarvajn/mongo";
import express, { type Express } from "express";
import { config } from "../config";

export const app: Express = express();
app.set("x-powered-by", "sarvajn");

export const database = new MongoDatabase(
    config.env.DATABASE_URL,
    "auth-service"
)