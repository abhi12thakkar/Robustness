import React from 'react'
import Styles from './styles'

export default class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }

  handleStateChange = (ele) => {
    if (this.props.dashboard_state == 'assessment') {
      this.props.chanageAssessmentState(ele.toLowerCase())
    }
  }
  render() {
    return (
      <Styles>
        <div className="navigator-container">
          <div className="options-container">
            <div className="title">DASHBOARDS</div>
            <div
              className="option"
              style={{
                fontWeight: 'bold',
                backgroundColor:
                  this.state.selected == -1 ? '#e0f3ff' : 'transparent',
              }}
              onClick={() => {
                this.props.changeDashboardState('csri')
                this.setState({ selected: -1 })
              }}
            >
              CSRI
            </div>
          </div>
          <div className="options-container">
            <div className="title">ASSESSMENTS DETAILS</div>
            {this.props.navigation_options &&
              this.props.navigation_options.map &&
              this.props.navigation_options.map((ele, index) => {
                return (
                  <div
                    className="option"
                    style={{
                      backgroundColor:
                        this.state.selected == index
                          ? '#e0f3ff'
                          : 'transparent',
                    }}
                    key={index}
                    onClick={() => {
                      this.handleStateChange(ele)
                      this.setState({ selected: index })
                    }}
                  >
                    {ele}
                  </div>
                )
              })}
          </div>
        </div>
      </Styles>
    )
  }
}
