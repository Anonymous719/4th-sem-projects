import React from 'react';
import './profilePage.css';
import Topbar from '../component/navBar/topbar.js';
import Skillbox from '../component/skillbox/skillbox.js';
import { alphanumericToNumber, selectHobbies } from './otherfunctions'
import profilePic_1 from "../Images/CardProfilePic_1.png";
import profilePic_2 from "../Images/CardProfilePic_2.png";
import profilePic_3 from "../Images/CardProfilePic_3.png";
import profilePic_4 from "../Images/CardProfilePic_4.png";
import profilePic_5 from "../Images/CardProfilePic_5.png";
import profilePic_6 from "../Images/CardProfilePic_6.png";
import { GetToken } from "../GlobalVariable";

const ProfilePage = () => {

    const token = GetToken();
    const seed = alphanumericToNumber(token);
    var pic = profilePic_1;
    const pic_selector = (seed % 6 + 1)
    switch (pic_selector) {
        case 1:
            pic = profilePic_1;
            break;
        case 2:
            pic = profilePic_2;
            break;
        case 3:
            pic = profilePic_3;
            break;
        case 4:
            pic = profilePic_4;
            break;
        case 5:
            pic = profilePic_5;
            break;
        default:
            pic = profilePic_6;
    }

    

    return (
        <div>

            <Topbar />
            <div className='allpageprofile'>
                <div className="profile-page">
                    <div className="profile-info">
                        <img src={pic} alt="Profile" />
                        <h2>John Doe</h2>
                        <p>Email: john.doe@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                </div>
                <div className='other-details'>
                    <div classname='skills'>
                        <h1 id='aboutmeprofile'>About Me </h1>
                        <div className='skilllist'>
                            <br />
                            <br />
                            <p>John is a highly skilled software engineer with a passion for developing innovative
                                and user-friendly software solutions.
                                With years of experience in the industry, John has developed a deep understanding of
                                software development principles and
                                techniques. He is a natural problem solver and is always eager to take on new challenges.
                                John's strong communication skills and ability to work collaboratively make him an
                                invaluable asset to any development team.
                                When not coding, John enjoys spending time with his family and exploring the great outdoors.</p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <div classname='skills'>
                        <h1>Interest</h1>
                        <div className='skilllist'>
                            {Skillbox(selectHobbies(5, seed).slice(0, 1))}
                            {Skillbox(selectHobbies(5, seed).slice(1, 2))}
                            {Skillbox(selectHobbies(5, seed).slice(2, 3))}
                            {Skillbox(selectHobbies(5, seed).slice(3, 4))}
                            {Skillbox(selectHobbies(5, seed).slice(4, 5))}
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <div classname='skills'>
                        <h1>Skills</h1>
                        <div className='skilllist'>
                            {Skillbox('C++')}
                            {Skillbox('Python')}
                            {Skillbox('JavaScript')}
                            {Skillbox('React')}
                            {Skillbox('Design')}
                        </div>
                    </div>
                </div>
            </div>
            <div className='projectprogress'>
                <h1></h1>

            </div>
        </div>
    );
}

export default ProfilePage;
