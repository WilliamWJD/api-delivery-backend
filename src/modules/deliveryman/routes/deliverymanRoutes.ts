import { Router } from 'express';
import { CreateDeliverymanController } from '../useCases/createDeliveryman/CreateDeliverymanController';
import { CreateSessionDeliverymanController } from '../useCases/createSession/CreateSessionDeliverymanController';

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const createSessionDeliverymanController = new CreateSessionDeliverymanController();

deliverymanRoutes.post('/', createDeliverymanController.handle);
deliverymanRoutes.post('/session', createSessionDeliverymanController.handle);

export { deliverymanRoutes }