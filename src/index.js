import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} >
            <Route path="Me" element={<About/>} >
            <Route path=":name" element={<AboutMe />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
