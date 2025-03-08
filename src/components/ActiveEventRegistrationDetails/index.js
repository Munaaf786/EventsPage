import './index.css'

const eventRegistrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event">
      Click on an event, to view its registration details
    </p>
  )

  const rendeRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="description registered">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="description yet-to-register">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registraions-closed-image"
      />
      <h1 className="description">Registrations Are Closed Now!</h1>
      <p className="description para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (registrationStatus) {
      case eventRegistrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case eventRegistrationStatus.registered:
        return rendeRegisteredView()
      case eventRegistrationStatus.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveEventView()
    }
  }

  return renderActiveEventRegistrationDetails()
}

export default ActiveEventRegistrationDetails
