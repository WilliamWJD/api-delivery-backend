import { Request, Response } from "express";
import { DeliverymanRepository } from "../../repositories/DeliverymanRepository";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

class CreateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;

        const deliverymanRepository = new DeliverymanRepository();
        const createDeliverymanUseCase = new CreateDeliverymanUseCase(deliverymanRepository);

        const deliverym = await createDeliverymanUseCase.execute({
            username,
            password
        })

        return res.status(201).json(deliverym)
    }
}

export { CreateDeliverymanController }