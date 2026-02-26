import React, { useState } from 'react';
import ContactPopup from '../components/ContactPopup'
import ContactPage from '../components/contactus/ContactPage'

const ContactUs = () => {

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
      <ContactPage onStartProject={openContactPopup} />

      {/* 5. The Popup Component itself */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={closeContactPopup}
      />

    </>
  )
}

export default ContactUs
