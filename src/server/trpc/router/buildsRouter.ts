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
        style: z.string(),
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
    const builds = await ctx.prisma.build.findMany()
    return builds
  }),
  getBuildByID: publicProcedure
    .input(z.object({ buildId: z.string() }))
    .query(async ({ ctx, input }) => {
      const build = await ctx.prisma.build.findUnique({
        where: {
          id: input.buildId,
        },
      })
      return build
    }),
})
