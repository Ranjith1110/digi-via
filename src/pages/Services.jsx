import React, { useState } from 'react';
import ServicesPage from '../components/services/ServicesPage'
import ContactPopup from '../components/ContactPopup'

const Services = () => {

  // 1. State to manage popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 2. Function to open the popup
  const openContactPopup = () => {
    setIsPopupOpen(true);
  };

  // 3. Function to close the popup
  const closeContactPopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <ServicesPage onStartProject={openContactPopup} />

      {/* 5. The Popup Component itself */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={closeContactPopup}
      />
      
    </>
  )
}

export default Services