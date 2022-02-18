import { sign } from "jsonwebtoken";
import jwtConfig from "../../../../config/jwtConfig";
import Compare from "../../../../providers/Bcrypt/compare";
import IDeliverymanRepository from "../../repositories/IDeliverymanRepository";

interface IRequest {
    username: string;
    password: string;
}

interface CreateSessionDeliverymanReturn {
    deliveryman: {
        username: string,
        password: string;
    },
    token: string;
}

class CreateSessionDeliverymanUseCase {
    constructor(
        private deliverymanRepository: IDeliverymanRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<CreateSessionDeliverymanReturn> {
        const deliveryman = await this.deliverymanRepository.findByUsername(username);

        if (!deliveryman) {
            throw new Error("User or password is invalid!")
        }

        const checkPassword = await Compare(password, deliveryman.password);

        if (!checkPassword) {
            throw new Error("User or password is invalid!")
        }

        const token = sign({ username }, jwtConfig.jwt.secret, {
            subject: deliveryman.id,
            expiresIn: jwtConfig.jwt.expiresIn
        })

        return {
            deliveryman,
            token
        }
    }
}

export { CreateSessionDeliverymanUseCase }