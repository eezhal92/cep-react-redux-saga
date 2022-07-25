import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { NewsItem } from './api';

export type CounterState = {
  items: Array<NewsItem>;
};

const initialState: CounterState = {
  items: [],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Array<NewsItem>>) => {
      state.items = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;

// Retrieve all news
export const selectNews = (state: RootState) => state.news.items;

// export const selectIsLogged = (state: RootState) => state.auth.token !== null;

// response interceptor

export default newsSlice.reducer;
