import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
emailjs.init('q_m5ggW5G47ZuLiW-');

export const sendRegistrationEmail = (formData) => {
  const templateParams = {
    to_name: 'Admin',
    from_name: formData.name,                        // User's name
    from_email: formData.email,                      // User's email
    from_mobileno: formData.phonenumber,             // User's phone number
    from_country: formData.country,                  // User's country
    from_course: formData.course,                    // Course name
    from_courseMode: formData.courseMode,            // Online/Offline course mode
    from_counsellingNeeded: formData.counsellingNeeded, // Counselling needed (Yes/No)
    from_highestQualification: formData.highestQualification, // Highest qualification
    contact_preference: formData.contactPreference ? "Yes" : "No", // Contact preference
    receive_updates: formData.receiveUpdates ? "Yes" : "No",       // Receive updates preference
  };

  return emailjs.send(
    'service_fk02xgj', // Your service ID
    'template_il2g2zq', // Your template ID
    templateParams
  );
};
