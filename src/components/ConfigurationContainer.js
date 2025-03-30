import React from "react";
import "./css/ConfigurationContainer.css";

const ConfigurationContainer = ({projectUtil}) => {
    const handleGroupInputChange = (e) => {
        const newValue = e.target.value
        const isValid = /^[a-zA-Z]+(\.[a-zA-Z]+)*$/.test(newValue)
      
        if (isValid || newValue === '') {
          projectUtil.setProjectGroup(newValue)
        }
      }

      const handleNameInputChange = (e) => {
        const newValue = e.target.value
        const isValidFilename = /^[^<>:"/\\|?*]+$/.test(newValue); // Valid filename characters check
      
        if (isValidFilename || newValue === '') {
          projectUtil.setProjectName(newValue)
        }
      }
    
    return(
        <div id="configurationContainer" className="configurationContainer">
            <div id="top-config-div" className="topConfigDiv">
              <h2>Java version</h2>
              
              <label>
                  21<input type="radio" name="javaVersion" value="21" onChange={(e) => projectUtil.setJavaVersion(e.target.value)} checked={projectUtil.javaVersion === '21'} />
              </label>
              <label>
                  17<input type="radio" name="javaVersion" value="17" onChange={(e) => projectUtil.setJavaVersion(e.target.value)} checked={projectUtil.javaVersion === '17'}/>
              </label>
            </div>

            <div id="middle-config-div" className="middleConfigDiv">
              <h2>Operating System</h2>
              
              <label>
                  Linux<input type="radio" name="OS" value="linux" onChange={(e) => projectUtil.setOS(e.target.value)} checked={projectUtil.OS === 'linux'} />
              </label>
              <label>
                  Windows<input type="radio" name="OS" value="windows" onChange={(e) => projectUtil.setOS(e.target.value)} checked={projectUtil.OS === 'windows'}/>
              </label>
            </div>

            <div id="bottom-config-div" className="bottomConfigDiv">
              <h2>Metadata</h2>

              <label>Project name:</label>
              <input value={projectUtil.projectName} spellCheck="false" onInput={handleNameInputChange} />

              <label>Project group:</label>
              <input value={projectUtil.projectGroup} spellCheck="false" onInput={handleGroupInputChange}/>
            </div>
        </div>
    )
}

export default ConfigurationContainer;