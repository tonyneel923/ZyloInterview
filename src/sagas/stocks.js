import { put } from 'redux-saga/effects';
import axios from 'axios';
import config from '../config';

export function* getStocks(action) {
  try {
    console.log(action);
    const response = yield axios.get(`${config.REACT_APP_API_BASE_URL}/stocks/${action.stockSymbol}`);
    yield put({ type: 'GET_STOCKS_SUCCESS', response: response.data, stockSymbol: action.stockSymbol });
  } catch (axiosError) {
    yield put({ type: 'STOCKS_FAILURE', error: axiosError.error });
    console.log('STOCKS_FAILURE', axiosError);
  }
}

export function* getFavorites(action) {
  try {
    const response = yield axios.get(`${config.REACT_APP_API_BASE_URL}/favorites`);
    yield put({ type: 'GET_FAVORITES_SUCCESS', response: response.data });
  } catch (axiosError) {
    yield put({ type: 'STOCKS_FAILURE', error: axiosError.error });
    console.log('STOCKS_FAILURE', axiosError);
  }
}

export function* addFavorites(action) {
  try {
    const response = yield axios.post(`${config.REACT_APP_API_BASE_URL}/favorites`, { favorite: action.favorite });
    yield put({ type: 'ADD_FAVORITES_SUCCESS', response: response.data });
  } catch (axiosError) {
    yield put({ type: 'STOCKS_FAILURE', error: axiosError.error });
    console.log('STOCKS_FAILURE', axiosError);
  }
}
