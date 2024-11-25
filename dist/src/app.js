"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const bikes_1 = __importDefault(require("./routes/bikes"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
// Connect to database
(0, db_1.default)();
// Middleware
app.use(body_parser_1.default.json());
app.use("/api/bikes", bikes_1.default);
exports.default = app;
