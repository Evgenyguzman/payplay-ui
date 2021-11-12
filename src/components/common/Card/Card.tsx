import React from "react";

interface Props {
  style?: React.CSSProperties;
}

const Card: React.FC<Props> = ({ children, style }) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #272245 0%, #3B3081 100%)",
        borderRadius: 13,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
