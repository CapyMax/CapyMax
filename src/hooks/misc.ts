import { useEffect, useState } from "react"

/** Check if mobile based on media-query match */
function matchMediaMobile() {
  return window.matchMedia(`(max-width: 768px)`)
}

/** Use is-mobile info based on media-query match */
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const matched = matchMediaMobile()
    setIsMobile(matched.matches)
    function handleMatchedChange(e: MediaQueryListEvent) {
      setIsMobile(e.matches)
    }
    matched.addEventListener('change', handleMatchedChange)
    return () => matched.removeEventListener('change', handleMatchedChange)
  }, [])
  return isMobile
}
