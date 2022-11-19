// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
    rest.get('/stuff',(req,res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data: ["boots", "belt", "cowboy hat"]
            }),
        )
    }),
]