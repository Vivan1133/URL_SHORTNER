import { createUrl, findAllHandler, getOriginalUrl, getUrlStats } from "../../controllers/url.controller";
import express from "express"

const urlRouter = express.Router()

// api/v1/url/
urlRouter.post('/', createUrl);
urlRouter.get('/:shortCode', getOriginalUrl)
urlRouter.get('/urlStats/:shortCode', getUrlStats)
urlRouter.get('/', findAllHandler)

export default urlRouter;