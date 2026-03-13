import React, { useState, useEffect } from 'react'; // Added useEffect
import ContactPopup from '../components/ContactPopup'
import ContactPage from '../components/contactus/ContactPage'

const ContactUs = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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