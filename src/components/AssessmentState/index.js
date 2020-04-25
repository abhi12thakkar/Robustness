import React from 'react'

export default class AssessmentState extends React.Component {
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
            this.props.changeAssessmentState('identity')
          }}
        >
          Identity
        </div>
        <div
          className="vertical"
          onClick={() => {
            this.props.changeAssessmentState('protect')
          }}
        >
          Protect
        </div>
        <div
          className="vertical"
          onClick={() => {
            this.props.changeAssessmentState('detect')
          }}
        >
            Detect
        </div>
        <div
          className="vertical"
          onClick={() => {
            this.props.changeAssessmentState('respond')
          }}
        >
            Respond
        </div>
        <div
          className="vertical"
          onClick={() => {
            this.props.changeAssessmentState('recovery')
          }}
        >
            Recovery
        </div>
      </div>
    )
  }
}
