import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getMyMessages } from "../controllers/messageController";

const router = Router();

router.get("/all", protectRoute, getMyMessages);

export default router;