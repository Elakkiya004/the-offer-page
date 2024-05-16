import React, { useState } from 'react';
import { Button } from '@mui/material';
import QRCode from "react-qr-code";

const QrHide = ({ trackData }) => {
    const [show, setShow] = useState(false);
 
    return (
        <>
            <Button onClick={() => setShow(prevState => !prevState)}>
                {show ? 'Hide' : 'Show'}
            </Button>
            
            {show && trackData && trackData.qr_data ? (
                    <QRCode value={trackData.qr_data} />
            ) : null}
        </>
    );
};

export default QrHide;
