import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getStocks } from '../../../actions/stocks';

import styles from './GetStocks.module.scss';

class GetStocks extends Component {
  constructor() {
    super();

    this.state = {
      stockSymbol: ''
    };
  }

  onChangeHandler = (event) => {
    this.setState({ stockSymbol: event.target.value });
  }

  render() {
    return (
      <div className={styles.page}>
        <h3 className={styles.header}>Enter a stock symbol below to see current prices</h3>

        <div className={styles.inputGroup}>
          <input className={styles.inputItem} type="text" value={this.state.stockSymbol} onChange={this.onChangeHandler}/>
          <input className={styles.inputItem} type="button" onClick={() => this.props.getStocks(this.state.stockSymbol)} value="Enter"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
    return (state) => {
      return {
        currentStock: state.stocks.get('currentStock'),
        currentStockData: state.stocks.get('currentStockData'),
      };
    };
  };

  function mapDispatchToProps(dispatch) {
    return {
      getStocks: bindActionCreators(getStocks, dispatch),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(GetStocks);
