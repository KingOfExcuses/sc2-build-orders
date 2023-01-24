import { router } from '../trpc'
import { authRouter } from './auth'
import { buildsRouter } from './buildsRouter'

export const appRouter = router({
  auth: authRouter,
  builds: buildsRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
