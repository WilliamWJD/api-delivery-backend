import { Request, Response } from "express";
import { DeliveryRepositorie } from "../../repositories/DeliveryRepositorie";
import { CreateDeliverieUseCase } from "./CreateDeliverieUseCase";

class CreateDeliverieController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { item_name, id_client } = req.body

        const deliverieRepositorie = new DeliveryRepositorie();
        const createDeliverieUseCase = new CreateDeliverieUseCase(deliverieRepositorie);

        const deliverie = await createDeliverieUseCase.execute({
            item_name,
            id_client
        })

        return res.status(201).json(deliverie);
    }
}

export { CreateDeliverieController }