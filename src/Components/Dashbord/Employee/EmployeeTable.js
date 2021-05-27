import React, { useEffect, useState } from 'react';
import UpdatingForm from '../../UpdatingForm/UpdatingForm';



const EmployeeTable = () => {
    const [employees, setEmployees] = useState([])
    const [render, setRender] = useState(1); /// delete state

  useEffect(() => {
    fetch('https://pacific-coast-29479.herokuapp.com/employees')
      .then(res => res.json())
    .then(data=> setEmployees(data))
  },[render])


    // console.log(employees)

    const [loadData, setLoadData] = useState({})

    function deleteEmployee(id) {
        console.log(id);
        fetch(`https://pacific-coast-29479.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {

                if (result) {
                alert('Delete a employee')
                setRender(render + 1)
            }
            });
    }

    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal(id) {
        console.log(id)
        fetch(`https://pacific-coast-29479.herokuapp.com/employee/${id}`)
        .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(loadData)
                setLoadData(data)
                console.log(loadData)

            })
            setIsOpen(true);
    }


    function closeModal(){
        setIsOpen(false);
        // setLoadData('')
        setRender(render + 1)
    }
    return (
        <div>
            <h1 class="text-center"> Employee Table</h1>
             <table class="table table-striped table-hover text-center mt-5"   >
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">First Name</th>
            <th className="text-secondary" scope="col">Last Name</th>
            <th className="text-secondary" scope="col">Email</th>
            <th className="text-secondary" scope="col">Password</th>
            <th className="text-secondary" scope="col">BOD</th>
            <th className="text-secondary" scope="col">Employee Code</th>
            <th className="text-secondary" scope="col">Action</th>

            </tr>
        </thead>
        <tbody>
            {
              employees.map((appointment, index) =>

                <tr>
                    <td>{index + 1}</td>
                    <td>{appointment.firstName}</td>
                    <td>{appointment.lastName}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.password}</td>
                    <td>{appointment.BOD}</td>
                    <td>{appointment.employeeCode}</td>
                      <td>
                    <div class="btn-group btn-group-lg" role="group" aria-label="...">
                    <button type="button" onClick={()=>openModal(appointment._id)} class="btn btn-outline-dark me-5">Edit</button>
                    <button type="button" onClick={()=>deleteEmployee(appointment._id)} class="btn btn-outline-dark">Delite</button>
                    <UpdatingForm modalIsOpen={modalIsOpen} render={render} setRender={setRender} loadData={loadData} closeModal={closeModal}></UpdatingForm>
                    </div>
                    </td>

                </tr>
                )
            }
        </tbody>
    </table>
        </div>
    );
};

export default EmployeeTable;
