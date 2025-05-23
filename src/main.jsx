import { StrictMode } from 'react'
import React from 'react'
import {Provider} from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx'
import myntraStore from './store/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />/*, loader: postLoader */},
      {
        path: "/bag",
        element: <Bag />,
        // action: createPostAction,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
   <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
