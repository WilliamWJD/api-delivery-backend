import { Deliveryman } from "@prisma/client";
import HashGenerator from "../../../../providers/Bcrypt/hashGenerator";
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
        const deliverymanExists = await this.deliverymanRepository.findByUsername(username);

        if (deliverymanExists) {
            throw new Error("Deliveryman already exists")
        }

        const hash = await HashGenerator(password);

        const deliveryman = await this.deliverymanRepository.createDeliveryman({
            username,
            password: hash
        })

        return deliveryman
    }
}

export { CreateDeliverymanUseCase }