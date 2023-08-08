import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import Swal from 'sweetalert2';


//template_hn8zl9a
//service_i34xztq
//Arr6u6p67Nn2JwRvR

const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });


  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs.send(
      'service_i34xztq',
      'template_hn8zl9a',
      {
        from_name: form.name,
        to_name: 'Ronnel Aldrin Mariano',
        from_email: form.email,
        to_email: 'ronnelaldrinmariano@gmail.com',
        message: form.message,
      },
      'Arr6u6p67Nn2JwRvR'
    )
    .then(() => {
      setLoading(false);
      
      // Show success alert using SweetAlert 2
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Thank you. I will get back to you as soon as possible.',
      });
  
      setForm({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      setLoading(false);
  
      console.log(error);
  
      // Show error alert using SweetAlert 2
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Thank you. I will get back to you as soon as possible.',
      });
      setForm({
        name: '',
        email: '',
        message: '',
      });
    });
  };
  

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center">
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="text-white">Get in touch</p>
        <h3 className="text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8 px-[20px]"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea 
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Drop your message my friend"
            className="bg-tertiary py-4 px-6 placholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-[10px] "
          >
            {loading ? 'Sending......' : 'Send'}
          </button>
        </form>
      </motion.div>
     
    </div>
  )
}

export default SectionWrapper(Contact, "contact");