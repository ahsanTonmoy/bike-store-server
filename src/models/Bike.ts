import mongoose, { Schema, Document } from "mongoose";

export interface IBike extends Document {
  name: string;
  brand: string;
  price: number;
  stock: number;
}

const BikeSchema: Schema = new Schema<IBike>({
  name: {
    type: String,
    required: [true, "Bike name is required"],
    trim: true,
    maxlength: [100, "Bike name cannot exceed 100 characters"],
  },
  brand: {
    type: String,
    required: [true, "Bike brand is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Bike price is required"],
    min: [0, "Bike price must be greater than or equal to 0"],
  },
  stock: {
    type: Number,
    required: [true, "Stock quantity is required"],
    min: [0, "Stock cannot be negative"],
  },
});

export default mongoose.model<IBike>("Bike", BikeSchema);
