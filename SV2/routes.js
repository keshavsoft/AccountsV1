import express from 'express';

const router = express.Router();

import { router as routerFromOpenings } from "./Openings/routes.js";
import { router as routerFromJournalsTable } from "./JournalsTable/routes.js";
import { router as routerFromAccountNames } from "./AccountNames/routes.js";

router.use("/Openings", routerFromOpenings);
router.use("/JournalsTable", routerFromJournalsTable);
router.use("/AccountNames", routerFromAccountNames);

export { router };