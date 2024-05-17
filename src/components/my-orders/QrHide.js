import React, { useState } from 'react';
import { Button } from '@mui/material';
import QRCode from "react-qr-code";

const QrHide = ({ order }) => {
    // console.log(order)
    const [show, setShow] = useState(false);
 
    return (
        <>
        <Button style={{position: "absolute", marginLeft: "-200px", border: "1px solid red", height: "35px"}} onClick={() => setShow(prevState => !prevState)} >
            {show ? 'Hide QR' : 'view QR'}
        </Button>

        {show && order && order.qr_data ? (
            <QRCode value={order.qr_data} size={100}
                style={{position: "absolute", marginLeft: "-210px"}}
            /> 
        ) : null}
    </>
    );
};

export default QrHide;
