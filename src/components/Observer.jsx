import { useState, useEffect } from 'react'

/**
 * @param {*} ref es la referencia de lo observado
 * @param {*} definedThres es cuanto es necesario estar viendo para activar la funcion
 * @returns bool true si el usuario esta viendo la referencia
 */

const useScreen = (ref, definedThres) => {
  const [isIntersecting, setIntersecting] = useState(false)

  const options = {
    threshold: definedThres,
  }

  const callback = ([entry]) => {
    setIntersecting(entry.isIntersecting)
  }

  const observer = new IntersectionObserver(callback, options)

  // Se elimina el observer cuando se observe la referencia
  useEffect(() => {
    observer.observe(ref.current)
    return () => { observer.disconnect() }
  }, [])
  return isIntersecting
}

export default useScreen
