import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { logoutUser, getUserProfile } from '../../utils';

const TempSideBar = ({ data }) => {
  const [open, setOpen] = useState([]);
  const [user, setUser] = useState(getUserProfile() ? JSON.parse(getUserProfile()) : null)
  const toggleNavbar = (e) => {
    let current = e.target.getAttribute("data-value");

    if (open.includes(current)) {
      var newOpen = [...open].filter((e) => e !== current);
    } else {
      var newOpen = [...open, current];
    }

    setOpen(newOpen);
  };

  const icons = ['ri-bank-card-2-fill', 'ri-map-pin-user-fill']

  return (
    <>



      <ParentUL className="profile-dash-ul">
        <li className="menu-item ">
          <Link href="/user-auth" ><a className="parant-a" >
            <span className="menu-icon">
              <i className="ri-dashboard-fill"></i>
            </span>
            Dashboard
          </a></Link>
        </li>
        <li className="menu-item ">
          <Link href="/user-auth/profile" ><a className="parant-a" >
            <span className="menu-icon">
             <i className="fas fa-user-circle"></i>
            </span>
            Profile
          </a></Link>
        </li>
      </ParentUL>
      {
        data && data.length > 0 && data.slice(0, 2).map((parent, i) => (
          <ParentUL
            key={i}
            name={parent.name}
            open={open.includes(parent.name) ? true : false}
          >



            <li className="dropdown menu-item ">
              <a className="dropdown-toggle parant-a accordion-button collapsed" onClick={toggleNavbar} type="button" id={parent.name} data-bs-toggle="dropdown" aria-expanded="false">
                {
                  <span className="menu-icon">  <i className={`${icons[i]}`} /></span>
                }
                {parent.name}
              </a>
              <ChildUL className="dropdown-menu submenuUl" aria-labelledby={parent.name}>
                {parent && parent.product.map((child, i) => (
                  <ChildLI key={i} ><Link className="dropdown-item" href={`/user-auth/products/${child.page_id}`}>{child.name}</Link></ChildLI>
                ))}

              </ChildUL>
            </li>


            {/* <span className="menu-icon">
              <i className="ri-dashboard-fill"></i>
            </span> */}
            {/* <li className="menu-item ">
              <a className="parant-a" onClick={toggleNavbar} data-value={parent.name}>
                {
                  <span className="menu-icon">  <i className={`${icons[i]}`} /></span>
                }
                {parent.name}
              </a>

              <ChildUL className="submenuUl">
                {parent && parent.product.map((child, i) => (
                  <ChildLI key={i} ><Link className="text-decoration-none text-dark fw-bold" href={`/user-auth/products/${child.page_id}`}>{child.name}</Link></ChildLI>
                ))}
              </ChildUL>
            </li> */}
          </ParentUL>
          
        ))
      }
      <span onClick={logoutUser} className="sidebar-logout">  <a className="dropdown-item py-2"><i className="far fa-arrow-alt-circle-left"></i>Logout</a> </span>
    </>
  )



};

export default TempSideBar;

const ParentUL = styled.ul`
  /* your existing css should go here */

  /* if the parent's name is in 'open' hook, then show its children*/
  & ul li {
    display: ${(props) => (props.open ? "block" : "none")};
  }
  
`;

const ParentButton = styled.button`
  // width: 200px;
  background: none;
  border: none;

  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  transition: color 0.3s;
}
`;

const ChildUL = styled.ul`
  /* your existing css should go here */
`;

const ChildLI = styled.li`
  /* your existing css should go here */
  color:black;
`;

const ChildLink = styled.a`
color:black;
`




