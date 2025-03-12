import axios from 'axios';
import { GEMINI_API_KEY, GEMINI_API_SECRET } from '../config';

const BASE_URL = 'https://api.gemini.com/v1';

const geminiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-GEMINI-APIKEY': GEMINI_API_KEY,
  },
});

export const getAccountInfo = async () => {
  try {
    const response = await geminiService.get('/account');
    return response.data;
  } catch (error) {
    console.error('Error fetching account info:', error);
    throw error;
  }
};