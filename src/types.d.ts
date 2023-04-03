import { ThunkDispatch } from 'redux-thunk';
import { RootState, AppDispatch } from './store';

export type AppThunkDispatch = ThunkDispatch<RootState, undefined, AppDispatch>;