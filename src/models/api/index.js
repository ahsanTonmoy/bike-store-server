"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const bikes_1 = __importDefault(require("../src/routes/bikes"));
const db_1 = __importDefault(require("../src/config/db"));
// Initialize app and connect to DB
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use("/api/bikes", bikes_1.default);
// Export handler for Vercel
exports.default = (req, res) => {
    app(req, res);
};
