import { Request,Response } from "express";
import { AddItemService } from "../../services/items/AddItemsService";

class AddItemsController{
    async handler(req: Request, res:Response){
        const {order_id,product_id, amount} = req.body;

        const addItem = new AddItemService();

        const item = await addItem.execute({
            order_id,
            product_id,
            amount
        })

        return res.json(item)
    }
}
export {AddItemsController}