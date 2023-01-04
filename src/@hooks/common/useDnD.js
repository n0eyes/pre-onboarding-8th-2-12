import { useState } from 'react';

export const getPositionInfo = (elem, y) => {
  const info = elem.getBoundingClientRect();
  const offset = y - info.top - info.height / 2;

  return offset < 0
    ? { position: 'before', targetId: Number(elem.dataset.id) }
    : { position: 'after', targetId: Number(elem.dataset.id) };
};

export const useDnD = () => {
  let draggingId = null;
  const [positionInfo, setPositionInfo] = useState({
    position: '',
    targetId: null,
  });

  const handleDragStart = (e) => {
    draggingId = Number(e.target.dataset.id);

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('draggingId', draggingId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    const newPositionInfo = getPositionInfo(e.target, e.clientY);

    if (
      positionInfo.position !== newPositionInfo.position &&
      draggingId !== newPositionInfo.targetId
    ) {
      setPositionInfo((prev) => ({ ...prev, ...newPositionInfo }));
    }
  };

  const handleDrop = (e) => {
    const draggingId = JSON.parse(e.dataTransfer.getData('draggingId'));

    /** body */
    console.log({ ...positionInfo, draggingId });
  };

  return { handleDragStart, handleDragOver, handleDrop, positionInfo };
};
