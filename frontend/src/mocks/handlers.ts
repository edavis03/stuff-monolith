// src/mocks/handlers.js
import {DefaultRequestMultipartBody, ResponseComposition, rest} from 'msw'
import {Item} from "../domain/Item";

export const handlers = [
    rest.get('/stuff',(req,res: ResponseComposition<Item[]>, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                    [
                        {id: 1, name: "boots"},
                        {id: 2, name: "belt"},
                        {id: 3, name: "cowboy hat"},
                    ]
            ),
        )
    }),
]