import { createUrl, getOriginalUrl } from "../../controllers/url.controller";
import express from "express"

const urlRouter = express.Router()


urlRouter.post('/', createUrl);
urlRouter.get('/:shortCode', getOriginalUrl)

export default urlRouter;