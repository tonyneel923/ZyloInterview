import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFavorites } from '../../../actions/stocks';

import { VictoryBar, VictoryChart } from 'victory';

import styles from './Favorites.module.scss';

class Favorites extends Component {
  componentWillMount() {
    this.props.getFavorites();
  }

  render() {
    const { favoritesStockData, favorites } = this.props;
    if (!favoritesStockData) return <span>Sorry you do not have any favorites yet.</span>;
    if (!favoritesStockData.size) return <span>loading...</span>;

    const plainData = [];
    favoritesStockData.map(favoriteStock => {
      // api wierdness
      return plainData.push({ x: favoriteStock.get('1. symbol'), y: parseInt(favoriteStock.get('2. price')) });
    });

    return (
      <div className={styles.page}>
        <h3 className={styles.header}>A snapshot of your favorite stocks.</h3>

        <VictoryChart domainPadding={{ x: 25 }}>
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            data={plainData.sort((a, b) => a.y - b.y)}
          />
        </VictoryChart>
      </div>
    );
  }
}

const mapStateToProps = () => {
    return (state) => {
      return {
        favorites: state.stocks.get('favorites'),
        favoritesStockData: state.stocks.get('favoritesStockData'),
      };
    };
  };

  function mapDispatchToProps(dispatch) {
    return {
      getFavorites: bindActionCreators(getFavorites, dispatch),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
