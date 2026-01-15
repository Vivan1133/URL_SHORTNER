import express from 'express';
import pingRouter from './ping.router';
import urlRouter from './url.router';

const v1Router = express.Router();

v1Router.use('/url', urlRouter)
v1Router.use('/ping',  pingRouter);

export default v1Router;