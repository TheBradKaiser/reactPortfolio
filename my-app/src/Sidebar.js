
import React from 'react';
import './Sidebar.css';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <img className='profilePic' alt = 'pic of brad' src={require('./static/ppic.jpg')}></img>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <a href={item.url}><b>{item.title}</b></a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;