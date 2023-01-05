import { useContext } from 'react';
import {
  TargetContext,
  TargetUpdateContext,
} from '../../context/TargetContext';

export const useTargetContext = () => {
  const targetInfo = useContext(TargetContext);

  return targetInfo;
};

export const useTargetUpdateContext = () => {
  const clickHandler = useContext(TargetUpdateContext);

  return clickHandler;
};
