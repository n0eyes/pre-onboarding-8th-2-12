import axios from 'axios';

export const getBoard = async () => await axios('/board');
