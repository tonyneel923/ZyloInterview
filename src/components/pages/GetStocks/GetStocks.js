import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getStocks, addFavorites, removeError } from '../../../actions/stocks';

import StocksLineGraph from '../../ui/StocksLineGraph/StocksLineGraph';

import styles from './GetStocks.module.scss';

class GetStocks extends Component {
  constructor() {
    super();

    this.state = {
      stockSymbol: ''
    };
  }

  onChangeHandler = (event) => {
    if (this.props.error) this.props.removeError();
    this.setState({ stockSymbol: event.target.value });
  }

  render() {
    const { currentStockData, getStocks, addFavorites, currentStock, error } = this.props;
    return (
      <div className={styles.page}>
        <h3 className={styles.header}>Enter a stock symbol below to see current prices</h3>

        <div className={styles.inputGroup}>
          <input className={styles.inputItem} type="text" value={this.state.stockSymbol} onChange={this.onChangeHandler}/>
          <input className={styles.inputItem} type="button" onClick={() => getStocks(this.state.stockSymbol)} value="Enter"/>
        </div>

        { currentStockData.size ? <span className={styles.add} onClick={() => addFavorites(currentStock)}>Add as favorite</span> : null }
        { error ? <span className={styles.error}>{error}</span> : null }

        <StocksLineGraph data={currentStockData} />
      </div>
    );
  }
}

const mapStateToProps = () => {
    return (state) => {
      return {
        currentStock: state.stocks.get('currentStock'),
        currentStockData: state.stocks.get('currentStockData'),
        error: state.stocks.get('error'),
      };
    };
  };

const mapDispatchToProps = (dispatch) => {
  return {
    getStocks: bindActionCreators(getStocks, dispatch),
    addFavorites: bindActionCreators(addFavorites, dispatch),
    removeError: bindActionCreators(removeError, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetStocks);
