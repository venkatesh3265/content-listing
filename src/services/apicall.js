import axios from "axios";


const apiClient = axios.create({
    baseURL: 'https://test.create.diagnal.com'
})

const ApiService = {
    
    fetchlist:(page=1)=>{
        
        return apiClient.get(`/data/page${page}.json`);
    }
}

export default ApiService;