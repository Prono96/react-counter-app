import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
  
  console.log('NavBar - rendered');

  return ( 
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar  <span className="badge badge-pill badge-secondary">{totalCounters}</span>  
    </a>
  </div>
</nav>
   );
}
 
export default NavBar;

// class NavBar extends Component {
//   render() { 
//     return (  
//       <nav className="navbar navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       Navbar  <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>  
//       </a>
//   </div>
// </nav>
//     );
//   }
// }
 
// export default NavBar;