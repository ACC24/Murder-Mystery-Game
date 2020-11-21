import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Killer = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Wife</DropdownItem>
        <DropdownItem>Cook</DropdownItem>
        <DropdownItem>Butler</DropdownItem>
        <DropdownItem>Groundskeeper</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Killer;