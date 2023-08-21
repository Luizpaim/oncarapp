import { Router } from 'express';
import { makeCreateAdminController } from '@/main/factories';
import { makeAuthenticateAdminController } from '@/main/factories';

import { adaptRoute } from '@/main/adapters/express-route-adapter';

const adminRoutes = Router();

adminRoutes.post('/auth', adaptRoute(makeAuthenticateAdminController()));
adminRoutes.post('/register', adaptRoute(makeCreateAdminController()));

export default adminRoutes;
