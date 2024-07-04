import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import ListPasswordHere from '../ListPasswordItem'

class Password extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordList: [],
    isChecked: false,
    searchInput: '',
  }

  onWebsiteInput = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }
  onUsernameInput = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }
  onPasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  initialColors = ["#454f84", "#0b69ff", "#94a3b8", "#b6c3ca", "#7683cb", "#f59e0b", "#10b981", "#f97316", "#14b8a6", "#b91c1c"];

  getRandomColor =()=> {
    return this.initialColors[Math.floor(Math.random() * this.initialColors.length)];
  }

  onAddWebsitePassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPass = {
      id: uuidv4(),
      websiteInput,
      usernameInput,
      passwordInput,
      color: this.getRandomColor(), 
    }
    this.setState(prev => ({
      passwordList: [...prev.passwordList, newPass],
    }))

    this.setState({
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    })
  }
  onIsChecked = () => {
    const {isChecked} = this.state
    this.setState({
      isChecked: !isChecked,
    })
  }
  onDeleteDetails = id => {
    this.setState(prev => ({
      passwordList: prev.passwordList.filter(
        eachDetails => eachDetails.id !== id,
      ),
    }))
  }
  onChangeSeachInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordList,
      isChecked,
      searchInput,
    } = this.state
    const filteredPasswordList = passwordList.filter(each =>
      each.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const length = filteredPasswordList.length
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="get-detail-password-container">
          <div className="add-password-container">
            <h1 className="addpassword-heading">Add New Password</h1>
            <form onSubmit={this.onAddWebsitePassword}>
              <div className="input-details-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
                <span className="separator"></span>
                <input
                  type="text"
                  className="website-input"
                  placeholder="Enter Website"
                  onChange={this.onWebsiteInput}
                  value={websiteInput}
                />
              </div>
              <div className="input-details-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
                <span className="separator"></span>
                <input
                  type="text"
                  className="website-input"
                  placeholder="Enter Username"
                  onChange={this.onUsernameInput}
                  value={usernameInput}
                />
              </div>
              <div className="input-details-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
                <span className="separator"></span>
                <input
                  type="password"
                  className="website-input"
                  placeholder="Enter Password"
                  onChange={this.onPasswordInput}
                  value={passwordInput}
                />
              </div>
              <div className="add-button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-img"
          />
        </div>
        <div className="passList-container">
          <div className="header-container">
            <div className="search-password-header">
              <h1 className="addpassword-heading">Your Passwords</h1>
              <p className="addpassword-count">{length}</p>
            </div>
            <div className="search-pass-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icon"
              />
              <span className="separator"></span>
              <input
                type="search"
                className="website-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSeachInput}
              />
            </div>
          </div>
          <hr className="hor-line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox1"
              className="checkbox-input"
              onClick={this.onIsChecked}
            />
            <label htmlFor="checkbox1" className="checkbox-label">
              Show Passwords
            </label>
          </div>
          {length >= 1 ? (
            <ul className="ul-container">
              {filteredPasswordList.map(eachPassword => (
                <ListPasswordHere
                  passWordDetail={eachPassword}
                  key={eachPassword.id}
                  isChecked={isChecked}
                  onDeleteDetails={this.onDeleteDetails}
                />
              ))}
            </ul>
          ) : (
            <div className="no-pass-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="noPassPara">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Password
