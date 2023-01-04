import { useDeleteIssue, useUpdateBoardTitle } from '../queries/board';

export const useBoard = () => {
  const deleteIssueMutation = useDeleteIssue();
  const updateTitleMutation = useUpdateBoardTitle();

  const updateTitle = (title) => {
    updateTitleMutation.mutate(title);
  };

  const deleteIssue = (id) => {
    deleteIssueMutation.mutate(id);
  };

  return { updateTitle, deleteIssue };
};
