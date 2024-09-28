import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer text-white flex justify-center">
        <div className="icons flex space-x-4">
          <a href="https://github.com/hweltzien" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/heather-weltzien-92a6072aa/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://stackoverflow.com/users/27515352/user27515352" target="_blank" rel="noopener noreferrer">
            <FaStackOverflow size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
