import IClientsRepository from "../../repositories/IClientsRepository";
import HashGenerator from '../../providers/Bcrypt/hashGenerator';
import { Clients } from "@prisma/client";

interface IRequest {
    username: string;
    password: string;
}

class CreateClientUseCase {
    constructor(
        private clientsRepository: IClientsRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<Clients | undefined> {
        const clientExists = await this.clientsRepository.findByUsername(username);

        if (clientExists) {
            throw new Error("Client already exists")
        }

        const passwordHash = await HashGenerator(password)

        const client = await this.clientsRepository.createClient({
            username,
            password: passwordHash
        })

        return client || undefined;
    }

}

export { CreateClientUseCase }