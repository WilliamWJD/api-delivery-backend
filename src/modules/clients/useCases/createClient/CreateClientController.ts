import { Request, Response } from "express";
import { ClientsRepository } from "../../repositories/ClientsRepository";
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { username, password } = req.body;

            console.log({
                username,
                password
            })

            const clientsRepository = new ClientsRepository();
            const createClientUseCase = new CreateClientUseCase(clientsRepository);

            const client = await createClientUseCase.execute({
                username,
                password
            })

            return res.json(client);
        } catch (err: any) {
            console.log(err)
            return res.status(401).json({ error: err })
        }
    }
}

export { CreateClientController }