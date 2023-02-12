import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {

  return (
    <div className="box-border bg-white p-4 mb-8">
   <ul className="flex w-32">
  <li className="flex-1">
    <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-purple-600 hover:bg-purple text-white" href="#">Leave</a>
  </li>
</ul>
    </div>
  );
}

export default Header;
