import { Router } from 'express';
import { CreateDeliverieController } from '../useCases/createDeliverie/CreateDeliverieController';

const deliverieRoutes = Router();

const createDeliverieController = new CreateDeliverieController();

deliverieRoutes.post('/', createDeliverieController.handle);

export { deliverieRoutes }