import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

const noteObject = z.object({
    id: z.string().optional(),
    text: z.string(),
    titel: z.string(),
    ownerId: z.string().optional(),
});

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
    saveNote: protectedProcedure.input(noteObject).mutation(({ ctx, input }) => {
        if (!input.id) return ctx.prisma.note.create({
            data: {
                titel: input.titel,
                text: input.text,
                ownerId: ctx.session.user.id,
            },
        });
        return ctx.prisma.note.update({
            data: {
                titel: input.titel,
                text: input.text,
            },
            where: {
                id: input.id,
            },
        });
    }),
});
