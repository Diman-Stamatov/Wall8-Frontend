import React, { useContext, useState } from "react";
import MainHeader from "../components/MainHeader";
import { useAuth } from "../context/AuthContext";



const Profile = () => {
    const { user } = useAuth();
    const [username, setUsername] = useState("");
    const profilePic = "https://i.kym-cdn.com/photos/images/original/002/029/752/c73.jpg"
    const verified = user.data.isVerified;
    
    return(
        <div className="bg-dark-tertiary dark:bg-dark-primary bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0 z-0">
            <MainHeader username={username} setUsername={setUsername} />
            <div className="flex items-center justify-center h-screen ">
            
                <div style={{fontSize:20, textAlign:'center'}} 
                className="border border-dark-primary dark:border-light-tertiary z-10 bg-light-primary dark:bg-dark-primary w-55 px-6 py-2 rounded-md ">                    
                    <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2" style={{fontSize:40, textAlign:'center'}}>Welcome, {user ? user.data.username: "Guest"}.</div>                
                    <img className="col-span-2" style = {{height:160, width:160, display: "block", margin:"auto"}}src={profilePic} alt="ProfilePic" /> 
                    <div style={{textAlign:'left', paddingLeft:40}}>E-mail:</div>
                    <div style={{textAlign:"left"}}>{user.data.email}</div>
                    <div style={{textAlign:'left', paddingLeft:40}}>Phone number:</div>
                    <div style={{textAlign:"left"}}>{user.data.phoneNumber}</div>
                    <div style={{textAlign:'left', paddingLeft:40}}>E-mail:</div>
                    <div style={{textAlign:"left"}}>{user.data.email}</div>
                    <button style={{marginTop:20}} className="col-span-2  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold py-2 px-4 rounded">
                    Update your phone number
                    </button>
                    <button style={{marginBottom:20}} className="col-span-2   dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold py-2 px-4 rounded">
                    Update your e-mail
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
    ); 
};

export default Profile;