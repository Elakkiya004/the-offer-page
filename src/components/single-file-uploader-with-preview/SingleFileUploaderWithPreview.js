import React, { useEffect } from "react";
import SingleFileUploader from "../single-file-uploader/SingleFileUploader";
//import CategorySetupFilesUploaderWithText from "../../pages/admin/service-categories/category-setup/CategorySetupFilesUploaderWithText";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const SingleFileUploaderWithPreview = (props) => {

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

  const {
    onEdit,
    headerLabel,
    labelText,
    hintText,
    deleteImage,
    file,
    onChange,
    onTouch,
    onError,
    imageOnChange,
    width,
    filePreviewFor,
  } = props;

  return (
    <>

        <>
          <SingleFileUploader
            onEdit={onEdit}
            headerLabel={headerLabel}
            labelText={labelText}
            hintText={hintText}
            deleteImage={deleteImage}
            file={file}
            onChange={onChange}
            width={width}
            filePreviewFor={filePreviewFor}
          />
        </>


    </>
  );
};



export default SingleFileUploaderWithPreview;
