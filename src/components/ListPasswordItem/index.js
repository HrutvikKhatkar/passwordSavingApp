import React from 'react';
import './index.css';

const ListPasswordHere = props => {
  const { passWordDetail, isChecked, onDeleteDetails } = props;
  const { id, websiteInput, usernameInput, passwordInput, color } = passWordDetail;  
  const initialLetter = websiteInput[0].toUpperCase();

  const onDelete = () => {
    onDeleteDetails(id);
  };

  const Initial = ({ initialLetter, color }) => {
    const initialStyle = {
      backgroundColor: color,  // Use the stored color
    };

    return <p className="initial" style={initialStyle}>{initialLetter}</p>;
  };

  return (
    <li className="list-item">
      <div>
        <Initial initialLetter={initialLetter} color={color} />
      </div>
      <div className="pass-details">
        <p className="pass-details-para">{websiteInput}</p>
        <p className="pass-details-para">{usernameInput}</p>
        {isChecked ? (
          <p className="pass-details-para">{passwordInput}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  );
};

export default ListPasswordHere;
