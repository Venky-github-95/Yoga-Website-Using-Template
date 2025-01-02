import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import MyBlog from './Pages/MyBlog';
//import Layout from './Layout';
//import  Navigation  from './Navigation';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
// import Footer from './Pages/Footer';
// import Home from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<>
<Navigation/>
{/* <Footer/> */}
{/* <Home/> */}
</>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
