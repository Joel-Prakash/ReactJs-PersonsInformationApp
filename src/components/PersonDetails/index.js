import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import EachPerson from '../EachPerson'
import './index.css'

class PersonDetails extends Component {
  state = {
    personDetailsList: [],
    nameInput: '',
    addressInput: '',
    emailInput: '',
    mobileNoInput: '',
    genderInput: '',
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeAddressInput = event => {
    this.setState({addressInput: event.target.value})
  }

  onChangeEmailInput = event => {
    this.setState({emailInput: event.target.value})
  }

  onChangeMobileNoInput = event => {
    this.setState({mobileNoInput: event.target.value})
  }

  onChangeGenderInput = event => {
    this.setState({genderInput: event.target.value})
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {
      nameInput,
      addressInput,
      emailInput,
      mobileNoInput,
      genderInput,
    } = this.state
    if (
      nameInput !== '' &&
      addressInput !== '' &&
      emailInput !== '' &&
      mobileNoInput !== '' &&
      genderInput !== ''
    ) {
      const personInfo = {
        id: uuidv4(),
        name: nameInput,
        address: addressInput,
        email: emailInput,
        mobileNo: mobileNoInput,
        gender: genderInput,
      }
      this.setState(prevState => ({
        personDetailsList: [...prevState.personDetailsList, personInfo],
        nameInput: '',
        addressInput: '',
        emailInput: '',
        mobileNoInput: '',
        genderInput: '',
      }))
    }
  }

  onEditingEachPerson = id => {
    const {personDetailsList} = this.state
    const personToBeEdited = personDetailsList.filter(
      eachPerson => eachPerson.id === id,
    )

    const {name, address, email, mobileNo, gender} = personToBeEdited[0]
    this.setState({
      nameInput: name,
      addressInput: address,
      emailInput: email,
      mobileNoInput: mobileNo,
      genderInput: gender,
    })
    const newPersonDetailsList = personDetailsList.filter(
      eachPerson => eachPerson.id !== id,
    )
    this.setState({personDetailsList: newPersonDetailsList})
  }

  render() {
    const {
      personDetailsList,
      nameInput,
      addressInput,
      emailInput,
      mobileNoInput,
      genderInput,
    } = this.state

    return (
      <div className="main-container">
        <form className="form" onSubmit={this.onSubmitDetails}>
          <div className="each-input-container">
            <label htmlFor="name-input" className="all-labels">
              Name
            </label>
            <input
              type="text"
              className="all-inputs"
              id="name-input"
              onChange={this.onChangeNameInput}
              value={nameInput}
            />
          </div>
          <div className="each-input-container">
            <label htmlFor="address-input" className="all-labels">
              Address
            </label>
            <input
              type="text"
              className="all-inputs"
              id="address-input"
              onChange={this.onChangeAddressInput}
              value={addressInput}
            />
          </div>
          <div className="each-input-container">
            <label htmlFor="email-input" className="all-labels">
              Email
            </label>
            <input
              type="text"
              className="all-inputs"
              id="email-input"
              onChange={this.onChangeEmailInput}
              value={emailInput}
            />
          </div>
          <div className="each-input-container">
            <label htmlFor="mob-no-input" className="all-labels">
              Mob. No
            </label>
            <input
              type="text"
              className="all-inputs"
              id="mob-no-input"
              onChange={this.onChangeMobileNoInput}
              value={mobileNoInput}
            />
          </div>
          <div className="each-input-container">
            <label htmlFor="gender-input" className="all-labels">
              Gender
            </label>
            <select
              id="gender-input"
              className="all-inputs"
              onChange={this.onChangeGenderInput}
              value={genderInput}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
        <div className="person-details-container">
          <ul>
            <li className="titles-container">
              <h1 className="title">Name</h1>
              <h1 className="title">Address</h1>
              <h1 className="title">Email</h1>
              <h1 className="title">Mobile No</h1>
              <h1 className="title">Gender</h1>
              <h1 className="title">Edit</h1>
            </li>
            {personDetailsList.map(eachPersonDetails => (
              <EachPerson
                eachPersonDetails={eachPersonDetails}
                key={eachPersonDetails.id}
                onEditingEachPerson={this.onEditingEachPerson}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PersonDetails
