import { Request, Response } from "express";
import { ClientsRepository } from "../../repositories/ClientsRepository";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

class CreateSessionController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;

        const clientsRepository = new ClientsRepository();
        const createSessionUseCase = new CreateSessionUseCase(clientsRepository);

        const session = await createSessionUseCase.execute({
            username,
            password
        })

        return res.json(session);
    }
}

export { CreateSessionController }