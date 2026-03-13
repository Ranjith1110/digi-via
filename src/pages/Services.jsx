import React, { useState, useEffect } from 'react'; // Added useEffect
import ServicesPage from '../components/services/ServicesPage'
import ContactPopup from '../components/ContactPopup'

const Services = () => {
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