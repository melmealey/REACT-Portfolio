import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Stack, Box, StackDivider, HStack, VStack } from '@chakra-ui/react';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_acxqqiu', 
      'template_55k5d1g', 
      form.current, 
      'PNt024XlghtiqB9at',
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log ("message sent!")
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (


<form ref={form} onSubmit={sendEmail}>
<VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box h='40px'>
     <label>Name  </label>
      <input type="text" name="user_name" />
  </Box>
  <Box h='40px'>
      <label>Email  </label>
      <input type="email" name="user_email" />
  </Box>
  
       <label>Message </label>
       <Box h='40px'>
      <textarea name="message" />
  </Box>
</VStack>
      <input type="submit" value="Send" />
    </form>


  )
}

 