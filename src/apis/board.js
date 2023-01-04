import axios from 'axios';

export const getBoard = async () => await axios('/board');

export const updateBoardTitle = async (title) =>
  await axios.put('/board/title', title);

export const updateDnD = async (payload) =>
  await axios.put('/board/dnd', payload);
