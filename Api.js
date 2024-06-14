import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//instaciar o axios com o token de autenticação
const createAxiosInstance = async () => {
    const token = await AsyncStorage.getItem('userToken');
    return axios.create({
        baseURL: '',
        headers:{
            Authorization: `Bearer ${token}`, 
        } 
    });
};
export default createAxiosInstance; 