import { type NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BuildCard from '../../../../../components/buildCard'
import { styles } from '../../../../../components/styleFilter'
import { trpc } from '../../../../../utils/trpc'

const ALL_STYLES = 'all'

const FindBuildsPage: NextPage = () => {
  const router = useRouter()
  const [selectedStyle, setSelectedStyle] = useState(ALL_STYLES)

  const { race = '', raceOpponent = '' } = router.query as {
    race: string
    raceOpponent: string
  }

  const builds = trpc.builds.getBuildsByMatchup.useQuery({
    matchup: `${race.toLowerCase().charAt(0)}v${raceOpponent
      .toLowerCase()
      .charAt(0)}`,
  })

  const filteredBuilds = (builds.data ?? []).filter((build) =>
    selectedStyle === ALL_STYLES ? true : build.style === selectedStyle
  )

  return (
    <>
      <Head>
        <title>Builds</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container m-auto flex h-screen flex-col justify-center p-12">
        <div>
          {/* Race Images */}
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
          <div className="flex">
            {/* Left Colum - Filters */}
            <div className="w-1/6">
              <h1 className="mb-2 font-semibold">Style</h1>
              <ul className="items-center rounded-lg bg-navy text-sm font-medium">
                {styles.map((style) => (
                  <li key={style} className="w-full border-b border-gray-light">
                    <div className="flex items-center pl-3">
                      <input
                        id={`build-radio-${style}`}
                        type="radio"
                        value={style}
                        name="list-radio"
                        checked={style === selectedStyle}
                        className="h-4 w-4"
                        onChange={(e) => setSelectedStyle(e.target.value)}
                      />
                      <label
                        htmlFor={`build-radio-${style}`}
                        className="ml-2 w-full py-3 text-sm font-medium"
                      >
                        {style}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Build Cards */}
            <div className="px-10">
              {filteredBuilds.map((build) => (
                <BuildCard key={build.id} build={build} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default FindBuildsPage
