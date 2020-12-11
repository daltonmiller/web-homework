/* eslint-disable no-new */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Chart from 'chart.js'

export class PieChart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      updateTransactions: this.props.transaction
    }
  }

    chartRef = React.createRef();

    componentDidMount (props) {
      const travel = this.props.transactions.filter(transaction => transaction.category === 'Travel').length > 0 ? this.props.transactions.filter(transaction => transaction.category === 'Travel').map(transaction => transaction.amount).reduce((a, b) => (a + b)) : 0
      const equipment = this.props.transactions.filter(transaction => transaction.category === 'Equipment').length > 0 ? this.props.transactions.filter(transaction => transaction.category === 'Equipment').map(transaction => transaction.amount).reduce((a, b) => (a + b)) : 0
      const supplies = this.props.transactions.filter(transaction => transaction.category === 'Supplies').length > 0 ? this.props.transactions.filter(transaction => transaction.category === 'Supplies').map(transaction => transaction.amount).reduce((a, b) => (a + b)) : 0
      const misc = this.props.transactions.filter(transaction => transaction.category === 'Misc').length > 0 ? this.props.transactions.filter(transaction => transaction.category === 'Misc').map(transaction => transaction.amount).reduce((a, b) => (a + b)) : 0

      const myChartRef = this.chartRef.current.getContext('2d')

      new Chart(myChartRef, {
        type: 'pie',
        data: {
          datasets: [
            {
              backgroundColor: ['#E5FCC2', '#9DE0AD ', '#45ADA8', '#547980'],
              label: 'Category',
              data: [travel, equipment, supplies, misc]
            }
          ],
          labels: ['Travel', 'Equipment', 'Supplies', 'Misc']
        },
        options: {
        }
      })
    }

    render () {
      return (
        <div>
          <canvas
            id='myChart'
            ref={this.chartRef}
          />
        </div>
      )
    }
}
