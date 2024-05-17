import React, { useState } from 'react';
import { Button } from '@mui/material';
import QRCode from "react-qr-code";

const QrHide = ({ order }) => {
    // console.log(order)
    const [show, setShow] = useState(false);
 
    return (
        <>
        <Button onClick={() => setShow(prevState => !prevState)}>
            {show ? 'Hide' : 'Show'}
        </Button>

        {show && order && order.qr_data ? (
            <QRCode value={order.qr_data} size={200} /> 
        ) : null}
    </>
    );
};

export default QrHide;
