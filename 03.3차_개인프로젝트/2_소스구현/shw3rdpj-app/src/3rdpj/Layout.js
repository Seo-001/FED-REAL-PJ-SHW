// 메인 레이아웃 컴포넌트

import Logo from './Logo';

import './css/layout.css';

import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* 1. 상단영역 */}
      <header className='top'>
        {/* 네비게이션 파트 */}
        <nav className='gnb'>
          <ul>
            <li>
              <Logo />
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/intro'>INTRODUCE</Link>
            </li>
            <li>
              <Link to='/ab'>ABOUT</Link>
            </li>
            <li>
              <Link to='/pt'>PARTNERS</Link>
            </li>
            <li>
              <Link to='/wo'>WORK</Link>
            </li>
            <li>
              <Link to='/nw'>NEWS</Link>
            </li>
            <li>
              <Link to='/sp'>SHOP</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* 2. 메인영역  */}
      <main className='cont'>
        <Outlet />
      </main>

      {/* 3. 하단영역 */}
      <footer className='into'>
        주소 : 서울시 강남구 강남대로 310 유니온센터빌딩 511호 ㈜비스튜디오컴퍼니
        <br />
        전화 : 0507 - 1362 - 0679 <br />
        메일 : master@b-studio.or.kr
        <br />
        COPYRIGHT © 2020 B Studio Company CO., LTD. ALL RIGHTS RESERVED.
        <br />
      </footer>
    </>
  );
};

// 내보내기
export default Layout;
