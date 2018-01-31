import { put } from 'redux-saga/effects';
import axios from 'axios';
import config from '../config';

export function* getStocks(action) {
  try {
    const response = yield axios.get(`${config.REACT_APP_API_BASE_URL}/stocks/${action.stockSymbol}`);
    yield put({ type: 'GET_STOCKS_SUCCESS', response: response.data, stockSymbol: action.stockSymbol });
  } catch (axiosError) {
    console.log('GET_STOCKS_FAILURE', axiosError);
    yield put({ type: 'GET_STOCKS_FAILURE' });
  }
}

export function* getFavorites(action) {
  try {
    const response = yield axios.get(`${config.REACT_APP_API_BASE_URL}/favorites`);
    yield put({ type: 'GET_FAVORITES_SUCCESS', response: response.data });
  } catch (axiosError) {
    yield put({ type: 'GET_FAVORITES_FAILURE' });
  }
}

export function* addFavorites(action) {
  console.log(action);
  try {
    const response = yield axios.post(`${config.REACT_APP_API_BASE_URL}/favorites`, { favorite: action.favorite });
    yield put({ type: 'ADD_FAVORITES_SUCCESS', response: response.data });
  } catch (axiosError) {
    console.log('ADD_FAVORITES_FAILURE', axiosError);
    yield put({ type: 'ADD_FAVORITES_FAILURE' });
  }
}
