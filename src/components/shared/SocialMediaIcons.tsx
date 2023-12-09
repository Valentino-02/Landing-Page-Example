import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center my-10 md:justify-start gap-7">
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.spotify.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaSpotify />
      </a>
    </div>
  );
}
