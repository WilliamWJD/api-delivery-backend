import { Clients } from "@prisma/client";
import IClient from "../dtos/IClient";

export default interface IClientsRepository {
    findByUsername(username: string): Promise<Clients | undefined>
    createClient({ username, password }: IClient): Promise<Clients>
}