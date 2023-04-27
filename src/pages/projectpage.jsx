import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import "./projectpage.css";

import  Topbar from "../component/navBar/topbar";
import ProjectPageCard from "../component/projectPageCard/projectPageCard";

const ProjectPage = () => {
    const location = useLocation();
    const [id, setId] = useState(null);
  
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const id = searchParams.get('id');
      setId(id);
      console.log(id)
    }, [location.search])
    return (
        <div class = "ProjectPage">
    

            <Topbar />
            <div class='ProjectPageBlocks'>
                <ProjectPageCard  projectid={id} type={"Progress"} />
                <ProjectPageCard  projectid={id} type={"ToDo"}/>
                <ProjectPageCard  projectid={id} type={"Resources"} />
                <ProjectPageCard  projectid={id} type={"Discussion"} />
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