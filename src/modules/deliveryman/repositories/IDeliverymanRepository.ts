import { Deliveryman } from "@prisma/client";
import IDeliveryman from "../dtos/IDeliveryman";

export default interface IDeliverymanRepository {
    createDeliveryman({ username, password }: IDeliveryman): Promise<Deliveryman>;
    findByUsername(username: string): Promise<Deliveryman | undefined>
}