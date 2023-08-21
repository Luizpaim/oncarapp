import { Router } from 'express';
import { makeCreateLeadController } from '@/main/factories';
import { authenticate } from '../middleware';
import { adaptRoute } from '@/main/adapters/express-route-adapter';

const leadRoutes = Router();

leadRoutes.post('/register', authenticate, adaptRoute(makeCreateLeadController()));

export default leadRoutes;
