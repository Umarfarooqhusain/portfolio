import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Umarfarooqhusain/">
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100012803649678">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/umarfarooqhusain/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
