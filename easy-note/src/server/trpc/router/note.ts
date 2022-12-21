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
});
