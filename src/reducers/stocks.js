import { fromJS } from 'immutable';

export default(state = fromJS({
  currentStock: '',
  currentStockData: {},
  favorites: '',
  favoriteStockData: [],
  isLoggedIn: true,
  error: ''
}), payload) => {
  switch (payload.type) {
    case 'GET_STOCKS_SUCCESS':
      return state.updateIn(['currentStock'], () => payload.stockSymbol)
                  .updateIn(['currentStockData'], () => payload.response);

    case 'GET_FAVORITES_SUCCESS':
      return state.updateIn(['favoritesStockData'], () => payload.response);

    case 'ADD_FAVORITES_SUCCESS':
      return state.updateIn(['favorites'], () => payload.response.favorites);

    case 'STOCKS_FAILURE':
      return state.updateIn(['error'], () => payload.error);

    default:
      return state;
  }
};
