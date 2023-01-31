import { type NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BuildCard from '../../../../../components/buildCard'
import StyleFilter from '../../../../../components/styleFilter'
import { trpc } from '../../../../../utils/trpc'

export const ecoBuildType = 'Economic'
export const timingAttackBuildType = 'Timing Attack'
export const allInBuildType = 'All In'
export const cheeseBuildType = 'Cheese'
export const buildTypes = [
  ecoBuildType,
  timingAttackBuildType,
  allInBuildType,
  cheeseBuildType,
]

const BuildsPage: NextPage = () => {
  const router = useRouter()

  const { race = '', raceOpponent = '' } = router.query as {
    race: string
    raceOpponent: string
  }

  const builds = trpc.builds.getBuildsByMatchup.useQuery({
    matchup: `${race.toLowerCase().charAt(0)}v${raceOpponent
      .toLowerCase()
      .charAt(0)}`,
  })

  return (
    <>
      <Head>
        <title>Builds</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col justify-center px-4">
        <div className="flex items-center justify-center">
          <Image
            className="w-200 h-200"
            src={`/images/${race}.png`}
            alt={''}
            width={200}
            height={200}
          />
          <h1 className="flex gap-4 text-2xl">VS</h1>

          <Image
            src={`/images/${raceOpponent}.png`}
            alt={''}
            width={200}
            height={200}
          />
        </div>

        <StyleFilter />
        {builds.data?.map((build) => (
          <BuildCard key={build.id} build={build} />
        ))}
      </main>
    </>
  )
}

export default BuildsPage
