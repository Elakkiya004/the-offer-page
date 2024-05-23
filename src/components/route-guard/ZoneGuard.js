import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const ZoneGuard = (props) => {

  const tagManagerArgs = {
		gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
	  };
	  TagManager.initialize(tagManagerArgs);
	
	  useEffect(() => {
		TagManager.dataLayer({
			event: 'pageview',
			path: '/'
		});
	}, []);


  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { children } = props;
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }
      const zoneId = JSON.parse(localStorage.getItem("zoneid"));
      const location = localStorage.getItem("location");
      if (zoneId?.length > 0 && location) {
        setChecked(true);
      } else {
        router.push("/", undefined, { shallow: true });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady]
  );

  if (!checked) {
    return null;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return <>{children}</>;
};

export default ZoneGuard;
