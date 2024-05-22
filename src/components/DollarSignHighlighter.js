import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const DollarSignHighlighter = ({ theme, text }) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const regex = /\$\w+\$/g;
  const matches = text?.match(regex);

  return (
    <>
      {text &&
        text.split(/\s+/).map((part, index) => {
          const isMatch = matches && matches.includes(part);
          const normalizedPart = part.replaceAll("$", " ");
          
          return (
            <span
              key={index}
              style={{
                color: isMatch ? theme.palette.primary.main : "inherit",
                marginLeft: index !== 0 && "3px",
              }}
            >
              {index !== 0 && " "}
              {normalizedPart}
            </span>
          );
        })}
    </>
  );
};

export default DollarSignHighlighter;
