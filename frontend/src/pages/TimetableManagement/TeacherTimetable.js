import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TeacherTimeTable() {
  const [timetable, setTimetable] = useState()
  const [classes, setClasses] = useState()
  const { id } = useParams()

  useEffect(() => {
    getAllClasses()
    getTeacherTimeTable()
  }, [])

  async function getAllClasses() {
    try {
      const res = await axios.get('http://localhost:8070/classroom')
      setClasses(res.data)
    } catch (error) {
      console.log(error)
      alert('Failed to fetch classes')
    }
  }

  async function getTeacherTimeTable() {
    try {
      const res = await axios.get(`http://localhost:8070/TeacherTimetable/${id}`)
      setTimetable(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      alert('Failed to fetch timetable')
    }
  }

  function addClass(index, value) {
    const updatedClasses = [...timetable.classes]
    updatedClasses[index] = JSON.parse(value)
    updateTimetable(timetable._id, updatedClasses)
  }

  function removeClass(index) {
    const updatedClasses = [...timetable.classes]
    updatedClasses[index] = { classroom: null }
    updateTimetable(timetable._id, updatedClasses)
  }

  async function updateTimetable(timetableId, updatedClasses) {
    try {
      await axios.put(`http://localhost:8070/TeacherTimetable/${timetableId}`, {
        classes: updatedClasses
      })
      // Optionally, you can update the local state with the updated timetable
      setTimetable((prevTimetable) => ({
        ...prevTimetable,
        classes: updatedClasses
      }))
    } catch (error) {
      console.log(error)
      alert('Failed to update timetable')
    }
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <div>
          <h3 className='tittle1'>{timetable?.teacherJ?.name}</h3>
          <h3 className='tittle1'>{timetable?.teacherJ?.subject} </h3>
        </div>
        <div>
          <p>Start Time: 7.30 am</p>
          <p>End Time: 1.30 pm</p>
        </div>
      </div>
      <table className='table table-dark'>
        <thead className='thead'>
          <tr>
            <th className='thWeight' scope='col'>7.30 - 8.10</th>
            <th className='thWeight' scope='col'>8.10 - 08.50</th>
            <th className='thWeight' scope='col'>08.50 - 09.30</th>
            <th className='thWeight' scope='col'>9.30 - 10.10</th>
            <th className='thWeight' scope='col'>10.10 - 10.50</th>
            <th className='thWeight' scope='col'>10.50 - 11.30</th>
            <th className='thWeight' scope='col'>11.30 - 12.10</th>
            <th className='thWeight' scope='col'>12.10 - 12.50</th>
            <th className='thWeight' scope='col'>12.50 - 1.30</th>
          </tr>
        </thead>
        <tbody>
          <tr className='align-middle'>
            {timetable?.classes.map((classroom, index) => {
              return (
                <td key={index}>
                  {index === 4 ? (
                    <p className='mx-4'>Interval</p>
                  ) : classroom.classroom === null ? (
                    <select
                      className='custom-select'
                      id='inputGroupSelect01'
                      required
                      onChange={(event) => {
                        addClass(index, event.target.value)
                      }}
                    >
                      <option disabled selected>
                        Select a class
                      </option>
                      {classes?.map((classroom) => {
                        return (
                          <option
                            key={classroom._id}
                            value={JSON.stringify({ classroom: classroom?.name })}
                          >
                            {classroom?.name}
                          </option>
                        )
                      })}
                    </select>
                  ) : (
                    <div>
                      <p className=''>{classroom.classroom}</p>
                      <button
                        type='button'
                        className='btn btn-outline-light'
                        onClick={() => {
                          removeClass(index)
                        }}
                      >
                        <i className='fas'>&#xf014;</i>
                      </button>
                    </div>
                  )}
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TeacherTimeTable

       







