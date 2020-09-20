import React from 'react';
import './App.css';
import Navbar from './Navbar'
import NavItem from './NavItem';
import {ReactComponent as BellIcon} from './icons/notification.svg'
import {ReactComponent as MessageIcon} from './icons/messenger.svg'
import {ReactComponent as Addicon} from './icons/add.svg'
import {ReactComponent as CaretIcon} from './icons/caret-down.svg'
import DropDownMenu from './DropDownMenu';

function App() {
  return (
    <div className="App">
      <Navbar>
      <NavItem icon={<Addicon/>}/>
        <NavItem icon={<BellIcon/>}/>
        <NavItem icon={<MessageIcon/>}/>
        <NavItem icon={<CaretIcon/>}>
          <DropDownMenu/>
        </NavItem>
        
      </Navbar>
   
    </div>
  );
}




export default App;
