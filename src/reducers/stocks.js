import { fromJS, OrderedMap } from 'immutable';

export default(state = fromJS({
  currentStock: '',
  currentStockData: {},
  favorites: '',
  favoritesStockData: [],
  isLoggedIn: true,
  error: ''
}), payload) => {
  switch (payload.type) {
    case 'GET_STOCKS_SUCCESS':
      return state.updateIn(['currentStock'], () => payload.stockSymbol)
                  .updateIn(['currentStockData'], () => OrderedMap(payload.response));

    case 'GET_FAVORITES_SUCCESS':
      return state.updateIn(['favoritesStockData'], () => fromJS(payload.response));

    case 'ADD_FAVORITES_SUCCESS':
      return state.updateIn(['favorites'], () => fromJS(payload.response.favorites));

    case 'GET_FAVORITES_FAILURE':
      return state.updateIn(['favoritesStockData'], () => null);

    case 'ADD_FAVORITES_FAILURE':
      return state.updateIn(['error'], () => 'Cannot have more than 5 favorites');

    case 'GET_STOCKS_FAILURE':
      return state.updateIn(['error'], () => 'Stock symbol does not exist. Please try again');

    case 'REMOVE_ERROR':
      return state.updateIn(['error'], () => '');

    default:
      return state;
  }
};
