import React from 'react'
import ReactDOM from 'react-dom'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Element } from 'react-scroll'
import './Contact.css'
import Star from '../../utils/star8.png'

/*
export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const resetForm = () => {
      document.getElementById('contact-form').reset()
    }
    let headers = new Headers()
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3002/email')
    headers.append('Access-Control-Allow-Credentials', 'true')

    axios({
      method: 'POST',
      url: 'URLOFBACKEND/email',
      data: {
        name: name,
        email: email,
        message: message,
      },
      headers: headers,
    }).then((response) => {
      console.log('response:', response)
      if (response.data.message === 'success') {
        alert('Message Sent.')
        resetForm()
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.')
      }
    })
  }

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
          onSubmit={(e) => handleSubmit(e)}
          data-netlify="true"
          name="contact"
          // action="https://formsubmit.co/f7689fd3cde820c9a09f4497766c2580"
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
          <input type="hidden" name="form-name" value="contact" />
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
*/

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
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
              src={Star}
              alt=""
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
            onSubmit={this.handleSubmit}
            data-netlify="true"
            name="contact"
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
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              label="Name"
              margin="normal"
              variant="outlined"
              id="name"
              placeholder="Enter your name"
              required
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <TextField
              label="Email"
              id="email"
              margin="normal"
              variant="outlined"
              placeholder="Enter your email"
              required
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <TextField
              label="Message"
              id="message"
              multiline
              margin="normal"
              variant="outlined"
              placeholder="Enter your message"
              required
              name="message"
              value={message}
              onChange={this.handleChange}
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
}

ReactDOM.render(<ContactForm />, document.getElementById('root'))

export default ContactForm
/*  <form onSubmit={this.handleSubmit}>
      <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p> 

      </form>*/
