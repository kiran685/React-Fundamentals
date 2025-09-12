function Profile(){
    const name = "mirai"
    const age=19
    const isstudent = true
    return(
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{isstudent===true?"I am a student":"I am not a student"}</p>
            
        </div>
    )
}

export default Profile
