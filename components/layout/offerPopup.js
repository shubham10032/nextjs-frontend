import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
const OfferPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => {
      clearTimeout(popupTimer);
    };
  }, []);
  const hidePopupTimer = () => {
    setShowPopup(false);
  };
  return (
    <>

      {
        showPopup && <Dialog className="offer-popup-section" open={open}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          hideBackdrop
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "auto",
                maxWidth: "550px",  // Set your width here
              },
            },
          }}>
          <Box className="dialogwrapper"  >
            <button className="close-popup" onClick={() => hidePopupTimer()}><i className="fas fa-times"></i></button>
            <div className='rightContent' >
              <div className='register'>

                <Link href="loans/bank-of-india-home-loan?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=">
                  <a>
                    <Image src="/images/popofferImage.webp" alt="Pop Offer Image" />
                  </a>
                </Link>

              </div>
            </div>
          </Box>
        </Dialog>
      }

    </>
  )
}

export default OfferPopup