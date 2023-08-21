import { Router } from 'express';
import {
  makeCreateCarController,
  makeUpdateCarController,
  makeGetAllCarsController,
  makeGetByIdCarController,
  makeDeleteCarController,
} from '@/main/factories';
import { authenticate } from '../middleware';
import { adaptRoute } from '@/main/adapters/express-route-adapter';

const carRoutes = Router();

carRoutes.post('/register', authenticate, adaptRoute(makeCreateCarController()));
carRoutes.put('/update/:_id', authenticate, adaptRoute(makeUpdateCarController()));
carRoutes.put('/delete/:_id', authenticate, adaptRoute(makeDeleteCarController()));
carRoutes.get('/get-all', adaptRoute(makeGetAllCarsController()));
carRoutes.get('/get-by-id/:_id', adaptRoute(makeGetByIdCarController()));

export default carRoutes;
