import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
  
  const menuList = [
    '첫 구매라면?',
    'SHOP',
    'ABOUT',
    'REVIEW',
    '고객센터',
    '연남스토어 OPEN'
  ];

  const navigate = useNavigate();

  const moveMain = () => {
    if(authenticate) {
      setAuthenticate(true);
      navigate("/");
    } else {
      setAuthenticate(false);
      navigate("/");
    }
  }

  return (
    <div>      
      <div className='nav'>
        <div className='nav-left'>
          {/* Logo */}
          <div className='nav-logo' onClick={() => moveMain()}>
            <img
              width={150}
              src="https://cdn.imweb.me/thumbnail/20230507/c8096191b7323.png" />
          </div>
          {/* Menu */}
          <ul className='menu'>
            {menuList.map((menu, index) => (
              <li>
                <a href='#' key={index}>{menu}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='nav-right'>
          {/* Login */}
          {authenticate ? (
            <div onClick={() => setAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span className='loginout' style={{cursor:'pointer'}}>LOGOUT</span>
            </div>
          ) : (
            <div onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} />
              <span className='loginout' style={{cursor: 'pointer'}}>LOGIN</span>
            </div>
          )}
          <div style={{cursor: 'pointer'}}>JOIN</div>
          <div style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faCartShopping} /></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
