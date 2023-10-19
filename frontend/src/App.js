import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import TeacherDashbord from './pages/TeachersManagement/TeacherDashbord';
import AdminTeacherDashbord from './pages/TeachersManagement/AdminTeacherDashbord';
import AdminStudentDashbord from './components/AdminStudentDashbord';
import StudentDashbord from './components/StudentDashbord';
import AdminDashbord from './components/AdminDashbord';


//Teacher Management
import TeacherProfileView from './pages/TeachersManagement/TeacherProfileView';
import AddTeacher from './pages/TeachersManagement/AddTeacher';
import TeacherTable from './pages/TeachersManagement/TeacherTable';
import LeaveForm from './pages/TeachersManagement/LeaveForm';
import UpdateTeacher from './pages/TeachersManagement/UpdateTeacher';
import LeaveTable from './pages/TeachersManagement/LeaveTable';

//Student Management
import StudentProfileView from './pages/StudentsManagement/StudentProfileView';
import StudentRegisteration from './pages/StudentsManagement/StudentRegisteration';
import StudentUpdate from './pages/StudentsManagement/StudentUpdate';
import StudentTable from './pages/StudentsManagement/StudentTable';
import GenerateStudentReport from './pages/StudentsManagement/GenerateStudentReport';

//Timetable management
import AdminHome from './pages/TimetableManagement/AdminHome/AdminHome'
import Subjects from './pages/TimetableManagement/SubjectManagement/AllSubjects/Subjects'
import AddSubject from './pages/TimetableManagement/SubjectManagement/AddSubject/AddSubject'
import Teachers from './pages/TimetableManagement/Teachers/Teachers'
import AddTeacherJ from './pages/TimetableManagement/Teachers/AddTeacher/AddTeacher'
import AddClass from './pages/TimetableManagement/AddClass/AddClass'
import Classes from './pages/TimetableManagement/Classes/Classes'
import GenerateTimeTable from './pages/TimetableManagement/GenerateTimetable/GenerateTimetable'
import AllClassTimetables from './pages/TimetableManagement/AllClassTimetables'
import AllExamTimetables from './pages/TimetableManagement/AllExamTimetables'
import ClassTimeTable from './pages/TimetableManagement/ClassTimetable'
import ExamTimetable from './pages/TimetableManagement/ExamTimetable'
import TeacherTimeTable from './pages/TimetableManagement/TeacherTimetable'
import AllTeacherTimetables from './pages/TimetableManagement/AllTeacherTimetables'




//class management
import ClassNoticeAdmin from './pages/ClassManagement/ClassNoticeAdmin';
import ClassnoticeFormEdit from './pages/ClassManagement/ClassnoticeFormEdit';
import ClassNotice from './pages/ClassManagement/ClassNotice'
import ALbio from './pages/ClassManagement/ALbio'
import ALmaths from './pages/ClassManagement/ALmaths'
import ALcommerce from './pages/ClassManagement/ALcommerce'
import ALtech from './pages/ClassManagement/ALtech'
import ALarts from './pages/ClassManagement/ALarts'
import ALbioView from './pages/ClassManagement/ALbioView'
import ALmathsView from './pages/ClassManagement/ALmathsView'
import ALcommerceView from './pages/ClassManagement/ALcommerceView'
import ALtechView from './pages/ClassManagement/ALtechView'
import ALartsView from './pages/ClassManagement/ALartsView'


import AddDriverTrns from './pages/TransportManagement/AddDriverTrns';
import AddStudentTrns from './pages/TransportManagement/AddStudentTrns';
import Vehicle from './pages/TransportManagement/Vehicle';
import TrnsStudentLeave from './pages/TransportManagement/TrnsStudentLeave';
import AllDriverTrns from './pages/TransportManagement/AllDriverTrns';
import UptateDriver from './pages/TransportManagement/UptateDriver';
import AllStudentTrns from './pages/TransportManagement/AllStudentTrns';
import UptateStudent from './pages/TransportManagement/UptateStudent';
import AdminTransportDashbord from './components/AdminTransportDashbord';


//AllStudendsTrns
//TrnsStudentLeave

