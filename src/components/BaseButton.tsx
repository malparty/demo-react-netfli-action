import React, { useEffect, useState } from 'react'

interface ButtonProps {
  label: string
}

function BaseButton({ label = '' }: ButtonProps): JSX.Element {
  const [isItGreat, setAnotherLabel] = useState(false)

  useEffect(() => {
    async function doSomething() {
      console.log(label)
      setAnotherLabel(false)
    }

    doSomething()
    console.log(isItGreat)
    setAnotherLabel(true)
  }, [isItGreat, label])

  if (isItGreat) {
    return <span className="btn">{label} YEAAAHHH!</span>
  }
  return <span className="btn">{label}</span>
}

export default BaseButton
