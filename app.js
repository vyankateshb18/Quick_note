import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();

// SET TEMPLATE ENGINE AS EJS
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static(path.resolve("public")));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// ROUTES IMPORTS
import userRoutes from "./routes/users.routes.js";
import notesRoutes from "./routes/notes.routes.js";
import staticRoutes from "./routes/static.routes.js";

// ROUTES DECLARATION
app.use("/", staticRoutes);
app.use("/users", userRoutes);
app.use("/notes", notesRoutes);

export { app };
