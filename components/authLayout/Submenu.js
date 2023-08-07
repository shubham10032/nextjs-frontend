import React, { useState } from "react";
import styled from "styled-components";
const NavBarData = [
  {
    name: "Profile",
    href: "",
    children: []
  },
  {
    name: "Messages",
    href: "",
    children: []
  },
  {
    name: "Settings",
    href: "",
    children: [
      {
        name: "Account"
      },
      {
        name: "Profile"
      },
      {
        name: "Security"
      }
    ]
  },
  {
    name: "Help",
    href: "",
    children: [
      {
        name: "FAQs"
      },
      {
        name: "Submit a Ticket"
      }
    ]
  },
  {
    name: "Logout",
    href: "",
    children: []
  }
];

const TempSideBar = () => {
  const [open, setOpen] = useState([]);

  const toggleNavbar = (e) => {
    // this function will get the parent nav's name from its data-value attribute
    // then it checks if open has the parent in the array; if so, it is deleted
    // else it is added

    // each individaul parentUL will receive the open hook
    // and if its name is in the open var, it will dynamically show or hide its children

    let current = e.target.getAttribute("data-value");

    if (open.includes(current)) {
      var newOpen = [...open].filter((e) => e !== current);
    } else {
      var newOpen = [...open, current];
    }

    setOpen(newOpen);
  };


  const NavItems = ({ data }) =>
    data.map((parent, i) => (
      <ParentUL
        key={i}
        name={parent.name}
        open={open.includes(parent.name) ? true : false}
      >
        <ParentButton onClick={toggleNavbar} data-value={parent.name}>
          {parent.name}
        </ParentButton>
        <ChildUL>
          {parent.children.map((child, i) => (
            <ChildLI key={i}>{child.name}</ChildLI>
          ))}
        </ChildUL>
      </ParentUL>
    ));

  return <NavItems data={NavBarData} />;
};

export default TempSideBar;

const ParentUL = styled.ul`
  /* your existing css should go here */

  /* if the parent's name is in 'open' hook, then show its children*/
  & ul li {
    display: ${(props) => (props.open ? "block" : "none")};
  }
  & button {
    background: ${(props) => (props.open ? "red" : "yellow")};
  }
`;

const ParentButton = styled.button`
  width: 200px;
`;

const ChildUL = styled.ul`
  /* your existing css should go here */
`;

const ChildLI = styled.li`
  /* your existing css should go here */
`;





