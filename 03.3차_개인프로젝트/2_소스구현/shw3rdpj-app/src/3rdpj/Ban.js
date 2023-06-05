// 배너 컴포넌트  Ban.js

// 배너 CSS
import './css/ban.css';
// 배너 데이터
import ban_data from './data/banner';

import $ from 'jquery';

$(() => {
  ///jQB

  // 광클 금지 변수
  let prot = 0;

  // 1. 버튼 클릭시 이동기능 구현
  $('.abtn').click(function () {
    // 0. 광클금지
    if (prot) return;
    prot = 1;
    setTimeout(() => (prot = 0), 400);

    // 1. 버튼 구분하기
    let isB = $(this).is('.rb');
    console.log('오른쪽?', isB);

    // 슬라이드 타겟 설정
    const tg = $(this).siblings('.slider');

    // 2. 분기하여 기능구현하기
    // (1) 오른쪽 버튼 클릭시
    if (isB) {
      tg.animate({ left: '-100%' }, 400, function () {
        // 1번째 li 맨뒤로 보내기!!
        $(this).append($(this).find('li').first()).css({ left: '0' });
      }); /////////animate////////
    } /////////if////////

    // (2) 왼쪽버튼 클릭시 : 왼쪽에서 들어옴
    else {
      tg.prepend(tg.find('li').last()).css({ left: '-100%' }).animate({ left: '0' }, 400);
    } /////////else///////

    // 3. 배너와 일치하는 블릿에 블래스 "on"
    // 대상: .indic li

    $('.indic li').eq(tg.find('li').eq(isB).attr('data-seq')).addClass('on').siblings().removeClass('on');
  }); ///////click//////////
}); ////////////////jQB////////////////

// 반복리스트 코드 생성용 컴포넌트
function MakeList(props) {
  return (
    <li data-seq={props.idx}>
      <img className='banimg' src={props.rec['src']} alt='배너' />
    </li>
  );
} ///////MakeList////////////////

// 배너출력용 컴포넌트

function Ban(props) {
  const sel_data = ban_data[props.cat];

  return (
    <div className='banner'>
      {/* 이동슬라이드 */}
      <ul className='slider'>
        {sel_data.map((x, i) => (
          <MakeList rec={x} key={i} idx={i} />
        ))}
      </ul>
      {
        /* 1초과 일때 나옴 */

        sel_data.length > 1 && (
          <>
            {/* 양쪽이동버튼 */}
            <button className='abtn lb'> ＜ </button>
            <button className='abtn rb'> ＞ </button>

            {/* 블릿 인디케이터 */}
            <ol className='indic'>
              {sel_data.map((x, i) => (
                <li className={i == 0 ? 'on' : ''} key={i}></li>
              ))}
            </ol>
          </>
        )
      }
    </div>
  );
} ///////Ban 컴포넌트///////////

export default Ban;
