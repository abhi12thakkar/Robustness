import React from 'react'
import Styles from './styles'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Styles>
        <div className="dashboard-container">
          <div className="title">CSRI Dashboard</div>
          <div className="verticals-container">
            <div
              className="vertical clients"
              onClick={() => {
                this.props.changeDashboardState('clients')
              }}
            >
              <div className="vertical-title">Clients</div>
              <div className="stats">Total Clients (40)</div>
            </div>
            <div
              className="vertical assessment"
              onClick={() => {
                this.props.changeDashboardState('assessment')
              }}
            >
              <div className="vertical-title">Maturity Assessment</div>
              <div className="stats">Total (79)</div>
            </div>
            <div
              className="vertical management"
              onClick={() => {
                this.props.changeDashboardState('management')
              }}
            >
              <div className="vertical-title">User Account Management</div>
              <div className="stats">Total Users (30)</div>
            </div>
          </div>
        </div>
      </Styles>
    )
  }
}
