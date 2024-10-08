import { useEffect } from 'react';
import PropTypes from 'prop-types';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const styleCache = () => createCache({
  key: 'rtl',
  prepend: true,
  stylisPlugins: [stylisRTLPlugin]
});

export const RTL = (props) => {

  const tagManagerArgs = {
    gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
  };

  if (typeof window !== 'undefined') {
    TagManager.initialize(tagManagerArgs);
  
    useEffect(() => {
      TagManager.dataLayer({
        event: 'pageview',
        path: '/'
      });
    }, []);
  }

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { children, direction } = props;
  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  if (direction === 'rtl') {
    return (
      <CacheProvider value={styleCache()}>
        {children}
      </CacheProvider>
    );
  }

  return <>{children}</>;
};

RTL.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['ltr', 'rtl'])
};