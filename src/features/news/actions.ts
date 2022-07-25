// custom actions to trigger sagas
export const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED';

export const mockActionCreators = {
  fetchNewsRequest: () => ({
    type: FETCH_NEWS_REQUESTED,
  }),
}
