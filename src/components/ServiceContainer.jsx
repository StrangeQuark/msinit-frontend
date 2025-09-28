import "./css/ServiceContainer.css";
import { FaGithub } from "react-icons/fa";

const ServiceContainer = ({ item, toggleItem }) => {
  const githubURL = "https://github.com/StrangeQuark/"

  const handleGithubClick = (e) => {
    e.stopPropagation(); // prevent triggering toggleItem
    window.open(githubURL + item.repo, "_blank");
  };
  
  return (
    <div
      id="service-container"
      className={`service-container ${item.isSelected ? "isSelected" : ""}`}
      onClick={toggleItem}
    >
      <h1 className={`container-text ${item.isSelected ? "container-text-selected" : ""}`}>{item.name}</h1>

      {/* GitHub Button */}
      {item.repo && (
        <div className="github-button-container" onClick={handleGithubClick}>
          <FaGithub className="github-icon" />
        </div>
      )}
    </div>
  );
};

export default ServiceContainer;
