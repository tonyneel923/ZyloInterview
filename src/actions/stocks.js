export const getStocks = (stockSymbol) => {
  return {
    type: 'GET_STOCKS',
    stockSymbol
  };
};

export const getFavorites = () => {
  return {
    type: 'GET_FAVORITES',
  };
};

export const addFavorites = (favorite) => {
  return {
    type: 'ADD_FAVORITES',
    favorite
  };
};

export const removeError = () => {
  return {
    type: 'REMOVE_ERROR'
  };
};
