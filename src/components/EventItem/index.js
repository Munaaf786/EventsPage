import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails

  const className = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={className} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
