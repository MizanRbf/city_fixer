import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SocialIcon = () => {
  return (
    <div>
      <div className="flex gap-4 text-2xl *:hover:text-primary">
        <a href="https://github.com/MizanRbf">
          <FaGithub />
        </a>
        <a href="https://x.com/MizanRbf">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/mizanrbf/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialIcon;
