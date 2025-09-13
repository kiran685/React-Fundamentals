import "./User.css"


function User({ photoUrl, name, course, rollNo, bloodGroup, dob }) {
    return (
        <div className="student-card">
            <img 
                src={photoUrl} 
                
                className="student-photo"
            />
            <div className="student-details">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Course:</strong> {course}</p>
                <p><strong>Roll No:</strong> {rollNo}</p>
                <p><strong>Blood Group:</strong> {bloodGroup}</p>
                <p><strong>DOB:</strong> {dob}</p>
            </div>
        </div>
    );
}

export default User;
