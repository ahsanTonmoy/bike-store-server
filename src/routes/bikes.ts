import { Router } from "express";
import Bike from "../models/Bike";

const router = Router();

// Create a new bike
router.post("/", async (req, res) => {
  try {
    const { name, brand, price, stock } = req.body;
    const bike = new Bike({ name, brand, price, stock });
    const savedBike = await bike.save();
    res.status(201).json(savedBike);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Get all bikes
router.get("/", async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bikes" });
  }
});

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

export default router;
