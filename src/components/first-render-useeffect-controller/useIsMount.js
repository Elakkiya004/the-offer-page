import { useRef, useEffect } from 'react'
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

export const useIsMount = () => {
    ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);
    const isMountRef = useRef(true)
    useEffect(() => {
        isMountRef.current = false
    }, [])
    return isMountRef.current
}
