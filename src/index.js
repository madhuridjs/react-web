import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log(request);
    return request;
},error => {
    console.log(error);
    return Promise.reject(error);

});

axios.defaults.baseURL='http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTHTOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
},error => {
    console.log(error);
    return Promise.reject(error);

});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
reportWebVitals();
