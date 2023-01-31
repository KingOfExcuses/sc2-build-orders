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
      <h2 className="mb-4 font-semibold">Style</h2>
      <ul className="w-1/6 items-center rounded-lg bg-navy text-sm font-medium">
        {buildTypes.map((buildType) => (
          <li key={buildType} className="w-full border-b border-gray-light">
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
