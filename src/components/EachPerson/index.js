import {Component} from 'react'
import './index.css'

class EachPerson extends Component {
  onClickEdit = () => {
    const {eachPersonDetails, onEditingEachPerson} = this.props
    const {id} = eachPersonDetails
    onEditingEachPerson(id)
  }

  render() {
    const {eachPersonDetails} = this.props
    const {name, address, email, mobileNo, gender} = eachPersonDetails
    return (
      <li className="each-person-details-container">
        <p className="each-person-details">{name}</p>
        <p className="each-person-details">{address}</p>
        <p className="each-person-details">{email}</p>
        <p className="each-person-details">{mobileNo}</p>
        <p className="each-person-details">{gender}</p>
        <button type="button" className="edit-btn" onClick={this.onClickEdit}>
          Edit
        </button>
      </li>
    )
  }
}

export default EachPerson
