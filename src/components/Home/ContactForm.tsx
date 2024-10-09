import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState({ message: '', isSuccess: false });

  const successMsgTimeout = 5000;
  let lastSubmissionTime = 0;
  const submissionRateLimit = 5000;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const contactForm = event.currentTarget;

    if (isRateLimited()) {
      handleFormError(new Error('Submission rate limit exceeded. Please try again later.'));
      return;
    }

    try {
      const formData = new FormData(contactForm);
      if (isBotSubmission(formData)) {
        throw new Error('Possible bot submission');
      }

      const sanitizedData = sanitizeFormData(formData);
      validateFormData(sanitizedData);

      await sendEmail(sanitizedData);

      showMessage('Email został wysłany pomyślnie!');
      contactForm.reset();
    } catch (error) {
      handleFormError(error as Error);
    }
  };

  const isRateLimited = () => {
    const currentTime = new Date().getTime();
    const timeSinceLastSubmission = currentTime - lastSubmissionTime;
    return timeSinceLastSubmission < submissionRateLimit;
  };

  const isBotSubmission = (formData: FormData) => {
    const honeypotField = formData.get('honeypot');
    return honeypotField !== '' || isSubmittedTooQuickly();
  };

  const isSubmittedTooQuickly = () => {
    const currentTime = new Date().getTime();
    const timeSinceLastSubmission = currentTime - lastSubmissionTime;
    return timeSinceLastSubmission < submissionRateLimit;
  };

  const sanitizeFormData = (formData: FormData) => {
    const sanitizedData: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      sanitizedData[key] = dataCleaningHelper(value.toString());
    });
    return sanitizedData;
  };

  const dataCleaningHelper = (value: string) => value.trim();

  const validateFormData = (formData: { [key: string]: string }) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData['contact-email'])) {
      throw new Error('Invalid email format');
    }

    const maxMessageLength = 1000;
    if (formData['contact-message'].length > maxMessageLength) {
      throw new Error('Message length exceeds the maximum limit');
    }
  };

  const sendEmail = async (data: { [key: string]: string }) => {
    const templateParams = {
      from_name: data['contact-name'],
      from_email: data['contact-email'],
      to_name: 'Media Hunters',
      message: `${data['contact-message']} nr tel: ${data['contact-company']} email: ${data['contact-email']}`,
    };

    await emailjs.send('service_x1s6ekh', 'template_5ak7u1h', templateParams);
    lastSubmissionTime = new Date().getTime();
  };

  const showMessage = (message: string) => {
    setFormStatus({ message, isSuccess: true });

    setTimeout(() => {
      setFormStatus({ message: '', isSuccess: false });
    }, successMsgTimeout);
  };

  const handleFormError = (error: Error) => {
    showError('Internal server error. Please try again later.');
    console.error('Error:', error);
  };

  const showError = (message: string) => {
    setFormStatus({ message, isSuccess: false });
  };

  return (
    <div className="contact-form-box">
      <h3 className="title" data-i18n="GetAFreeEstimateNow">Otrzymaj darmową wycenę już teraz</h3>
      <form method="POST" className="axil-contact-form" id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label data-i18n="name">Imię</label>
          <input type="text" className="form-control" name="contact-name" id="contact-name" placeholder="Jan Kowalski" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="contact-email" id="contact-email" placeholder="przyklad@mail.com" />
        </div>
        <div className="form-group mb--40">
          <label data-i18n="phoneNumber">Numer telefonu</label>
          <input type="tel" className="form-control" name="contact-company" id="contact-company" placeholder="+48123456789" />
        </div>
        <div className="form-group mb--40">
          <label data-i18n="message">Wiadomość</label>
          <textarea rows={5} className="form-control" name="contact-message" id="contact-message" placeholder="Wiadmość.."></textarea>
        </div>
        <input type="text" name="honeypot" style={{ display: 'none' }} />
        <div className="form-group">
          <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn" data-i18n="send">
            Wyślij
          </button>
        </div>
      </form>
      {formStatus.message && (
        <div className={formStatus.isSuccess ? 'success-msg' : 'error-msg'}>
          <p>{formStatus.message}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
