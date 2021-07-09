import React from 'react'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { Element } from 'react-scroll'
import './Contact.css'

export default function ContactForm() {
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const name = document.getElementById('name').value
  //   const email = document.getElementById('email').value
  //   const message = document.getElementById('message').value
  //   const resetForm = () => {
  //     document.getElementById('contact-form').reset()
  //   }
  //   /*  let headers = new Headers();
  //   headers.append(
  //     "Access-Control-Allow-Origin",
  //     "http://localhost:3002/email"
  //   );
  //   headers.append("Access-Control-Allow-Credentials", "true"); */

  //   axios({
  //     method: 'POST',
  //     url: 'URLOFBACKEND/email',
  //     data: {
  //       name: name,
  //       email: email,
  //       message: message,
  //     } /* ,
  //     headers: headers */,
  //   }).then((response) => {
  //     console.log('response:', response)
  //     if (response.data.message === 'success') {
  //       alert('Message Sent.')
  //       resetForm()
  //     } else if (response.data.msg === 'fail') {
  //       alert('Message failed to send.')
  //     }
  //   })
  // }

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        id="contact-us"
        style={{
          margin: '1rem',
          fontSize: '1.6rem',
          textTransform: 'uppercase',
          fontFamily: '"Raleway", sans-serif',
        }}
      >
        <Element name="contact-me">
          <img
            style={{ width: '40px' }}
            src="https://image.flaticon.com/icons/png/512/66/66612.png"
          />
          Contact Me
        </Element>
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <form
          // onSubmit={(e) => handleSubmit(e)}
          action="https://formsubmit.co/f7689fd3cde820c9a09f4497766c2580"
          method="POST"
          className="contact-form"
          id="contact-form"
          style={{
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            padding: '25px',
            borderRadius: '10px',
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          <input
            type="hidden"
            name="_next"
            value="https://evelyn-portfolio.herokuapp.com/pages/thanks.html"
          ></input>
          <TextField
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
            id="name"
            placeholder="Enter your name"
            required
          />
          <TextField
            label="Email"
            type="email"
            id="email"
            margin="normal"
            variant="outlined"
            placeholder="Enter your email"
            required
          />
          <TextField
            label="Message"
            id="message"
            multiline
            margin="normal"
            variant="outlined"
            placeholder="Enter your message"
            required
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="outlined"
              size="large"
              type="submit"
              color="primary"
              style={{ width: '50%', marginTop: '15px' }}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}
