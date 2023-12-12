import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { fetchEmployeeData } from './core/redux/actions.ts'
import store from './core/redux/configureStore.ts'

store.subscribe(()=>console.log("updated"))
store.dispatch(fetchEmployeeData);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
