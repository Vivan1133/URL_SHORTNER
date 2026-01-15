import { UrlService } from "../services/url.service"
import { UrlRepository } from "../repositories/url.repository"
import { CacheRepository } from "../repositories/cache.repository"
import { StatusCodes } from "http-status-codes"
import { Request, Response } from "express"
import { isValidUrl } from "../utils/helpers/isValidUrl"
import { BadRequestError } from "../utils/errors/app.error"

const urlService = new UrlService(new UrlRepository(), new CacheRepository())

export const createUrl = async (req : Request, res : Response) => {

    const valid = isValidUrl(String(req.body.longUrl))
    if (!valid) {
        throw new BadRequestError("The Url is not valid, please pass a valid url");
    }

    const createdUrl = await urlService.createShortUrl(String(req.body.longUrl));
    res.status(StatusCodes.CREATED).json(createdUrl)
}


export const getOriginalUrl = async (req : Request, res : Response) => {
    const shortCode : string = req.params.shortCode
    const url = await urlService.getOriginalUrl(shortCode);
    res.redirect(url.originalUrl)
}

