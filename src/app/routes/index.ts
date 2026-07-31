import { Router } from "express";
import { specialityRouter } from "../module/speciality/speciality.route";

const router = Router();
router.use("/specialities", specialityRouter);

export const IndexRoutes = router;
