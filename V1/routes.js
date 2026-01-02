import express from 'express';

const router = express.Router();

import { router as routerFromAccountNames } from "./AccountNames/routes.js";

router.use("/AccountNames", routerFromAccountNames);

export { router };