"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Bike_1 = __importDefault(require("../models/Bike"));
const router = (0, express_1.Router)();
// Create a new bike
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, brand, price, stock } = req.body;
        const bike = new Bike_1.default({ name, brand, price, stock });
        const savedBike = yield bike.save();
        res.status(201).json(savedBike);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// Get all bikes
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikes = yield Bike_1.default.find();
        res.status(200).json(bikes);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch bikes" });
    }
}));
// Update a bike
// router.put("/:id", async (req, res) => {
//   try {
//     const bike = await Bike.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!bike) {
//       return res.status(404).json({ error: "Bike not found" });
//     }
//     res.status(200).json(bike);
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// });
// Delete a bike
// router.delete("/:id", async (req, res) => {
//   try {
//     const bike = await Bike.findByIdAndDelete(req.params.id);
//     if (!bike) {
//       return res.status(404).json({ error: "Bike not found" });
//     }
//     res.status(200).json({ message: "Bike deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete bike" });
//   }
// });
exports.default = router;
