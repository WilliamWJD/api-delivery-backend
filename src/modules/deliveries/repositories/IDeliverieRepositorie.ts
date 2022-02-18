import { Deliveries } from "@prisma/client";
import IDeliverie from "../dtos/IDeliverie";

export default interface IDeliverieRepositorie {
    save({ item_name, id_client }: IDeliverie): Promise<Deliveries>;
}