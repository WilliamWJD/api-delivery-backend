import { Deliveryman } from "@prisma/client";
import IDeliverymanRepository from "../../repositories/IDeliverymanRepository";

interface IRequest {
    username: string;
    password: string;
}

class CreateDeliverymanUseCase {
    constructor(
        private deliverymanRepository: IDeliverymanRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<Deliveryman> {
        const deliveryman = await this.deliverymanRepository.createDeliveryman({
            username,
            password
        })

        return deliveryman
    }
}

export { CreateDeliverymanUseCase }