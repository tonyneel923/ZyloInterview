import { takeEvery } from 'redux-saga/effects';

import * as stocks from './sagas/stocks';

export default function* dataSaga() {
  yield takeEvery('GET_STOCKS', stocks.getStocks);
  yield takeEvery('GET_FAVORITES', stocks.getFavorites);
  yield takeEvery('ADD_FAVORITES', stocks.addFavorites);
}
