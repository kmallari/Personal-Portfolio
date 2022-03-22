import { findSourceMap } from "module";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Notification } from "./Notification";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const [notification, setNotification] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value, [name + "Error"]: "" });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setForm({ ...form, message: value, messageError: "" });
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";
    if (form.name === "") {
      nameError = "Name field is required";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (form.email === "" || reg.test(form.email) === false) {
      emailError = "Email is invalid. Please enter a valid email.";
    }
    if (form.message === "") {
      messageError = "Message field is required";
    }
    if (emailError || nameError || messageError) {
      setForm({ ...form, nameError, emailError, messageError });
      return false;
    }
    return true;
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setForm({
            name: "",
            email: "",
            message: "",
            nameError: "",
            emailError: "",
            messageError: "",
          });
        }
      });
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
  };

  return (
    <div className='relative h-auto w-full'>
      <div
        className='h-auto w-full bg-primary-light bg-opacity-5 border-t-2 border-primary-light border-opacity-10 flex flex-col md:flex-row items-center md:items-start justify-center text-primary-light font-dm gap-8 lg:gap-24 py-16 md:py-24 lg:py-32 shadow-2xl'
        id='contact'
      >
        <div className='h-auto flex flex-col gap-4'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl md:text-left text-center font-dm font-bold text-primary-2 leading-normal select-text drop-shadow-lg z-10'>
            Contact me
          </h2>
          <p className='text-sm lg:text-base md:text-left text-center z-10'>
            Have a question or want to contact me?
            <br />
            Fill out to form to reach out!
          </p>
        </div>
        <form
          className='flex flex-col gap-12 w-3/4 sm:w-1/2 md:2/3 lg:w-1/4 z-10'
          onSubmit={handleSubmitForm}
        >
          <div className='flex flex-col gap-4'>
            <label
              className='uppercase font-bold tracking-widest text-sm'
              htmlFor='name'
            >
              Name / Organization
            </label>
            <input
              className={`font-dm_mono appearance-none block w-full bg-white text-dark-neutral border border-primary-light border-opacity-20 rounded py-3 px-4 leading-tight hover:bg-opacity-90 placeholder-opacity-30 placeholder-dark-neutral transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-primary-1 focus:outline-none ${
                form.nameError != "" && "border-primary-2 border-opacity-100"
              }`}
              type='text'
              id='name'
              name='name'
              placeholder='Juan de la Cruz'
              value={form.name}
              onChange={handleInputChange}
              autoComplete='off'
            />
            {form.nameError && (
              <p className='text-sm text-primary-2'>* {form.nameError}</p>
            )}
          </div>
          <div className='flex flex-col gap-4'>
            <label
              className='uppercase font-bold tracking-widest text-sm'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className={`font-dm_mono appearance-none block w-full bg-white text-dark-neutral border border-primary-light border-opacity-20 rounded py-3 px-4 leading-tight hover:bg-opacity-90 placeholder-opacity-30 placeholder-dark-neutral transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-primary-1 focus:outline-none ${
                form.emailError != "" && "border-primary-2 border-opacity-100"
              }`}
              type='text'
              id='email'
              name='email'
              placeholder='juan.cruz@email.com'
              value={form.email}
              onChange={handleInputChange}
              autoComplete='off'
            />
            {form.emailError && (
              <p className='text-sm text-primary-2'>* {form.messageError}</p>
            )}
          </div>
          <div>
            <label
              className='uppercase font-bold tracking-widest text-sm'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className={`font-dm_mono appearance-none block w-full bg-white text-dark-neutral border border-primary-light border-opacity-20 rounded py-3 px-4 leading-tight hover:bg-opacity-90 placeholder-opacity-30 placeholder-dark-neutral transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-primary-1 focus:outline-none ${
                form.nameError != "" && "border-primary-2 border-opacity-100"
              }`}
              id='message'
              name='message'
              placeholder='Enter message here...'
              onChange={handleTextAreaChange}
              autoComplete='off'
              value={form.message}
              rows={9}
            />
            {form.messageError && (
              <p className='text-sm text-primary-2'>* {form.messageError}</p>
            )}
          </div>
          <input
            className='w-48 cursor-pointer bg-primary-1 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-all self-end'
            type='submit'
            value='Send Message'
          />
        </form>
      </div>
      <Notification notification={notification} />
    </div>
  );
};
