import logo from './logo.svg';
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom"
import './App.css';
import Form from './Form';
import Response from './Response';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form/>
  },
  {
    path: "/Response12",
    element: <Response/>
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      one
      {/* <Form /> */}
      {/* <Router>
        <Route pathname='/' element={<Form />}></Route>
        <Route pathname='/Response11111' element={<Response />}></Route>
      </Router> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          <br/>
          <br/>
          what is your name ??
          <input/>
          <br/>
          please enter your password
          <input/>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
