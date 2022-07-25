import { configureStore, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit';
import sss from '../features/counter/counterSlice';
import newsReducer from '../features/news/newsSlice';
import mysaga from './saga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    penghitung: sss,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(mysaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
