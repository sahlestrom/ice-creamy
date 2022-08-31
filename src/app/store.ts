import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moodSlice from '../features/mood/moodSlice';

export const store = configureStore({
  reducer: moodSlice,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
