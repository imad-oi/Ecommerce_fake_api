import React from "react"
import AuthContextProvider from "../context/AuthContect"

export const useAuth = () => {
    const context = React.useContext(AuthContextProvider)
    if (!context) {
      throw new Error('useAuth must be used within a AuthContextProvider')
    }
    return context
  }