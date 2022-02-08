import { Router } from 'express';
import { CreateClientController } from '../useCases/createClient/CreateClientController';
import { CreateSessionController } from '../useCases/createSession/CreateSessionController';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const createSessionController = new CreateSessionController();

clientsRoutes.post('/', createClientController.handle);
clientsRoutes.post('/session', createSessionController.handle);

export { clientsRoutes }