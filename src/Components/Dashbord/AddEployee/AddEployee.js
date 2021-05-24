import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddEployee = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const onSubmit = data => console.log(data);

    const onSubmit = (data, e ) => {
        const eventData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            BOD: data.BOD,
            employeeCode: data.employeeCode,
        };
        console.log(eventData);

        fetch("http://localhost:5000/createEmployee", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(eventData),
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    alert("Emloyee added successfully");
                     e.target.reset()
                }
            });
    };

    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 mt-5  ">
                    <div className="container">
                        <form onSubmit={handleSubmit(onSubmit)} class="shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="form-group">
                                <input
                                    {...register("firstName", {
                                        required: true,
                                    })}
                                    // name="name"
                                    placeholder="First Name"
                                    className="form-control"
                                />
                                {errors.name && (
                                    <span className="text-danger">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    {...register("lastName", {
                                        required: true,
                                    })}
                                    // name="name"
                                    placeholder="Last Name"
                                    className="form-control"
                                />
                                {errors.name && (
                                    <span className="text-danger">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                                    // name="email"
                                    placeholder="Email"
                                    className="form-control"
                                />
                                {errors.email && (
                                    <span className="text-danger">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                    // name="phone"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                {errors.phone && (
                                    <span className="text-danger">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="form-group  mt-3">
                                <input
                                    {...register("BOD", { required: true })}
                                    className="form-control"
                                    // name="age"
                                    placeholder="BOD"
                                    type="date"
                                />
                                {errors.age && (
                                    <span className="text-danger">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="form-group  mt-3">
                                <input
                                    {...register("employeeCode", {
                                        required: true,
                                    })}
                                    className="form-control"
                                    // name="weight"
                                    placeholder="Employee Code"
                                    type="number"
                                />
                                {errors.weight && (
                                    <span className="text-danger">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div class=" form-group d-grid gap-2 d-md-flex justify-content-md-end mt-2" >
                                <button
                                    class="btn btn-dark me-md-2"
                                    type="submit"
                                >
                                  Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddEployee;
