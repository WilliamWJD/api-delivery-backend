import { sign } from 'jsonwebtoken';

import Compare from "../../providers/Bcrypt/compare";
import IClientsRepository from "../../repositories/IClientsRepository";
import jwtConfig from '../../../../config/jwtConfig';

interface IRequest {
    username: string;
    password: string
}

interface CreateSessionUseCaseReturn {
    client: {
        username: string,
        password: string;
    },
    token: string;
}

class CreateSessionUseCase {
    constructor(
        private clientsRepository: IClientsRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<CreateSessionUseCaseReturn> {
        const client = await this.clientsRepository.findByUsername(username);

        if (!client) {
            throw new Error("Username or password invalid")
        }

        const checkPassword = await Compare(password, client.password);

        if (!checkPassword) {
            throw new Error("Username or password invalid")
        }

        const token = sign({ username }, jwtConfig.jwt.secret, {
            subject: client.id,
            expiresIn: jwtConfig.jwt.expiresIn
        })

        return { client, token }
    }
}

export { CreateSessionUseCase }