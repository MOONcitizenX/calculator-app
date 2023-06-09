import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '@store/actions';

export const useTypedActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
};