function App() {

  return (
    <Router>
      <div>
        <Navbar/>

        
        

        <Routes>
    
          //components
          <Route  path='/loginpage' element={<LoginPage />} />
          <Route  path='/studentdashbord' element={<StudentDashbord />} />
          <Route  path='/admindashboardstudent' element={<AdminStudentDashbord />} />
          <Route path='/AdminDashbord' element={<AdminDashbord/>} />
          <Route path="/" element={<AdminTeacherDashbord/>} />
          <Route path="/teacher-dashboard" element={<TeacherDashbord />}/>
         
          //Teacher MS
          <Route path="/addteacher" element={<AddTeacher />} />
          <Route exact path="/profile/teacher/:id" element={< TeacherProfileView/>} />
          <Route path="/add-search-teachers" element={< TeacherTable/>} />
          <Route path="/leave-form" element={<LeaveForm />}/>
          <Route path="/updateteacher/teacher/:id" element={<UpdateTeacher />}/>
          <Route path="/leaveTable" element={<LeaveTable />}/>

          //Student MS
          <Route path='/addstudent' element={<StudentRegisteration/>} />
          <Route exact path='/profile/student/:id' element={<StudentProfileView />} />
          <Route  path='/studentlist' element={<StudentTable />} />
          <Route path="/generatereport" element={<GenerateStudentReport />} />
          

          //Timetable Ms
          <Route path="/Subjects" exact element={<Subjects/>} />
          <Route path="/Subjects/Add" exact element={<AddSubject />} />
          <Route path="/teachers" exact element={<Teachers/>} />
          <Route path="/teachers/add" exact element={<AddTeacherJ />} />
          <Route path="/Classes/add" exact element={<AddClass/>} />
          <Route path="/Classes" exact element={<Classes />} />
          <Route path="/AdminHome" exact element={<AdminHome/>} />
          <Route path="/GenerateTimetable" exact element={<GenerateTimeTable />} />
          <Route path="/ClassTimetable/:id" exact element={<ClassTimeTable />} />
          <Route path="/AllClassTimetables" exact element={<AllClassTimetables />} />
          <Route path="/AllExamTimetables" exact element={<AllExamTimetables/>} />
          <Route path="/ExamTimetable/:id" exact element={<ExamTimetable />} />
          <Route path="/TeacherTimetable/:id" exact element={<TeacherTimeTable />} />
          <Route path="/AllTeacherTimetables" exact element={<AllTeacherTimetables/>} />


         //Class Ms
          <Route path="/ClassnoticeFormEdit/:id" element={<ClassnoticeFormEdit/>} />
          <Route path="/ClassNoticeAdmin" element={<ClassNoticeAdmin />} />
          <Route path="/ClassNotice" element={<ClassNotice/>} />
          <Route path="/ALbio" element={<ALbio/>} />
          <Route path="/ALmaths" element={<ALmaths/>} />   
          <Route path="/ALcommerce" element={<ALcommerce/>} />
          <Route path="/ALtech" element={<ALtech/>} />
          <Route path="/ALarts" element={<ALarts/>} />   
          <Route path="/ALbioView" element={<ALbioView/>} />
          <Route path="/ALmathsView" element={<ALmathsView/>} />    
          <Route path="/ALcommerceView" element={<ALcommerceView/>} /> 
          <Route path="/ALtechView" element={<ALtechView/>} /> 
          <Route path="/ALartsView" element={<ALartsView/>} />

          //Trnasport Ms
          <Route path="/AllStudentTrns" element={<AllStudentTrns />} />
          <Route path="/UptateStudent/transportStudent/:id" element={<UptateStudent />} />
          <Route path="/admintransportdashbord" element={<AdminTransportDashbord />} />
          <Route path="/TrnsStudentLeave" element={<TrnsStudentLeave />} />
          <Route path="/AllDriverTrns" element={<AllDriverTrns />} />
          <Route path="/UptateDriver/transportDriver/:id" element={<UptateDriver />} />
          <Route path="/updatestudent/student/:id" element={<StudentUpdate />} />
          <Route path="/addDriver" element={<AddDriverTrns />} />
          <Route path="/addTrnsStudent" element={<AddStudentTrns />} />
          <Route path="/Vehicle" element={<Vehicle />} />
          

          
          
          
         
          
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
