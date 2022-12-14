import React, { FC } from "react";

type Props = {
  textColor: string;
  children: React.ReactNode;
};

const Button: FC<Props> = (props) => {
  return <button style={{ color: props.textColor }}>{props.children}</button>;
};

export default Button;
