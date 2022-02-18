import { Router } from 'express';

import { clientsRoutes } from '../modules/clients/routes/clientsRoutes';
import { deliverieRoutes } from '../modules/deliveries/routes/deliverieRoutes';
import { deliverymanRoutes } from '../modules/deliveryman/routes/deliverymanRoutes';

const routes = Router();

routes.use('/clients', clientsRoutes)
routes.use('/deliveryman', deliverymanRoutes)
routes.use('/deliverie', deliverieRoutes)

export default routes