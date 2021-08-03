import { useCallback, useLayoutEffect, useState } from 'react'

const getDimentions = element => element.getBoundingClientRect()

export function useDimentions(responsive = true) {
  const [dimensions, setDimensions] = useState(null)
  const [element, setElement] = useState(null)

  const hook = useCallback(element => setElement(element), [])

  useLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        setDimensions(getDimentions(element))
      }

      updateDimensions()

      if (responsive) window.addEventListener('resize', updateDimensions)


      return () => window.removeEventListener('resize', updateDimensions)
    }
  }, [])
}
