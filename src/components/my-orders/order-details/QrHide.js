import React, { useState } from 'react';
import { Button, Collapse } from '@mui/material';
import QRCode from "react-qr-code";


const Qrcode = (trackData) => {

    const [show, setShow] = useState(true)
 
  return (
    <>
        {
            show?<h1>{trackData && trackData?.order_status === "failed" ? (
                <PaymentUpdate
                    id={id}
                    refetchOrderDetails={refetch}
                    refetchTrackData={refetchTrackData}
                    trackData={trackData}
                    isSmall={isSmall}
                />
            ) : (
                trackData?.order_status === "pending" && (
                    <Grid spacing={2} justify="flex-end">
                        <Grid>
                            <QRCode value={trackData.qr_data} style={{ height: "150px"}} />
                        </Grid>
                    </Grid>


                )
            )}</h1>:null
        }
        <Button onClick={() => setShow(true)}>Show</Button>
        <Button onClick={() => setShow(false)}>Hide</Button>
    </>
  );
};

export default Qrcode;
