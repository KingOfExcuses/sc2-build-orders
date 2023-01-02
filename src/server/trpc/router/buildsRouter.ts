import { z } from 'zod'

import { publicProcedure, router } from '../trpc'

export const buildsRouter = router({
  createBuild: publicProcedure
    .input(
      z.object({
        // id: z.string(),
        matchup: z.string(),
        title: z.string(),
        build: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.build.create({
        data: {
          ...input,
        },
      })

      return build
    }),
  getBuild: publicProcedure.query(async ({ ctx }) => {
    const build = await ctx.prisma.build.findMany()
    return build
  }),
})
