import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

function NewTeacherTimetable() {
    const [date, setDate] = useState()
    const [teacherId, setTeacherId] = useState()
    const [teachers, setTeachers] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        getAllTeachers()
    }, [])

    async function getAllTeachers() {
      axios.get(`http://localhost:8070/teacherJ/`).then((res) => {
        setTeachers(res.data) 
      }).catch((error) => {
        console.log(error)
        alert("Failed to fetch classes")
      })
    }

    function generateTeacherTimeTable(e) {
        e.preventDefault()
        const data = {
            date: dayjs(date).format('DD/MM/YYYY'),
            teacher: teacherId
        }

        axios.post("http://localhost:8070/TeacherTimeTable/add", data).then((result)=>{
            alert("Timetable created")
            navigate(`/TeacherTimeTable/${result.data._id}`)
        }).catch((error) => {
            console.log(error, 'generateteachertimetable')
            alert("Failed to create timetable")
        })
    }
    return (
         <div className='container box mt-5 py-3'>
            <form onSubmit={generateTeacherTimeTable} className='bgColor'>
                <center>
                    <h3 className='white bgT py-3'>Teacher Timetable</h3>
                </center>
                <div className='row my-4'>
                    <div className='col-xl-6'>
                        <div className="form-group px-4">
                            <label for="exampleInputUsername">Date:</label><br/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    className='bgWW'
                                    inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                    fullWidth required
                                    onChange={(newValue) => setDate(newValue)}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="form-group pe-4">
                            <label for="exampleInputPassword1">Teacher</label>
                            <select
                                className="custom-select inputWidth" id="inputGroupSelect01" required
                                onChange={(event) => { setTeacherId(event.target.value) }}
                            >
                                <option disabled>Select teacher</option>
                                {teachers?.map((teacherData) => {
                                    return (
                                        <option value={teacherData._id}>{teacherData.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='pb-3' align='center'>
                    <button type="submit" className=" btn btn-dark">Create Timetable</button>
                </div>
            </form>
        </div>
    )
}

export default NewTeacherTimetable