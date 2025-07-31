import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createStore}  from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Service/Reducer/index'

const store=createStore(rootReducer)
console.log(store);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
    
  )
