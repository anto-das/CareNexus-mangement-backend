import express, { Application, Request, Response } from "express";
import { IndexRoutes } from "./app/routes";

const app: Application = express();
// The port your express server will be running on.

// Enable URL-encoded form data parsing
app.use(express.json());

app.use("/api/v1", IndexRoutes);

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

export default app;
