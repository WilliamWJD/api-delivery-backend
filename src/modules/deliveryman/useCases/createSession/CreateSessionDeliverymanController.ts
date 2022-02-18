import { Request, Response } from "express";
import { DeliverymanRepository } from "../../repositories/DeliverymanRepository";
import { CreateSessionDeliverymanUseCase } from "./CreateSessionDeliverymanUseCase";

class CreateSessionDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;

        const deliverymanRepository = new DeliverymanRepository();
        const createSessionDeliverymanUseCase = new CreateSessionDeliverymanUseCase(deliverymanRepository);

        const deliveryman = await createSessionDeliverymanUseCase.execute({
            username,
            password
        })

        return res.status(201).json(deliveryman)
    }
}

export { CreateSessionDeliverymanController }