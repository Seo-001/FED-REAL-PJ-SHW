// main.js

// 모바일 800px 보다 작아질때 사용하는 함수

let mob = 0;
chkWid();
function chkWid() {
    if (window.innerWidth <= 800) mob = 1;
    else mob = 0;
    console.log("모바일:", mob);
} ///// chkWid함수 /////////////

window.addEventListener("resize", chkWid);

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);
function loadFn() {
    console.log("로딩완료!");

    startSS();

    //////////////////////////////
    /****************************** 
        상단 네비 햄버거
    ******************************/
    //////////////////////////////
    // 대상선정
    const ham = document.querySelector(".ham");
    ham.onclick = chgMenu;

    function chgMenu() {
        // 모바일이 아니면 리턴!
        if (!mob) return;
        let tg = document.querySelector(".top");
        tg.classList.toggle("on");
        let isGnb = tg.classList.contains("on");
        console.log("isGnb:", isGnb);
        if (isGnb) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
    }

    /* 햄버거 클릭시 on 제거  */
    const gnba = document.querySelectorAll(".gnb a");
    gnba.forEach((ele) => {
        ele.onclick = () => {
            ham.click();
        }; ///////////click/////////////
    }); /////forEach/////////////

    /******************************
                GNB 메뉴 오버시 움직이는 배경
    ******************************/
    // 1. 대상선정
    // (1). 이벤트대상: .gnb li
    const gnb = document.querySelectorAll(".gnb li");

    // (2) 변경대상: .mbg
    // 포지션 앱솔루트
    const topmv = document.querySelector(".mvbx");
    // console.log(mbg);
    //2.이벤트 설정하기 : mouseenter 이벤트
    gnb.forEach((ele) => {
        ele.onmouseenter = (e) => {
            // 1. 요소정보알아내기
            //(1) left 위치값
            let eLeft = ele.offsetLeft;
            // (2) width값
            let eWidth = ele.offsetWidth;

            /* [ offsetTop / offsetLeft] 
    -> 내가 사용하고 있는 필드, 
    -> 부모자격요소를 기준한 위치값  ul
    -> 제이쿼리 position()과 같음
    
        2. offsetX, offsetY
    -> 이벤트 기준 박스 
    -> 이벤트 대상이 기준
    -> 이벤트가 걸려있는 박스가 이벤트 대상 
    
  
    

 */

            // 대상 요소의 위치값은 nav.gnb 요소가
            // relative를 가진 요소를 기준한 offset 정보임!
            //확인
            // console.log("left:", eLeft, "\nwidth:", eWidth);

            // 2. 움직이는 배경박스 변경하기
            topmv.style.left = eLeft + "px";
            topmv.style.width = eWidth + "px";
            topmv.style.opacity = 1;
        }; ////mouseenter/////

        // 마우스가 나갈 떄 투명도 0으로 사라짐
        ele.onmouseleave = (e) => {
            //변경대상 : .mbg -> mbg변수
            // 변경내용: opacity -> 0
            topmv.style.opacity = 0;
        }; ///////////mouseleave//////////////
    }); ///////forEach//////////////

    //////////////////////////
    /***************************
            첫 화면 배너 
  ***************************/
    /////////////////////////

    // 슬라이드 이동함수 전역화!
    let goSlide;
    // const goSlide 는 할당없이 쓸 수 없다.
    /****************************************** 
        함수명: loadFn
        기능: 로딩 후 버튼 이벤트 및 기능구현
    ******************************************/

    // 1. 대상선정//////////////////////////////

    // 1-1. 이벤트 대상: .abtn
    const abtn = document.querySelectorAll(".abtn");

    // 1-2. 변경 대상: #slide
    const slide = document.querySelector("#slide");

    // 1-3. 블릿 대상: .indic li
    const indic = document.querySelectorAll(".indic li");
    //console.log(indic);

    // 1-4.  슬라이드 li리스트
    let slist = document.querySelectorAll("#slide>li");

    // [드래그 대상 (#slide) 드래그 적용 함수 호출하기!]
    goDrag(slide);

    // let 으로 해서 나중에 덮어쓰기 하기 위해서

    // [초기화1 - 순번붙이기 ]/////////////////
    // 잘라내기로 li순번이 뒤섞이므로 블릿변경 매칭을 위한
    // 고유순번을 사용자정의 속성(data-)으로 만들어준다!
    slist.forEach((ele, idx) => {
        // data-seq 라는 사용자정의 속성 넣기
        ele.setAttribute("data-seq", idx);
    }); ////// forEach /////////////////

    /* 
    .setAttritbe( ) : 선택한 요소(element)의 속성(attribute) 값 을 정합니다.

            문법
    element.setAttribute(name, value);
    - name : 속성 이름 

    - value : 속성 값
    
    */

    // [ 초기화2 - 맨뒤 요소 맨앞으로 이동 2번하기! ]
    // 맨뒤 맨앞이동 함수 만들기
    const chgSeq = () => {
        slist = document.querySelectorAll("#slide>li");
        // 맨뒤 맨앞이동하기 -> 변경대상 : #slide -> slide변수
        // 부모노드.insertBefore(삽입 할 노드, 기준 점 노드);
        slide.insertBefore(slist[slist.length - 1], slist[0]);
    }; ////////chgSeq 함수////////

    /* ****************************************

appendChild()
자식 노드의 마지막에 노드가 삽입된다.


    insertBefore()
부모노드의 기준 점 노드 앞에 삽입 할 노드를 삽입합니다.
내가 원하는 위치에 삽입 할 수 있습니다.
문법
부모노드.insertBefore(삽입 할 노드, 기준 점 노드);
기존 부모 노드에서도 굳이 삭제 할 필요 없이 자동으로 이동하게 됩니다.
ex) 부모노드 1번에 위치하고 있을 때, 3번으로 옮기고 싶을 때 삭제하고 옮기지 않아도 됩니다.
 
노드는 자동적으로 기존 노드에서 삭제되고, 새로운 부모 밑에 삽입됩니다
기준 점 노드를 null로 하게 되면, 자식 노드의 끝에 삽입 됩니다.


insertBefore()
insertBefore()는 appendChild()와 비슷하지만, 전달인자가 두 개라는 점이 다르다. 
첫 번째 전달인자는 삽입하려는 노드고 두 번째 전달인자는 삽입 기준이 되는 노드로,
 새 노드는 이 앞에 놓는다. 
 이 메서드는 삽입할 노드의 부모 객체가 될 노드에서 샐행된다. 
 그리고 두 번째 전달인자는 이 부모 노드의 자식 노드여야 한다. 
 두 번째 인자가 null이면, insertBefore()는 appendChild()처럼 작동하여 자식 노드의 끝에 삽입한다.


    https://iamawebdeveloper.tistory.com/62
    
    ******************************************/

    // 2번 맨뒤 맨앞이동 함수 호출하기!!
    /* 질문  for문을 없애면 왜 순서가 믹스가 되는가?
    왜 맨 마지막 사진이 첫번째가 가는가? 
    */

    for (let i = 0; i < 2; i++) chgSeq();

    // 참고
    // for문은 for문 안에서만 의미를 가진다.
    // 2번 함수호출한 것을 의미한다.
    // 배열 [0, 1, 2, 3]
    // 1번째  호출하면 배열 3번째가 0번째로 이동
    // 2번째 호출하면 배열 2번째가 0번째, 배열 3번째는 1번째로 밀려남
    // 배열1번째를 처음으로 쓰기 위해 사용

    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    // 2. 슬라이드 변경함수 만들기
    // 호출시 seq에 들어오는 값중 1은 오른쪽, 0은 왼쪽
    // 매개변수 seq 는 함수내의 지역변수이다.
    // const goSlide 는 loadFn의 지역이기 때문에 전역화를 해주어야 한다.  그래서 const 삭제
    goSlide = (seq) => {
        //  console.log("슬고우!", seq);

        //  console.log("못들어갔어!!!!");

        // 광클금지 설정하기 //////
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

        //  console.log("나,들어왔어!!!");

        // 0. 현재의 슬라이드 li수집하기
        let clist = slide.querySelectorAll("li");
        // clist -> current list 현재 리스트

        // 1. 방향에 따른 분기
        // 1-1. 오른쪽버튼 클릭시 ////////////////
        if (seq) {
            //  console.log("오른!");

            // 1. 슬라이드 이동전 먼저 잘라낸다!
            // 이유: 슬라이드 순서를 왼쪽이동과 동일하게 함!
            // 중앙확대 트랜지션 적용시 동작이 달라지므로!

            // (1-1) 바깥에 나가있는 첫번째 슬라이드
            //       li를 잘라서 맨뒤로 보낸다!
            slide.appendChild(clist[0]);

            /* 
            appendChild() : 
           appendChild() 메소드는 새로운 노드를 해당 노드의 자식 노드 리스트(child node list)의 맨 마지막에 추가합니다.
           Node.appendChild() 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다. 
           만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 
           appendChild() 메소드는 노드를 현재 위치에서 새로운 위치로 이동시킵니다
            
            */
            // (1-2) 동시에 left값을 -100%으로 변경한다!
            slide.style.left = "-100%";
            // (1-3) 트랜지션 없애기!
            slide.style.transition = "none";

            // (2) 오른쪽 버튼 클릭시 다음 슬라이드가
            //     나타나도록 슬라이드 박스의 left값을
            //     -220%로 변경시킨다.

            // [코드분리하기!] //////////////////////////
            // -> 같은속성변경을 같은 메모리공간에서 수행하면
            // 변경효과가 없음!!!
            setTimeout(() => {
                slide.style.left = "-200%";
                slide.style.transition = "left .4s ease-out";
            }, 1); //// 타임아웃 //////
        } //////////// if : 오른쪽클릭시 //////

        // 1-2. 왼쪽버튼 클릭시 //////////////
        else {
            //  console.log("왼쪽!");

            // (1) 왼쪽버튼 클릭시 이전 슬라이드가
            // 나타나도록 하기위해 우선 맨뒤 li를
            // 맨앞으로 이동한다.
            // slide.insertBefore(넣을놈,넣을놈전놈)
            // slide.insertBefore(맨끝li,맨앞li)
            slide.insertBefore(clist[clist.length - 1], clist[0]);

            // (2) 동시에 left값을 -330%로 변경한다.
            slide.style.left = "-300%";
            // 이때 트랜지션을 없앤다(한번실행후 부터 생기므로!)
            slide.style.transition = "none";

            // (3) 그 후 left값을 -220%으로 애니메이션하여

            setTimeout(() => {
                slide.style.left = "-200%";
                slide.style.transition = "left .4s ease-out";
                // ease-in-out 하면 부자연스럽다
                // 마우스 드래그 하는 속도로 가야 자연스럽다.
            }, 0); ////// 타임아웃 /////////
            //시간에 0을 쓰면 인터발 호출시 트랜지션이 안먹히는 에러가 있음
            //1만써도 괜찮음
        } //////////// else : 왼쪽클릭시 //////

        // 2. 현재 슬라이드 순번과 같은 블릿표시하기

        clist = slide.querySelectorAll("li");
        // !!!!!!!!!!!오른쪽이든 왼쪽이든 먼저 잘라내기 때문에
        // !!!!!!!!!!!순번은 3번째로 일치함!

        // 3번째가 주인공이라서 [2] 이다.
        // 2-2.방향별 읽어올 슬라이드 순번으로 "data-seq"값 읽어오기
        //세번째 슬라이드가 주인공이니깐, 0,1,2,
        let cseq = clist[2].getAttribute("data-seq");
        //console.log('현재순번:', cseq);

        // 2-3. 블릿초기화
        for (let x of indic) x.classList.remove("on");

        // 2-4. 읽어온 슬라이드 순번의 블릿에 클래스 "on"넣기
        indic[cseq].classList.add("on");
    }; ////////// goSlide함수 ///////////

    // 3. 이동버튼대상에 이벤트 설정하기
    abtn.forEach((ele, idx) => {
        ele.onclick = () => {
            // 0. 기본이동막기
            event.preventDefault();
            // 1. 인터발지우기함수 호출!
            // clearAuto();
            // 2. 슬라이드 함수 호출!
            goSlide(idx);
        }; ///// click함수 //////
    }); /////// forEach //////////

    // 인터발함수 지우기위한 변수
    let autoI;
    // 타임아웃함수 지우기위한 변수
    let autoT;

    /************************************ 
            함수명: autoSlide
            기능: 인터발함수로 슬라이드함수 호출
        ************************************/
    function autoSlide() {
        //console.log('인터발시작!');
        // 인터발함수로 슬라이드함수 호출하기
        autoI = setInterval(() => goSlide(1), 3000);
    } ////////////// autoSlide함수 //////////

    // 자동넘김 최초호출!
    // autoSlide();

    /************************************ 
            함수명: clearAuto
            기능: 인터발함수를 지우고 다시셋팅
       ************************************/
    function clearAuto() {
        //console.log('인터발멈춤!');
        // 1. 인터발 지우기
        clearInterval(autoI);

        // 2. 타임아웃도 지우지 않으면
        // 쌓여서 타임아웃 쓰나미실행이 발생한다!
        clearTimeout(autoT);

        // 3. 잠시후 다시 작동하도록 타임아웃으로
        // 인터발함수를 호출한다!
        // 5초후(인터발은 3초후, 토탈 8초후 작동시작)
        autoT = setTimeout(autoSlide, 5000);
    } ///////// clearAuto 함수 /////////////

    /************************************************************************************* 
                    [드래그 다중 적용 함수 만들기]
                    함수명: goDrag
                    기능: 다중 드래그 기능 적용
                    태그가 나타나면서 바로 이벤트 적용 안해도 되니깐. 
                    로드구역을 위로 올림 
                    
     *************************************************************************************/

    function goDrag(obj) {
        // obj - 드래그 대상(슬라이드 요소)
        // 변수만들기/////////////////////
        //(1) 드래그 상태변수 // true-드래그중,  false-드래그아님
        let drag = false;
        // (2) 첫번째 위치 포인트 first x, first y
        let fx, fy;
        // (3) 마지막 위치포인트  last x, last y
        // offsetLeft 현재 왼쪽
        // 슬라이드 처음 left 값 세팅
        let lx = obj.offsetLeft,
            ly = 0;

        /*   let lx, ly;  */
        // 마지막위치는 처음에 0 할당, 0부터 출발하니깐, 랠러티브는 원래 0 이기도 한다.
        // 3.  x,y 움직인 위치값을 타겟요소에 적용 ! 여기에서
        //여기서 0으로 해야 나중에 if 문 안적어도 된다.
        // rx + lx + "px"; 처음부터 더햇기 때문에 기준0  이 있어야 한다.
        // (4) 움직일 때 위치 포인트 move x, move y
        let mvx, mvy;
        // (5) 위치이동 차이 결과 변수 result x, result y
        let rx, ry;

        // 함수만들기 ///////////////////
        // (1) 드래그 상태 true
        const dTrue = () => (drag = true);
        // (2) 드래그 상태 false
        const dFalse = () => (drag = false);
        // (3) 드래그 움질일때 작동함수
        const dMove = () => {
            //console.log('드래그상태:', drag);

            // 드래그 상태일 때만 실행
            if (drag) {
                // 드래그 상태 true 이어야 움직인다.
                console.log("드래그중~");

                // 트랜지션 없애기
                obj.style.transition = "none";

                // 1.드래그 상태에서 움직일 때 위치값 :mvx, mvy
                // 나중에 이벤트를 통해 함수를 호출을 할 것이라서,event 적음

                // 모바일 상태값을 설정하는 것이 더 복잡
                mvx = event.pageX || changedTouches[0].pageX;

                console.log(event.changedTouches);

                // 2. 움직일 때 위치값 - 처음 위치값 : rx, ry
                // x 축 값은 left값, y축 값은 top 값 이동이다.!
                rx = mvx - fx;
                // ry = mvy - fy;
                // 드래그를 한 순간 rx, ry 까지는 값이 나온다.

                // 3.  x,y 움직인 위치값을 타겟요소에 적용 !
                // 만약 위에서 let lx, ly;  해버리면 여기에서 lx가 undefined 가 되서 안움직인다.
                obj.style.left = rx + lx + "px";
                // obj.style.top = ry + ly + 'px';
            } //////if: 드래그 일때 ////////////
        }; ///////// dMove //////////////

        // (4) 첫번째 위치포인트 셋팅함수
        const firstPoint = () => {
            fx = event.pageX || changedTouches[0].pageX;
            // 변수 = 할당값1 || 할당값2;
            // -> undefined / null 값이 아닌 값으로 할당된다.!
            // -> 우선순위로 DT 쪽을 먼저 써준다.!
            // fy = event.pageY;
        };

        // (5) 마지막 위치포인트 셋팅함수
        const lastPoint = () => {
            lx += rx;
            ly += ry;
        };

        // (1) 마우스 내렸을 때 : 드래그 true, + 첫번째 위치값 업데이트
        obj.addEventListener("mousedown", () => {
            dTrue();
            firstPoint();
        });

        // 제이쿼리에서는 여러개 가능하나 이벤트 리스터에서는 1개씨 가능
        // 모바일: touchstart
        obj.addEventListener("touchstart", () => {
            dTrue();
            firstPoint();
            console.log("터치시작");
        });
        // (2) 마우스 올라올 때 : 드래그 false + 마지막 위치값 업데이트
        obj.addEventListener("mouseup", () => {
            dFalse();

            gowhere(obj);
        });

        obj.addEventListener("touchend", () => {
            dFalse();

            gowhere(obj);
            console.log("터치끝");
        });
        // (3) 마우스 움직일 때
        // 이벤트 등록하는 것에 함수는 1개 있다.

        obj.addEventListener("mousemove", dMove);

        // 모바일 : touchmove
        obj.addEventListener("touchmove", dMove);
        // (4) 마우스 벗어날 떄
        obj.addEventListener("mouseleave", dFalse);

        /// 화면크기를 변경할 경우 발생하는 이벤트 -> resize
        // 이 이벤트를 이용하여 필요한 경우 코드를 실행한다.!!
        // 대상: window
        window.addEventListener("resize", () => {
            // 화면크기 변경시 lx값 업데이트 하기!
            lx = -obj.parentElement.clientWidth * 2.2;
            // 마지막 위치값이 슬라이드 부모박스가 -220% 이므로 이것을 업데이트 해준다!
            // 이때 앞에 마이너스(-) 중요!!
            // 마이너스 안주면 튄다
            // console.log("업데이트lx:", lx);
        }); ////////resize////////////
    } ///////////////goDrag 함수//////////////////

    /********************************* 
    함수명: gowhere
    기능: 드래그시 왼쪽/ 오른쪽 이동 판별
    호출: 드래스시 mouseup 이벤트 함수에서 호출 
    *********************************/
    function gowhere(obj) {
        // obj- 드래그 대상(슬라이드 요소)
        //1. 현재 드래그 대상 left 위치값
        let tgLeft = obj.offsetLeft;

        // 2. 부모박스를 기준한 -220% left 위치값 구하기
        let tgPoint = obj.parentElement.clientWidth * 2.2;
        console.log("현재left:", tgLeft);
        console.log("기준left:", -tgPoint);
        // -라서 - 마이너스 넣음

        // 3. 방향 판별하기 : 기준값에 특정값을 더하고 뺌
        //3-1. 왼쪽 방향 이동 (오른쪽 버튼 과 동일)
        if (tgLeft < -tgPoint - 50) {
            console.log("왼쪽으로!");
            // 이동함수 호출!(전달값1)
            goSlide(1);
        }
        //3-2. 오른쪽방향이동(왼쪽버튼 클릭과 동일)
        else if (tgLeft > -tgPoint + 50) {
            console.log("오른쪽으로!");
            // 이동함수 호출!(전달값0)
            goSlide(0);
        }
        // 3-3. 제자리로 돌아옴
        // goslide 함수에 제자리로 돌아오는 것이 없어서 여기에 넣음
        else {
            console.log("제자리!");
            // 기존값 left로 다시 보냄!
            obj.style.left = -tgPoint + "px";
        }
    } ///////////gowhere 함수//////////

    ///////////////////////////////////////////////////////
    ///////////////다양한 애니메이션 ////////////////////////////
    // 1. 대상선정//////////////////////////////

    // 인트로
    // 1-1. 이벤트 대상: main a img
    const intro1 = document.querySelectorAll(".abc .intro");
    const intro2 = document.querySelectorAll(".yuja .intro");

    const intro = [intro1, intro2];
    // const intro = [document.querySelectorAll(".abc .intro"), document.querySelectorAll(".yuja .intro")];

    // 1-2  bg1 a
    const bg1a = document.querySelectorAll(".bg1 a");

    //////////////////////////////////////////////
    /*******************************************
            인트로 : 자바스크립트 조금 어려웠음 
            2-1. ABC 유자바나나 2개 모두 나오게 하기 

    **********************************************/
    //////////////////////////////////////////////
    let iNum = [0, 0];

    function showEffect(obj, idx) {
        //0번째, 그다음 (들어가는거)
        obj[iNum[idx]].style.display = "block";
        // 0번째 다음꺼
        if (iNum[idx] !== 0) obj[iNum[idx] - 1].style.display = "none";
        // 참고 opacity 가 0 이면 화면을 차지하게 되기 때문에 block  none 을 주면서 할 것

        iNum[idx]++; // iNum[idx] = iNum[idx] + 1

        if (iNum[idx] < obj.length) {
            // 함수안에서 불러서 showEffect 재귀함수
            setTimeout(() => showEffect(obj, idx), 300);
            if (iNum[idx] === obj.length - 1) iNum[idx] = 0;
        }
    } /////////// showEffect /////////

    // setTimeout(() => intro.forEach((val, idx) => showEffect(val, idx)), 1000);
    setTimeout(() => {
        intro.forEach((val, idx) => {
            showEffect(val, idx);
        });
    }, 1000);
    // 트리거

    // 재귀 함수일 때는 set인터발은 잘 쓰지 않는다.
    // https://getchan.github.io/til/js_setTimeOut/
    // setTimeOut(func, ms) 는 일정 시간 이후 매개변수로 주어진 함수를 실행하는 함수

    /////////////////////////////////////////
    /***************************************
            2-2. abc 쥬스  
            2-3. 유자바나나 스무디
    ****************************************/
    ///////////////////////////////////////////

    // 소제목 설명
    // const aph3 = document.querySelector(".ap h3");

    // let aph3txt = aph3.innerText;
    // for (let x = 0; x < 3; x++) {
    //     aph3.innerText += aph3txt;
    // }

    // aph3.style.transform = `translateX(100%)`;
    // aph3.style.transition = `2s`;

    // const bth3 = document.querySelector(".bt h3");

    // let bth3txt = bth3.innerText;
    // for (let x = 0; x < 3; x++) {
    //     bth3.innerText += bth3txt;
    // }433

    // 0.  위치를 불러오는 시간
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

    //  1. 스크롤시 필요한 변수 설정
    const hv = (window.innerHeight / 3) * 2;
    console.log("1. 2/3높이:", hv);

    // 2. 윈도우 높이값
    const winH = window.innerHeight;
    console.log("2. 윈도우 높이값:", winH);
    // 화면이 달라지면 값이 달라짐

    // 3. 전체문서 높이값
    const docH = document.body.clientHeight;
    console.log("3. 전체문서 높이값:", docH);

    // 4. 스크롤 한계값
    const scLimit = docH - winH;
    console.log("4. 스크롤한계값:", scLimit);

    // 5. 위치값알기 getBoundingClientRect() - Viewport를 기준으로 하는 위치 값 가져오기
    /* element의 크기(width, height)와 뷰포트(viewport)를 기준으로 한 위치(left, top, right, bottom, x, y),
        이렇게 총 8가지 속성이 있는 DOMRect 객체를 리턴한다. */
    // 함수를 편하게 변수화하기
    const gps = (ele) => ele.getBoundingClientRect().top;

    ///// 스크롤시 이동할 대상///////////

    // 왼쪽에 <h4> ABC  제목 h4
    // const apple = document.querySelector(".ap h4").getBoundingClientRect();
    // console.log("apple", apple);

    const h4top = document.querySelectorAll("h4.htop");
    console.log("h4top", h4top);

    for (let x of h4top) {
        let txt = x.innerText;
        let temp = "";
        for (let y of txt) {
            temp += `<span>${y}</span>`;
        }
        x.innerHTML = temp;
    }

    // 오른쪽 사과, 비트, 당근 이미지
    const rimg = document.querySelectorAll(".iiibx img");

    // 아래쪽 효능 설명
    const p = document.querySelectorAll(".iibx p");

    // ibx 의 이미지 위에서 아래로 퍼지면서
    const iimg = document.querySelectorAll(".stimg");
    // console.log("iimg", iimg);

    ///////////////////////////////
    // "on" 클래스 넣기 함수 만들기 ///////
    ////////////////////////////////
    const show = (x) => {
        // 대상요소의 현재 스크롤 위치
        let xval = gps(x);
        // 구간적용 조건문

        if (xval < hv && xval > 0) {
            // if (xval < hv && xval > 0) {
            x.classList.add("on");
        }
    }; /////////const show////////

    // ABC, 유자바나나 소개 스크롤 이벤트 적용
    window.addEventListener("scroll", () => {
        // console.log("스크롤중~!");

        // 1) on 클래스 넣는 함수 호출하기

        // iimg 이미지 나오게 하기
        for (let x of iimg) show(x);

        // rimg 이미지 나오게 하기
        //     setTimeout(() => showEffect(obj, idx), 300);
        for (let x of rimg) show(x);

        // setTimeout(for(let x of rimg) => show(x), 300);

        for (let y of p) show(y);

        // 제목이 옆으로 펴지는 애니
        // forEach 구문

        h4top.forEach((ele, idx) => {
            const tittop = gps(ele);
            if (tittop < hv && tittop > 50) {
                let mytxt = ele.querySelectorAll("span");
                mytxt.forEach((tele, tidx) => {
                    tele.style.display = "inline-block";
                    tele.style.transform = `translateY(${tidx * 100 + 100}%) translateX(${tidx * 10}% )`;
                    tele.style.transition = `2s`;
                });
            }
        });
    }); //////scroll//////////////

    //////////////////////////////////////
    /**********************************
            2-4 company
            2-4-1 회사 뉴스 소개 
            2-4-2. 후원 종류 소개
    **********************************/
    /////////////////////////////////////
    /**********************************
     *   2-4 company
     *   2-4-1 회사 뉴스 소개
     * 이벤트 : 클릭
     **********************************/
    // 기사 정보

    const a = ["https://www.mk.co.kr/news/economy/7784222", "https://www.etoday.co.kr/news/view/1343558", "https://www.etoday.co.kr/news/view/1377898"];

    const artexp = [
        ["[트렌드] 작은 공방서 시작한 올가니카…`클렌즈주스`로 날다", "비가열식 주스 국내 첫 개발…디톡스 열풍에 초고속 성장, 곡물·간편식 업체 인수로 종합 푸드기업 거듭나, 이마트·코스트코·스타벅스등 초대형 유통 채널 진출"],
        ["국내 최초 클렌즈주스’ 올가니카, 저스트주스 안성생산센터 추가 증설 부지 매입", "폭발적 수요 발맞춰 인접 8600㎡ 대지에 신규 생산센터 건립"],
        ["간편하게 건강 챙기는 클렌즈주스 인기… 올가니카, 올해 매출 300억 기대", "자사 온라인 몰 및 스타벅스, CU, 커피빈, 현대백화점, 신세계백화점 판매"],
    ];

    // 1. 대상선정
    // (1) 타겟박스

    const ognews = document.querySelector(".ognews");
    const headli = document.querySelectorAll(".headline li");

    headli.forEach((ele, idx) => {
        let x = idx;

        // 함수설정

        let acode = `<ol> <li title="Click"> <a href="https://www.organica.kr/service/company.php" target="_blank"><img class="main" src="./img/art.jpg" alt="이미지"></li> </a></ol>`;
        ognews.innerHTML = acode;
        function makeArt() {
            ///////makeArt() ///////////
            let icode = "<ol>";
            // for (x = 0; x < 3; x++) {
            icode += `
            <li title="Click">
           <a class="newadd" href=${a[x]} target="_blank"> 
                <img src="./img/art${x}.jpg" alt="이미지">
                <div class="artdes">
                    <h4>${artexp[x][0]}</h4>
                    <p>${artexp[x][1]}</p>
                </div>
                   </a> 
            </li>
            `;
            ///} //////for/////////////
            icode += "</ol>";

            ognews.innerHTML = icode;
        } //////////makeArt() //////////////
        // 이벤트 설정

        ele.title = `Click`;
        ele.onclick = (e) => {
            // ele.title = `클릭해주세요`;
            makeArt();
        }; /////// click ////////
    }); //////////// forEach ////////// */

    /**************************
        2-4 company
        2-4-2. 후원 종류 소개
        이벤트 :가로 스크롤 

         
    **************************/

    const des = [
        ["WWF-Korea 파트너십", "World Wide Fund For Nature, 자연 보전을 위해 설립된국제 비정부 기구 "],
        ["한국의 해양보전활동", "한국을 모범적인 지속가능한 어업국가로 만들기 위해 정부, 민간부문, 학계 및 NGO 단체와의 협력"],
        ["생태발자국 조사 및 감축", "우리의 생활을 유지하기 위해 지구에 남기는 생태발자국을 조사하고 이를 감축하기 위한 방안 제안"],
        ["자연보전 캠페인", "플라스틱 FREE, 멸종위기 동물 보호, 어스아워 등 기후변화를 위한 다양한 캠페인 활동"],
        ["기후변화와 재생에너지", "한국이 기후변화에 회복력있는 공정한 저탄소 사회와 미래에 기여"],
    ];
    // 1. 대상선정
    // (1) 타겟박스
    //  height: calc(100vh + 3000px);
    const bgcp = document.querySelector(".bgcp");

    // (2) 스티키 박스
    //  height: 100vh;
    const sticky = document.querySelector(".bgcp article");

    // li 리스트 함수 호출

    makeList();

    // (3) 가로이동 박스 ul
    //   width: calc(100vw + 3000px);

    const mvbx = sticky.querySelector("ul");

    // (4) 후원 종류 이미지 설명

    /******************************* 
    스크롤시 스티키 구간에서 가로방향 이동 구현하기   
    *******************************/

    // 대상 : 가로이동박스 ul  mvbx
    // 이벤트 : scroll
    // 스크롤 시 movePage 호출

    //////////스크롤 이벤트 세팅//////////////
    /* "scroll" 이라는 이벤트 이름을 적어야 한다.  따옴표가 없으면 변수이다.  */
    window.addEventListener("scroll", movePage);

    // 함수명: movePage
    // 기능: 가로방향 구현
    function movePage() {
        if (mob) return;

        // 1. 타겟 박스 bgcp  위치값 찍기
        // 타겟박스는 스티키의 부모박스
        // const bgcp = document.querySelector(".bgcp");
        //  height: calc(100vh + 3000px);

        let target = gps(bgcp);
        // console.log("target:", target);

        // 2. 가로이동박스 (mvbx) 의 left 값 변경하기
        //  const gps = (ele) => ele.getBoundingClientRect().top;
        //  타겟박스의 gps 를 left 값으로 넣어준다.

        // 기준선을 기준으로 위로 올라가게 되면 - 된다.
        // 기준선이 0이다.
        // 이유: gps수치 ===  left값 수치 === -2600px (이동이니깐 -2600까지 가는 것이다. )
        //  대상: 가로이동박스 ul   width: calc(100vw + 3000px);
        //  대상:
        //  const sticky = document.querySelector('.bgcp article');
        //  const mvbx = sticky.querySelector('ul');

        // 적용구간: -2600보다 크고 0보다 작을 때
        if (target <= 0 && target >= -2600) mvbx.style.left = target + "px";
        // 0보다 클때는 위에 있을때, 이것을 해야 안전함
        else if (target > 0) mvbx.style.left = "0";
    }

    /******************************
    함수: makeList
    기능: 이미지 리스트 넣기 
    
    ***************************/
    function makeList() {
        let hcode = "<ul>";
        for (let i = 0; i < 5; i++) {
            hcode += `
            <li>
                <img src="./img/${i}.png" alt="후원활동">
                <div class="spdes">
                    <h4>${des[i][0]}</h4>
                    <p>${des[i][1]}</p>
                </div>
            </li>
            `;
        }
        hcode += "</ul>";

        sticky.innerHTML = hcode;
    }

    // 메뉴 클릭시 이동하기
    // 대상: .mvbx a
    const mvgnb = document.querySelectorAll(".gnb a");
    // console.log(mvgnb);

    mvgnb.forEach((ele) => ele.addEventListener("click", mvPos));

    function mvPos(e) {
        // 기본이동막기
        e.preventDefault();
        // a의 href속성 읽기
        let ahref = this.getAttribute("href");
        console.log(ahref);

        // 위치값 셋팅
        let pos = document.querySelector(ahref).offsetTop;
        console.log(pos);

        // 제이쿼리로 위치이동하기
        $("html,body")
            .stop()
            .animate(
                {
                    scrollTop: pos + "px",
                },
                800,
                "easeInOutQuint"
            );

        // 위치이동 : 부드러운 스크롤이므로 위치변수만 업데이트
        ss_pos = pos;

        console.log("부스", ss_pos);
    } ////////// mvPos ///////////////////
} //////////////// loadFn 함수 ///////////////
