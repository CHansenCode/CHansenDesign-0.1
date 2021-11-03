import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import css from "./Social.module.scss";

import { socialLinks } from "@/config/index";

const Social = () => {
  return (
    <ul className={css.ul}>
      {socialLinks.map((link, i) => (
        <SocialLink key={`${link.title}${i}`} title={link.title} href={link.href} type={link.type} />
      ))}
    </ul>
  );
};

const SocialLink = ({ href, title, type }) => {
  return href.length > 0 ? (
    <Link href={href}>
      <a target="_blank">
        <li>
          <Icon type={type} />
          {title}
        </li>
      </a>
    </Link>
  ) : null;
};

const Icon = ({ type }) => {
  switch (type) {
    case "github":
      return <FaGithub />;
    case "linkedin":
      return <FaLinkedin />;
    case "instagram":
      return <FaInstagram />;
    case "facebook":
      return <FaFacebook />;
    default:
      break;
  }
};

export default Social;
