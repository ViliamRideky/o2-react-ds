"use client"

import React, { useState } from "react"
import { cn } from "../lib/utils"

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  warning?: string
  optional?: boolean
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label, error, warning, optional = false, type = "text", ...props }, ref) => {
    const [focused, setFocused] = useState(false)

    return (
      <div className="grid gap-dimension-xs">
        {label && (
          <div className="flex items-center gap-dimension-xs">
            <label
              className="font-onair text-label-m leading-label-m tracking-label-m font-label-m text-content-on-neutral-xx-high"
              htmlFor={props.id}
            >
              {label}
            </label>
            {optional && (
              <span className="font-onair text-label-s leading-label-s tracking-label-s font-label-s text-content-on-neutral-medium">
                Optional
              </span>
            )}
          </div>
        )}
        <div className="relative">
          <input
            type={type}
            className={cn(
              "w-full px-dimension-s py-3.5 rounded-dimension-input border-2",
              "text-body-m leading-body-m tracking-body-m font-body-m",
              "bg-surface-x-low text-content-on-neutral-xx-high placeholder:text-content-on-neutral-low",
              "border-content-on-neutral-low transition-colors duration-200",
              "font-onair",
              !error && !warning && "hover:border-content-on-neutral-medium",
              !error && !warning && focused && "border-state-default-focus caret-surface-brand",
              "focus:outline-none",
              "placeholder:transition-opacity placeholder:duration-200",
              "focus:placeholder:opacity-0",
              error && "border-surface-danger text-content-on-neutral-xx-high",
              warning && !error && "border-surface-warning text-content-on-neutral-xx-high",
              className,
            )}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            ref={ref}
            {...props}
          />
          {error && (
            <div className="font-onair text-label-s leading-label-s tracking-label-s font-label-s text-content-on-neutral-danger mt-dimension-xs">
              {error}
            </div>
          )}
          {warning && !error && (
            <div className="font-onair text-label-s leading-label-s tracking-label-s font-label-s text-content-on-neutral-warning mt-dimension-xs">
              {warning}
            </div>
          )}
        </div>
      </div>
    )
  },
)

TextInput.displayName = "TextInput"