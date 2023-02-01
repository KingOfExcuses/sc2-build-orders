import React from 'react'

export const allInStyle = 'All In'
export const cheeseStyle = 'Cheese'
export const ecoStyle = 'Economic'
export const timingAttackStyle = 'Timing Attack'
export const styles = [allInStyle, cheeseStyle, ecoStyle, timingAttackStyle]

const StyleFilter = () => {
  return (
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
                className="h-4 w-4"
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
  )
}

export default StyleFilter
