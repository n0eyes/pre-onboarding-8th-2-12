import {
  useCreateIssue,
  useDeleteIssue,
  useUpdateBoardTitle,
} from '../queries/board';

export const useBoard = () => {
  const createIssueMutation = useCreateIssue();
  const deleteIssueMutation = useDeleteIssue();
  const updateTitleMutation = useUpdateBoardTitle();

  const updateTitle = (title) => {
    updateTitleMutation.mutate(title);
  };

  const deleteIssue = (id) => {
    deleteIssueMutation.mutate(id);
  };

  const createIssue = (
    { title, selectedOwnerList, stateId },
    { onSuccess, onSettled }
  ) => {
    const ownerList = selectedOwnerList.map(({ id }) => id);
    const payload = { title, ownerList, stateId };

    createIssueMutation.mutate(payload, {
      onSuccess,
      onSettled,
    });
  };

  return { updateTitle, deleteIssue, createIssue };
};
