import axios from 'axios';

export default axios.create({
    baseURL:'https://dc3c-42-119-148-84.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});
