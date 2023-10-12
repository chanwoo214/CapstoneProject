import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './style/userClient.css'
// //import './index.css'
import store from "./reducer/store.js"
import { Provider } from 'react-redux'
// // import thunk from 'redux-thunk'
// // import { applyMiddleware, compose } from 'redux'
// import reducers from "./reducers";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>

)