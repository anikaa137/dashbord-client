import React from 'react';
import { useForm } from "react-hook-form";

import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const UpdatingForm = ({ modalIsOpen, closeModal, loadData, render, setRender }) => {
// console.log(loadData)
        const id = loadData._id
    const {
                    register,
                    handleSubmit,

  } = useForm();
    const onSubmit = (data) => {
        const eventData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            BOD: data.BOD,
            employeeCode: data.employeeCode,
            id: id
        };
        closeModal()
        console.log(eventData);

        fetch(`https://pacific-coast-29479.herokuapp.com/updateEmployee/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(eventData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                console.log(render)
                if (data) {

                alert("Emloyee added successfully");
                }
            });
    }
    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2>Updating</h2>

          <form onSubmit={handleSubmit(onSubmit)} class="shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="form-group">
                                <input
                                    {...register("firstName", {
                                        required: true,
                                    })}
                                    // name="name"
                                    defaultValue= {loadData.firstName}
                                    className="form-control"
                                />

                            </div>
                            <div className="form-group mt-3">
                                <input
                                    {...register("lastName", {
                                        required: true,
                                    })}
                                    // name="name"
                                    defaultValue={loadData.lastName}
                                    className="form-control"
                                />

                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    {...register("email", { required: true })}
                                    // name="email"
                                    defaultValue={loadData.email}
                                    className="form-control"
                                />

                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                    // name="phone"
                                    defaultValue= {loadData.password}
                                    className="form-control"
                                />

                            </div>
                            <div className="form-group  mt-3">
                                <input
                                    {...register("BOD", { required: true })}
                                    className="form-control"
                                    // name="age"
                                    defaultValue={loadData.BOD}
                                    type="date"
                                />

                            </div>
                            <div className="form-group  mt-3">
                                <input
                                    {...register("employeeCode", {
                                        required: true,
                                    })}
                                    className="form-control"
                                    // name="weight"
                                    defaultValue={loadData.employeeCode}
                                    type="number"
                                />

                            </div>
                            <div class=" form-group d-grid gap-2 d-md-flex justify-content-md-end mt-2" >
                                <button
                                    class="btn btn-dark me-md-2"
                type="submit"

                                >
                                   UPDATE
                                </button>
                            </div>
                        </form>
        </Modal>

        </div>
    );
};

export default UpdatingForm;