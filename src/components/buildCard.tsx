import type { Build } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
// import { trpc } from '../utils/trpc'

const BuildCard = ({ build }: { build: Build }) => {
  // const builds = trpc.builds.getBuild.useQuery()

  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {/* {builds.data?.map((build) => ( */}
      <div key={build.id} className="max-w-sm rounded-lg bg-navy p-6 shadow-md">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">
          {build.title}
        </h2>
        <p className="mb-3 font-normal">
          {build.build?.substring(0, 100) + '...'}
        </p>

        <div className="flex items-baseline justify-between">
          <Link
            href={`/builds/${build.id}`}
            className="inline-flex items-center rounded-lg bg-orange px-3 py-2 text-center text-sm font-medium hover:bg-white hover:text-navy"
          >
            View Build
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <span className="mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
            {build.style}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BuildCard
