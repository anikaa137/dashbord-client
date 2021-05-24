import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookDead, faCameraRetro, faComment, faEdit, faShoppingCart, faSignOutAlt, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { faFirstOrder, faServicestack } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div class=''>
            <div>
            <div className="side-bar">
        <span className='camera'><FontAwesomeIcon icon={faCameraRetro} /></span>
    <span className='customize mt-5 position-relative'>Unrealistic Photography</span>
     <div className="side-bar-list mt-5">

     </div>
     <div className="side-bar-list mt-5">
         <ul>
         <li>  <span className='mr-3'><FontAwesomeIcon icon= {faShoppingCart} /> </span> <Link to='/dashboard'>Dashboard</Link></li>
                            <li>  <span className='mr-3'><FontAwesomeIcon icon={faUsers} />  </span>   <Link to='/dashboard'>Employee Managment</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUserPlus}/>    </span>     <Link to='/addEpmloyee'>Add Employee</Link></li>

                 <li>  <span className='mr-3'><FontAwesomeIcon icon= {faServicestack}/>  </span>   <Link to='/addService'>System Managment</Link></li>
                 <li>   <span className='mr-3'> <FontAwesomeIcon icon={faEdit}/>    </span>   <Link to='/manageService'>User Managment</Link></li>
                 {/* <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUser}/>    </span>     <Link to='/admin'>Admin</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUser}/>    </span>     <Link to='/addBlog'>Add Blog</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUserPlus}/>    </span>     <Link to='/makeAdmin'>Add Admin</Link></li>
                 <li>  <span className='mr-3'> <FontAwesomeIcon icon={faComment} /></span>  <Link  to='/reviews'>Review</Link></li>

                 <li>  <span className='mr-3'> <FontAwesomeIcon icon={faBookDead} /></span>  <Link to='/userOrder'>My Booking List</Link></li> */}
                 <li >  <span className='mr-3'><FontAwesomeIcon icon= {faSignOutAlt} /> </span> <Link to='/home'>Log Out</Link></li>
         </ul>
     </div>
    </div>
            </div>
        </div>
    );
};

export default Sidebar;