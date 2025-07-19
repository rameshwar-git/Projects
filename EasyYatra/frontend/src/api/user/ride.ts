import axios from 'axios';
import { RideUser } from '../../types/user'

const API_URL = `${process.env.REACT_APP_API_URL}`;

export const createRideUser = async (user: RideUser) => {
    const response = await axios.post(`${API_URL}/ride`, user);
    return response.data;
};

export const getRideUsers = async () => {
    const response = await axios.get(`${API_URL}/ride`);
    return response.data;
};

export const updateRideUser = async (id: string, user: Partial<RideUser>) => {
    const response = await axios.put(`${API_URL}/ride/${id}`, user);
    return response.data;
};

export const deleteRideUser = async (id: string) => {
    const response = await axios.delete(`${API_URL}/ride/${id}`);
    return response.data;
};
export const getRideUserById = async (id: string) => {
    const response = await axios.get(`${API_URL}/ride/${id}`);
    return response.data;
};