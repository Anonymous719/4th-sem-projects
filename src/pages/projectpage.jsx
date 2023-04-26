import React from "react";
import "./projectpage.css";

import  Topbar from "../component/navBar/topbar";
import ProjectPageCard from "../component/projectPageCard/projectPageCard";

const ProjectPage = () => {

    return (
        <div class = "ProjectPage">
            <Topbar />
            <div class='ProjectPageBlocks'>
                <ProjectPageCard type={"Progress"} />
                <ProjectPageCard type={"ToDo"}/>
                <ProjectPageCard type={"Resources"} />
                <ProjectPageCard type={"Discussion"} />
            </div>
        </div>
    );
}

export default ProjectPage

// class Projectpage extends React.Component {
//     render() {
//         return (
//             <div class = "dashboard">
//                 <Topbar />
//                 <div class='dashboardBlocks'>
//                     {Cards("Progress")}
//                     {Cards("ToDo")}
//                     {Cards("Resources")}
//                     {Cards("Discussion")}
//                 </div>
//             </div>
//         );
//     }
// }

// export  Projectpage };