import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getBoard, updateBoardTitle } from '../../apis/board';

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
