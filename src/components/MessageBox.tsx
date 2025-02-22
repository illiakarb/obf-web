import React, { useState } from 'react'

const MessageBox = () => {
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [isHovered, setIsHovered] = useState(false) // Track hover state

  const handleSend = () => {
    if (!email || !title || !message) {
      alert('Please fill out all fields before sending.')
      return
    }

    alert('Message sent successfully!')

    // Clear fields after sending
    setEmail('')
    setTitle('')
    setMessage('')
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Send a Message</h2>
      <div style={styles.inputGroup}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        ></textarea>
      </div>
      <button
        onClick={handleSend}
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      >
        Send
      </button>
    </div>
  )
}

const styles = {
  container: {
    width: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: '#28a745', // Initial background color
    color: 'white',
    transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
  },
  buttonHover: {
    backgroundColor: '#32cd32', // Brighter lime green
  },
}

export default MessageBox
