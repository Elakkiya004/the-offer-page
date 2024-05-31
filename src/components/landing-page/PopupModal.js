import React, { useEffect , useRef, useState } from 'react';
import { Box, Button,useTheme, useMediaQuery } from '@mui/material';
import { X } from 'lucide-react'; // Ensure you have installed lucide-react

export default function BlurredBackdropExample({ onClose }) {
  const modalRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Adjust the delay timing as needed

    return () => clearTimeout(timeout); // Cleanup function
  }, []);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

  return (
    <>
      <Box ref={modalRef} onClick={closeModal} className={isVisible ? 'popup-show show' : 'popup-show'}
        sx={{
          display: "flex",
          position: "absolute",
          position: "fixed",
          marginLeft:["20px", ""],
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width:"100vw",
          marginTop: ["65px", "80px"],
          zIndex: 9999,
          animation: isVisible ? 'fadeIn 0.5s ease-in-out' : 'none', // Apply the fadeIn animation if isVisible is true
          animationDelay: isVisible ? '1s' : 'none', // Delay the animation by 2 seconds if isVisible is true
          opacity: isVisible ? 1 : 0, // Show the popup if isVisible is true

          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
          backdropFilter: 'blur(10px)', // Blur effect
        }}
      >
        <img src="https://offer.theofferpage.in/storage/app/public/promotional_banner/2024-05-26-6652cce64001d.png" alt="popup image" style={{ height: isSmall ? "30%" : "500px", width:  isSmall ? "60%" : "50%",}} />
        <Button   color="primary" onClick={onClose} style={{ marginTop: isSmall ? "-165px" :"-460px",marginLeft: "-65px" }}>
          <X />
        </Button>

      </Box>
    </>
  );
}
