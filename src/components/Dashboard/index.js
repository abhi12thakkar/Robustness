import React from 'react'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="dashboard-container">
        <div
          className="vertical"
          onClick={() => {
            this.props.changeDashboardState('clients')
          }}
        >
          Clients
        </div>
        <div
          className="vertical"
          onClick={() => {
            this.props.changeDashboardState('assessment')
          }}
        >
          Maturity Assessment
        </div>
        <div
          className="vertical"
          onClick={() => {
            this.props.changeDashboardState('management')
          }}
        >
          User Account Management
        </div>
      </div>
    )
  }
}
