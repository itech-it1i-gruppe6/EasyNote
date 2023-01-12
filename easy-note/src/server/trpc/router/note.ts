import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const noteRouter = router({
    getOne: protectedProcedure.input(z.string()).query(({ctx, input}) => {
        return ctx.prisma.note.findFirst({
            where: {
                id: input,
                owner: ctx.session.user,
            },
        });
    }),
    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.note.findMany({
            where: {
                owner: ctx.session.user,
            },
            select: {
                id: true,
                titel: true,
            },
        });
    }),
});
