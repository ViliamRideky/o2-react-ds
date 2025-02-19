"use client"
import { TextInput } from "../src/components/TextInput"
import { useState } from "react"

export default function App() {
  // Original state
  const [focusedValue, setFocusedValue] = useState("")
  
  // Email validation example state
  const [email, setEmail] = useState("")
  const [emailTouched, setEmailTouched] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
  }
  
  // Username validation example state
  const [username, setUsername] = useState("")
  const [usernameTouched, setUsernameTouched] = useState(false)
  const [usernameFocused, setUsernameFocused] = useState(false)
  
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      {/* Original Section */}
      <div className="w-full md:w-1/2 max-w-sm space-y-6">
        <h2 className="text-lg font-semibold text-content-on-neutral-xx-high mb-4">
          Original States
        </h2>
        
        <TextInput
          label="Input"
          optional
          value={focusedValue}
          onChange={(e) => setFocusedValue(e.target.value)}
          placeholder="Placeholder"
        />
        <TextInput 
          label="Input" 
          optional 
          error="Error input" 
          placeholder="Placeholder" 
        />
        <TextInput 
          label="Input" 
          optional 
          warning="Warning input" 
          placeholder="Placeholder" 
        />
      </div>
      
      {/* Real Example Section */}
      <div className="w-full md:w-1/2 max-w-sm space-y-6">
        <h2 className="text-lg font-semibold text-content-on-neutral-xx-high mb-4">
          Practical Examples
        </h2>
        
        {/* Email validation example */}
        <TextInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => {
            setEmailFocused(false)
            setEmailTouched(true)
          }}
          placeholder="you@example.com"
          error={emailTouched && !emailFocused && !validateEmail(email) ? "Please enter a valid email address" : ""}
          warning={emailTouched && !emailFocused && email && email.endsWith(".co") ? "Some services may not recognize this domain" : ""}
        />
        
        {/* Username validation example */}
        <TextInput
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => {
            setUsernameFocused(false)
            setUsernameTouched(true)
          }}
          placeholder="Choose a username"
          error={usernameTouched && !usernameFocused && username.length === 0 ? "Username cannot be empty" : ""}
          warning={
            usernameTouched && !usernameFocused && username.length > 0 && username.length < 5
              ? "Usernames shorter than 5 characters may be hard to remember"
              : ""
          }
        />
      </div>
    </div>
  )
}