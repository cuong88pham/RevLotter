import React from 'react';
const getSizeNumberBySize = ({ small, medium, large }) => {
  switch (true) {
    case small:
      return 24;
    case medium:
      return 48;
    case large:
      return 100;
    default:
      return 48;
  }
};
const AvatarComponent = ({ url, small, medium, large }) => {
  const sizeNumber = getSizeNumberBySize({ small, medium, large });
  return (
    <label>
      {url ? (
        <img className="avatar" alt="" src={url} />
      ) : (
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
      )}

      <style jsx>{`
        img {
          width: ${sizeNumber}px;
          height: ${sizeNumber}px;
        }
        .avatar {
          position: relative;
          -webkit-border-radius: 50%;
          border-radius: 50%;
        }
      `}</style>
    </label>
  );
};
export default AvatarComponent;
