import { Router } from 'express';

import { clientsRoutes } from '../modules/clients/routes/clientsRoutes';

const routes = Router();

routes.use('/clients', clientsRoutes)

export default routes