import React, { useState, useEffect } from 'react'; // Added useEffect
import AboutPage from '../components/aboutus/AboutPage';
import ContactPopup from '../components/ContactPopup';

const AboutUs = () => {
    // State to manage popup visibility
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // FIX: Scroll to top of the page on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to open the popup
    const openContactPopup = () => {
        setIsPopupOpen(true);
    };

    // Function to close the popup
    const closeContactPopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <AboutPage onStartProject={openContactPopup} />

            {/* The Popup Component itself */}
            <ContactPopup
                isOpen={isPopupOpen}
                onClose={closeContactPopup}
            />
        </>
    );
};

export default AboutUs;