import PropTypes from 'prop-types';

const StaffCard = ({ image, name, position }) => {
    return (
      <div className="staff-card">
        <img src={image} alt={name} className="staff-image" />
        <div className="staff-info">
          <h3 className="staff-name">{name}</h3>
          <p className="staff-position">{position}</p>
        </div>
      </div>
    );
  };
  

// Define PropTypes for the component
StaffCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default StaffCard;
