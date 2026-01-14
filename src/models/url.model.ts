import mongoose, { Schema } from "mongoose";

export interface IURL extends Document {
    longURL: string,
    shortURL: string,
    clicks: number,
    createdAt: Date,
    updatedAt: Date
}

const urlSchema = new Schema<IURL>({
    longURL: { type : String, required: true },
    shortURL: { type: String, required: true, unique: true, index: true},
    clicks: { type: Number, default: 0},
}, { timestamps: true });

urlSchema.index({ createdAt: -1});

export const URL = mongoose.model<IURL>('URL', urlSchema);