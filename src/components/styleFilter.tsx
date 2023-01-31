import React from 'react'

export const allInBuildType = 'All In'
export const cheeseBuildType = 'Cheese'
export const ecoBuildType = 'Economic'
export const timingAttackBuildType = 'Timing Attack'
export const buildTypes = [
  allInBuildType,
  cheeseBuildType,
  ecoBuildType,
  timingAttackBuildType,
]

const StyleFilter = () => {
  return (
    <div className="w-1/6">
      <h1 className="mb-2 font-semibold">Style</h1>
      <ul className="items-center rounded-lg bg-navy text-sm font-medium">
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
    </div>
  )
}

export default StyleFilter
