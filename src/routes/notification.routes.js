import express from "express";
import { pushHandler } from "../controllers/notification.controller.js";

const router = express.Router();

router.post("/push", pushHandler);

// You can add more routes later:
// router.post("/email", emailHandler);
// router.post("/sms", smsHandler);

export default router;
