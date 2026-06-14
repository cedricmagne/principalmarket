import React from 'react'

type Props = {
  className?: string
}

/**
 * Principal "K" gem monogram — left prism stem + two diagonal arms.
 * Themed in the site's gold ramp (see app/globals.css --primary).
 */
export default function PrincipalIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pk-body" x1="16" y1="14" x2="40" y2="50">
          <stop offset="0" stopColor="#D9A33A" />
          <stop offset="1" stopColor="#A9760F" />
        </linearGradient>
        <linearGradient id="pk-facet" x1="19" y1="20" x2="33" y2="44">
          <stop offset="0" stopColor="#F2CE72" />
          <stop offset="1" stopColor="#D6A53E" />
        </linearGradient>
        <linearGradient id="pk-arm-up" x1="38" y1="32" x2="55" y2="13">
          <stop offset="0" stopColor="#C8911E" />
          <stop offset="1" stopColor="#EBBE52" />
        </linearGradient>
        <linearGradient id="pk-arm-down" x1="38" y1="32" x2="55" y2="51">
          <stop offset="0" stopColor="#B8821A" />
          <stop offset="1" stopColor="#7E560C" />
        </linearGradient>
      </defs>

      {/* left prism stem */}
      <path d="M16 14 L16 50 L38 32 Z" fill="url(#pk-body)" />
      {/* inner facet highlight */}
      <path d="M19 20 L19 44 L33 32 Z" fill="url(#pk-facet)" />

      {/* upper arm */}
      <path
        d="M38 32 L51.5 12 L57 15.5 L43.5 35.5 Z"
        fill="url(#pk-arm-up)"
      />
      {/* lower arm */}
      <path
        d="M38 32 L43.5 28.5 L57 48.5 L51.5 52 Z"
        fill="url(#pk-arm-down)"
      />
    </svg>
  )
}
