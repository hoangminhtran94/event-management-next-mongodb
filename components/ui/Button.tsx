import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

const Button = ({
  link,
  children,
  onClick,
}: {
  link?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}) => {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
