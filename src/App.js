import React from 'react'
import Header from '../src/components/Header'
import Navigator from '../src/components/Navigator'
import Assessment from '../src/components/Assessment'
import Dashboard from '../src/components/Dashboard'
import Clients from '../src/components/Clients'
import Management from '../src/components/Management'
import AssessmentState from '../src/components/AssessmentState'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dashboardState: 'csri',
      assessmentState: 'identify',
    }
  }
  changeDashboardState = (dashboardState) => {
    this.setState({ dashboardState })
  }
  changeAssessmentState = (assessmentState) => {
    this.setState({ assessmentState })
  }
  render() {
    let dashboard_state = null
    let assessment_state = null
    let navigation_options = null
    switch (this.state.dashboardState) {
      case 'csri':
        dashboard_state = (
          <Dashboard changeDashboardState={this.changeDashboardState} />
        )
        navigation_options = [
          'Maturity Assessment',
          'Assessment Latest Report',
          'Assessment History',
        ]
        break
      case 'assessment':
        dashboard_state = (
          <AssessmentState
            changeAssessmentState={(assessmentState) => {
              this.setState({
                dashboardState: 'assessment_state',
                assessmentState,
              })
            }}
          />
        )
        navigation_options = [
          'Identify',
          'Protect',
          'Detect',
          'Response',
          'Recovery',
        ]

        break
      case 'assessment_state':
        dashboard_state = (
          <Assessment
            assessmentState={this.state.assessmentState}
            changeAssessmentState={this.changeAssessmentState}
          />
        )
        navigation_options = [
          'Maturity Assessment',
          'Assessment Latest Report',
          'Assessment History',
        ]

        break

      case 'clients':
        dashboard_state = <Clients />
        break
      case 'management':
        dashboard_state = <Management />
        break
      default:
        dashboard_state = null
    }
    return (
      <div>
        <Header />
        <div
          style={{
            display: 'flex',
            paddingTop: 64,
            minHeight: 'calc(100vh - 64px)',
            boxSizing: 'border-box',
          }}
        >
          <Navigator
            dashboard_state={this.state.dashboardState}
            assessment_state={this.state.assessmentState}
            navigation_options={navigation_options}
            changeAssessmentState={this.changeAssessmentState}
            changeDashboardState={this.changeDashboardState}
          />
          <div style={{ width: 280 }}></div>
          <div style={{ flex: 1 }}>{dashboard_state}</div>
        </div>
      </div>
    )
  }
}
