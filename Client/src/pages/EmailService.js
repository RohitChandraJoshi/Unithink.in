import emailjs from 'emailjs-com';

// Initialize emailjs with your user ID directly
emailjs.init('q_m5ggW5G47ZuLiW-');

export const sendEmail = (formData) => {
  const templateParams = {
    to_name: 'Admin',
    from_name: formData.name,
    from_email: formData.email,
    from_mobileno: formData.phonenumber,
    from_serviceType: formData.serviceType
  };

  return emailjs.send(
    'service_fk02xgj',
    'template_prwi2ij',
    templateParams
  );
};
