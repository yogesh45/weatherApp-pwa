import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const APIKey = '77e6e8455c45ad7ac9338e3d17bf791e';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params : {
            q : query,
            units : 'metric',
            APPID : APIKey
        }
    })

    return data;
}