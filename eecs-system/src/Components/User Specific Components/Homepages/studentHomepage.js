import StudentNavbar from "../Navbar/studentNavbar";
import TopNavbar from "../Navbar/topNavbar"

function StudentHomepage() {
  return (
    <div>
      <TopNavbar/>
      <div id="container">
      <StudentNavbar/> 
      </div>
    </div>  
  );
}

export default StudentHomepage;
