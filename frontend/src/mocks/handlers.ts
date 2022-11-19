// src/mocks/handlers.js
import {DefaultRequestMultipartBody, ResponseComposition, rest} from 'msw'
import {Item} from "../domain/Item";

interface GetStuffResponseBody {
    stuff: Item[]
}

export const handlers = [
    rest.get('/stuff',(req,res:ResponseComposition<GetStuffResponseBody>, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                stuff:
                    [
                        {id: 1, name: "boots"},
                        {id: 2, name: "belt"},
                        {id: 3, name: "cowboy hat"},
                    ]
            }),
        )
    }),
]