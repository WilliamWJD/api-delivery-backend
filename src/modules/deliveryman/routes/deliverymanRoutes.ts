import { Router } from 'express';
import { CreateDeliverymanController } from '../useCases/createDeliveryman/CreateDeliverymanController';

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();

deliverymanRoutes.post('/', createDeliverymanController.handle);

export { deliverymanRoutes }