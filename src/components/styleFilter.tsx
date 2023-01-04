import React from 'react'

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

const StyleFilter = () => {
  return (
    <>
      <h3 className="mb-4 font-semibold">Style</h3>
      <ul className="w-full items-center rounded-lg bg-navy text-sm font-medium sm:flex">
        {buildTypes.map((buildType) => (
          <li
            key={buildType}
            className="w-full border-b border-gray-light sm:border-b-0 sm:border-r"
          >
            <div className="flex items-center pl-3">
              <input
                id={`build-radio-${buildType}`}
                type="radio"
                value={buildType}
                name="list-radio"
                className="h-4 w-4"
              />
              <label
                htmlFor={`build-radio-${buildType}`}
                className="ml-2 w-full py-3 text-sm font-medium"
              >
                {buildType}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default StyleFilter
