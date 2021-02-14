import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

Instance.defaults.headers.common['Authorization'] = 'AUTHTOKEN FROM INSTANCE';

export default Instance;