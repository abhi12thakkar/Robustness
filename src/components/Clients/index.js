import React from 'react'
import Styles from './styles'

export default class Clients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          first_name: 'Albert',
          last_name: 'John',
          organisation: 'Wipro',
          email: 'albert@wipro.com',
          designation: 'Project Manager',
          contact: '+61 876534212',
        },
        {
          id: 2,
          first_name: 'George',
          last_name: 'David',
          organisation: 'Coinvest',
          email: 'david@coinvest.com',
          designation: 'Security Manager',
          contact: '+61 434987123',
        },
        {
          id: 3,
          first_name: 'Victor',
          last_name: 'Don',
          organisation: 'Coles',
          email: 'victordon@coles.com',
          designation: 'IT Manager',
          contact: '+61 431564777',
        },
      ],
    }
  }
  render() {
    return (
      <Styles>
        <div className="clients-container">
          <div className="title">CSRI Dashboard</div>
          <div className="body">
            <div className="table">
              <div className="table-header">CLIENTS LIST</div>
              <div className="column-headers row">
                <div className="column-header column id">#</div>
                <div className="column-header column first-name">
                  First Name
                </div>
                <div className="column-header column last-name">Last Name</div>
                <div className="column-header column organisation">
                  Organisation
                </div>
                <div className="column-header column email">email</div>
                <div className="column-header column designation">
                  Designation
                </div>
                <div className="column-header column contact">
                  Contact Number
                </div>
              </div>
              <div className="table-body">
                {this.state.list &&
                  this.state.list.map &&
                  this.state.list.map((ele, index) => {
                    return (
                      <div className="row" key={index}>
                        <div className="column id">{ele.id}</div>
                        <div className="column first-name">
                          {ele.first_name}
                        </div>
                        <div className="column last-name">{ele.last_name}</div>
                        <div className="column organisation">
                          {ele.organisation}
                        </div>
                        <div className="column email">{ele.email}</div>
                        <div className="column designation">
                          {ele.designation}
                        </div>
                        <div className="column contact">{ele.contact}</div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </Styles>
    )
  }
}
