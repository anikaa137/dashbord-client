import React from 'react';
import EmployeeTable from '../Employee/EmployeeTable';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="row">
                <div className='col-md-2'>
                    <Sidebar/>
                </div>
                <div className="col-md-8">
                     <EmployeeTable/>
                </div>
            </div>
         </section>
    );
};

export default Dashboard;