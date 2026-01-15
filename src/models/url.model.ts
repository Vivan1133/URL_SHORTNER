import mongoose, { Document, Schema } from "mongoose";

export interface IURL extends Document {
    originalUrl: string,
    shortUrl: string,
    clicks: number,
    createdAt: Date,
    updatedAt: Date
}

const urlSchema = new Schema<IURL>({
    originalUrl: { type : String, required: true },
    shortUrl: { type: String, required: true, unique: true, index: true},
    clicks: { type: Number, default: 0},
}, { timestamps: true });

urlSchema.index({ createdAt: -1});

export const URL = mongoose.model<IURL>('URL', urlSchema);