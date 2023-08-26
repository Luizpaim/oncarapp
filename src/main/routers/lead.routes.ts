import { Router } from "express";
import { makeCreateLeadController } from "@/main/factories";
import { adaptRoute } from "@/main/adapters/express-route-adapter";

const leadRoutes = Router();

leadRoutes.post("/register", adaptRoute(makeCreateLeadController()));

export default leadRoutes;
