"use client"

import { useEffect, useState } from "react"

export default function Home() {
  // Set the value received from the local storage to a local state
  const [favoriteNumber, setFavoriteNumber] = useState("")

  useEffect(() => {
    let value
    // Get the value from local storage if it exists
    value = localStorage.getItem("favoriteNumber") || ""
    setFavoriteNumber(value)
  }, [])

  // When user submits the form, save the favorite number to the local storage
  const saveToLocalStorage = e => {
    e.preventDefault()
    localStorage.setItem("favoriteNumber", favoriteNumber)
  }

  return (
    <div>
      <label htmlFor="number">Your favorite number</label>
      <form onSubmit={saveToLocalStorage}>
        <input
          id="number"
          value={favoriteNumber}
          onChange={e => setFavoriteNumber(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}
