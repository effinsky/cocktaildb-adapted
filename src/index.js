import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"
import { AppProvider as AppContextProvider } from "./context"
ReactDOM.render(
  <React.StrictMode>
    {/* apped wrapped in context */}
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
