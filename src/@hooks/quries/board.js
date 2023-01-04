import { useQuery } from '@tanstack/react-query';
import { getBoard } from '../../apis/board';

export const useFetchBoard = () => {
  const data = useQuery(['board'], getBoard);

  return data.data;
};
