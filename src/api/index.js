import axios from 'axios';
import data from '../data/data.json';

const url = '../data/data.json';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
        
        

    }catch(error) {
        console.log(error);
    }
}