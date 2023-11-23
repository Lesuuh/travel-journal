export default function Card({ imageUrl, title, location, startDate, endDate, description, googleMapsUrl }) {
  return (
    <div className="card-section">
      <div className="card-item">
        <div className="card-img-container">
          <img
            src={imageUrl}
            alt=""
            className="card-img"
          />
        </div>
        <div className="card-details">
          <h4 className="location">{location}</h4>
          <a
            href={googleMapsUrl}
            className="card-location-url"
          >
            View on Google maps
          </a>
          <h1 className="title">{title}</h1>
          <div className="date">
            <h4>{startDate} - {endDate}</h4>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
