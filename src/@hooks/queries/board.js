import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getBoard, updateBoardTitle, updateDnD } from '../../apis/board';

export const useFetchBoard = () => {
  const data = useQuery(['board'], getBoard);

  return data.data;
};

export const useUpdateBoardTitle = () => {
  const queryClient = useQueryClient();

  return useMutation(updateBoardTitle, {
    onSuccess() {
      queryClient.invalidateQueries(['board']);
    },
  });
};

export const useUpdateDnD = () => {
  const queryClient = useQueryClient();

  return useMutation(updateDnD, {
    onSuccess() {
      queryClient.invalidateQueries(['board']);
    },
  });
};
