import { IURL, URL } from "../models/url.model";

export interface CreateUrl {
    originalUrl: string;
    shortUrl: string;
}

export interface UrlStats {
    id: string;
    originalUrl: string;
    shortUrl: string;
    clicks: number;
    createdAt: Date;
    updatedAt: Date;
}

export class UrlRepository {
    async create(data: CreateUrl): Promise<IURL> {
        const url = new URL(data);
        return await url.save();
    }

    async findByShortUrl(shortUrl: string): Promise<IURL | null> {
        return await URL.findOne({ shortUrl }); 
    }

    async findAll() {
        const urls = await URL.find().select({
            _id: 1,
            originalUrl: 1,
            shortUrl: 1,
            clicks: 1,
            createdAt: 1,
            updatedAt: 1
        }).sort({ createdAt: -1 });

        return urls.map(url => ({
            id: url._id?.toString() || '',
            originalUrl: url.longURL,
            shortUrl: url.shortURL,
            clicks: url.clicks,
            createdAt: url.createdAt,
            updatedAt: url.updatedAt
        }));
    }

    async incrementClicks(shortUrl: string): Promise<void> {
         await URL.findOneAndUpdate(
            { shortUrl },
            { $inc: { clicks: 1 } }
        );
        return;
    }

    async findStatsByShortUrl(shortUrl: string): Promise<UrlStats | null> {
        const url = await URL.findOne({ shortUrl }).select({
            _id: 1,
            originalUrl: 1,
            shortUrl: 1,
            clicks: 1,
            createdAt: 1,
            updatedAt: 1
        });

        if (!url) return null;

        return {
            id: url._id?.toString() || '',
            originalUrl: url.longURL,
            shortUrl: url.shortURL,
            clicks: url.clicks,
            createdAt: url.createdAt,
            updatedAt: url.updatedAt
        }
    }
}