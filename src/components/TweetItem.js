import React, { useState } from "react";

function TweetItem(props) {
  let [likedAmoount, setLikedAmount] = useState(props.tweet.favorite_count);
  let [isActive, setIsActive] = useState(false);

  function handleLikedOnClick(event) {
    if (isActive) {
      setLikedAmount((likedAmoount) => likedAmoount - 1);
      setIsActive(false);
    } else {
      setLikedAmount((likedAmoount) => likedAmoount + 1);
      setIsActive(true);
    }
  }
  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={handleLikedOnClick}
            className={
              isActive
                ? "ui tiny basic labeled icon like buttton active"
                : "ui tiny basic labeled icon like button"
            }
          >
            <i className="like icon"></i> {likedAmoount} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
