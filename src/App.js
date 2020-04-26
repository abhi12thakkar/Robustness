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
  handleNextBackClick = (isNext) => {
    let assessment_order = ["identify", "protect", "detect", "response", "recovery"]
    let i;
    for(i=0;i<assessment_order.length;i++){
        if(this.state.assessmentState==assessment_order[i])
            break;
    }
    this.changeAssessmentState(assessment_order[isNext?i+1:i-1])
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
          {text: 'Maturity Assessment', state: 'assessment'},
          {text: 'Assessment Latest Report'},
          {text: 'Assessment History'},
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
          {text: 'Identify', state: 'identify'},
          {text: 'Protect', state: 'protect'},
          {text: 'Detect', state: 'detect'},
          {text: 'Response', state: 'response'},
          {text: 'Recovery', state: 'recovery'},
        ]

        break
      case 'assessment_state':
        dashboard_state = (
          <Assessment
            assessmentState={this.state.assessmentState}
            changeAssessmentState={this.changeAssessmentState}
            showNext={this.state.assessmentState!="recovery"}
            showBack={this.state.assessmentState!="identify"}
            onNext={()=>{this.handleNextBackClick(true)}}
            onBack={()=>{this.handleNextBackClick(false)}}
          />
        )
        navigation_options = [
            {text: 'Maturity Assessment', state: 'assessment'},
            {text: 'Assessment Latest Report'},
            {text: 'Assessment History'},
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
