"use client"

import { TextInput } from "../src/components/TextInput"
import { useState } from "react"


export default function App() {

  const [focusedValue, setFocusedValue] = useState("")

  return (
    <div className="w-full max-w-sm space-y-6 p-4">
      {/* <TextInput label="Input" optional placeholder="Placeholder" /> */}

      <TextInput
        label="Input"
        optional
        value={focusedValue}
        onChange={(e) => setFocusedValue(e.target.value)}
        placeholder="Placeholder"
      />

      <TextInput label="Input" optional error="Erorr input" placeholder="Placeholder" />

      <TextInput label="Input" optional warning="Warning input" placeholder="Placeholder" />
    </div>
  )
}
