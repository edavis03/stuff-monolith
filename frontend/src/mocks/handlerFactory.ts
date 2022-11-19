import {ResponseComposition, rest} from "msw";
import {Item} from "../domain/Item";

const getStuffHandler = (stuff: Item[]) =>
    rest.get('/stuff', (req, res: ResponseComposition<Item[]>, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(stuff),
        );
    });

const postStuffHandler = (newItemName: string, idToBeReturned: number) =>
        rest.post('/stuff', (req, res: ResponseComposition<Item>, ctx) => {
            return res(
                ctx.status(201),
                ctx.json({id: idToBeReturned, name: newItemName}),
            )
        });

export {getStuffHandler, postStuffHandler}