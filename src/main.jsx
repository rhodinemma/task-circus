import React  from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DragDropContext>
        <App />
    </DragDropContext>
  </React.StrictMode>,
)
