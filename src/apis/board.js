import axios from 'axios';

export const getBoard = async () => await axios('/board');

export const updateBoardTitle = async (title) =>
  await axios.put('/board/title', title);
