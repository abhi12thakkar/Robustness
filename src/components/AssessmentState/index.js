import React from 'react'
import Styles from './styles'

export default class AssessmentState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Styles>
        <div className="assessment-state-container">
          <div className="title">CSRI Dashboard</div>
          <div className="verticals-container">
            <div
              className="vertical identity"
              onClick={() => {
                this.props.changeAssessmentState('identify')
              }}
            >
              <div className="vertical-title">Identity</div>
            </div>
            <div
              className="vertical  protect"
              onClick={() => {
                this.props.changeAssessmentState('protect')
              }}
            >
              <div className="vertical-title">Protect</div>
            </div>
            <div
              className="vertical  detect"
              onClick={() => {
                this.props.changeAssessmentState('detect')
              }}
            >
              <div className="vertical-title">Detect</div>
            </div>
            <div
              className="vertical  respond"
              onClick={() => {
                this.props.changeAssessmentState('response')
              }}
            >
              <div className="vertical-title">Response</div>
            </div>
            <div
              className="vertical  recovery"
              onClick={() => {
                this.props.changeAssessmentState('recovery')
              }}
            >
              <div className="vertical-title">Recovery</div>
            </div>
          </div>
        </div>
      </Styles>
    )
  }
}
