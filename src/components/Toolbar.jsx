import "./css/Toolbar.css";
import { FaGithub } from "react-icons/fa";

const Toolbar = () => {
    const githubURL = "https://github.com/StrangeQuark/"

    const handleGithubClick = () => {
        window.open(githubURL, "_blank");
    };

    return (
        <div id="toolbar" className="toolbar">
            {/* Left Section: Image and Website Name */}
            <div className="toolbar-left">
                <h1 className="toolbar-logo">Microservice Initializer</h1>
            </div>

            {/* Right Section: GH link */}
            <div className="toolbar-right">
                <FaGithub className="large-github-icon" onClick={handleGithubClick}/>
            </div>
        </div>
    );
};

export default Toolbar;
