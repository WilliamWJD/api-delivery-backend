import { Router } from 'express';

import { clientsRoutes } from '../modules/clients/routes/clientsRoutes';
import { deliverymanRoutes } from '../modules/deliveryman/routes/deliverymanRoutes';

const routes = Router();

routes.use('/clients', clientsRoutes)
routes.use('/deliveryman', deliverymanRoutes)

export default routes