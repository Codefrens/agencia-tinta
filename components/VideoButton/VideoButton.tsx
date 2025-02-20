import React from "react";
import classNames from "classnames";
import styles from "./VideoButton.module.css";
import { PlayCircle } from "@phosphor-icons/react/dist/ssr";

const VideoButton = ({
  onClick,
  children,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className={classNames(styles.button)}>
      <PlayCircle size={40} weight="fill" />
      {children}
    </button>
  );
};

export default VideoButton;
