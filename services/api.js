import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://mzpyexshqeiqnmculaic.supabase.co',
    headers: {
        apikey: "SUPABASE_CLIENT_API_KEY",
        authorization: "SUPABASE_SERVICE_KEY"
    }
})