import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_NEWS_REQUESTED } from '../features/news/actions';
import { getNews, NewsItem } from '../features/news/api';
import { setNews } from '../features/news/newsSlice';



function* fetchNewsShomehow() {
  console.log('fetching news!');

  const result = (yield call(getNews)) as NewsItem[];

  console.log(result);

  // call login
  // const res = yield call(login, username, password)
  // yield put(setAuthToken(res.token))
  // call profile
  // const profile = yield call(getProfile, token)
  // yield put(setProflile(profile))

  // dispatch another action
  yield put(setNews(result));
}

function* mySaga() {
  yield takeLatest(FETCH_NEWS_REQUESTED, fetchNewsShomehow);
}

export default mySaga;
