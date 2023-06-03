// import comData from "./tempData/data-common.js";

// setTimeout(() => {
//     window.scrollTo(0, 0);
//     // ss_pos = 0;
// }, 100);

function loadFn() {
    // 메뉴관련 기능 JS - menu.js

    // console.log('로딩완료!');

    // 0. 변수 설정하기
    // (1) 전체페이지변수
    let pgnum = 0; // 현재페이지번호 (첫페이지 0)
    // (2) 전체 페이지수
    const pgcnt = document.querySelectorAll(".page").length;
    const page = document.querySelectorAll(".page");

    // console.log("전체페이지수:", pgcnt);
    // 통과

    // // 광실행금지변수
    // let prot = [];
    // // 광스크롤 금지
    // prot[0] = 0;
    // // 광클 초기값
    // prot[1] = 0;

    let newProt = 0;

    // 모바일 800px 보다 작아질때 사용하는 함수

    let mob = 0;

    chkWid();
    function chkWid() {
        if (window.innerWidth <= 1000) {
            mob = 1;
            let body = document.querySelector("body");
            let html = document.querySelector("html");
            body.style.cssText = `overflow:auto overflow-x:hidden`;
            html.style.cssText = `overflow:auto`;

            window.addEventListener("scroll", () => {
                // 방금 막음

                //  1. 스크롤시 필요한 변수 설정
                const ghv = window.innerHeight;
                const gps = (ele) => ele.getBoundingClientRect().top;

                const hv = (window.innerHeight / 3) * 2;

                //  1. 스크롤시 필요한 변수 설정

                console.log("1. 2/3높이:", hv);

                console.log("1. 높이:", ghv); // 959

                // window.scrollY();

                show();
                function show() {
                    // 대상요소의 현재 스크롤 위치
                    // let gps = (ele) => ele.getBoundingClientRect().top;
                    let pg2 = document.querySelector("#pg2");
                    let logo = document.querySelectorAll(".logo");
                    logo.forEach((ele, idx) => {
                        ele.style.cssText = `opacity:1, transform:none, transition:none`;
                    });

                    let wallwrapper = document.querySelector(".wall-wrapper");

                    let wallcontent = document.querySelectorAll(".wall-content");

                    let logo4 = document.querySelector(".logo4");

                    let h5wall = document.querySelector("h5.wall-content");

                    let xval = gps(pg2);
                    // 구간적용 조건문

                    // console.log("scrollY", window.scrollY); // 992
                    // console.log("gpsps2", gps(pg2));

                    // if (xval < 300 || xval > 200) {
                    if (xval < 300) {
                        // setTimeout(() => {
                        //     wallwrapper.style.perspective = `2000px`;
                        //     wallwrapper.style.transition = `perspective 0.5s linear`;

                        //     logo[0].style.transform = `translateZ(-50vw)`;
                        //     logo[0].style.opacity = `1`;
                        //     logo[0].style.transition = `all .5s ease-in 0.1s`;
                        // }, 100);

                        // setTimeout(() => {
                        //     logo[0].style.display = "none";
                        //     // transform: translateY(-100vw)
                        // }, 700);

                        wallwrapper.style.transform = `none`;
                        pg2.style.cssText = `height:auto`;
                        // logo.forEach((ele, idx) => {
                        //     ele.style.cssText = `opacity:1; transform:none; transition:none;
                        //     position:abosolute; width:30%; height:20%;
                        //     left:${idx * 30}%;
                        //     `;
                        // });

                        logo.forEach((ele, idx) => {
                            ele.style.cssText = `opacity:1; transform:none; transition:none;
                            position:abosolute; width:30%; height:20%;
                            left:${idx * 30}%;
                            `;
                        });

                        wallcontent.forEach((ele, idx) => {
                            ele.style.cssText = `display:inline-block; height:100%; width:100%`;
                        });

                        /* 
                         ele.innerText = `
                            "Print Bakery pursues a life of enjoying art as if choosing bread at a bakery. We introduce contents created by art experts in various fields. I hope that the value of art will be present in everyone's daily life."
                            
                            `;
                        */

                        logo4.style.cssText = `transform:none; transltate:none; left:0%; top:50%; opacity:1`;
                        h5wall.innerText = `
                        "Print Bakery pursues a life of enjoying art as if choosing bread at a bakery. We introduce contents created by art experts in various fields. I hope that the value of art will be present in everyone's daily life."
                        
                        `;

                        h5wall.style.cssText = `
                        

                        `;
                    }
                } /////////const show////////
                ////////////
            });
        } else mob = 0;
        console.log("모바일:", mob);
    } ///// chkWid함수 /////////////

    window.addEventListener("resize", chkWid);

    // (1) 이동시간

    // 1. 전체 휠 이벤트 설정하기

    // 질문 초기화
    window.addEventListener("wheel", wheelFn, { passive: false });

    // 2. 휠 이벤트 함수 만들기

    // let printSts = 0;
    function wheelFn(e) {
        if (mob) return;
        // (0) 이벤트 막기
        e.preventDefault();

        // console.log("전pgnum:", pgnum, "/letSts:", letSts, "/newProt:", newProt);

        // 방금 막음
        if (pgnum === 1 && letSts === 0) return;

        // 새로 넣음 첫페이지
        // if (pgnum === 0 && printSts === 0) return;

        // 광스크롤 막기!
        if (newProt) return;
        newProt = 1; // 신호 1개만 허용
        setTimeout(() => {
            newProt = 0;
        }, 1000);

        //  console.log("후pgnum:", pgnum, "/letSts:", letSts);

        // (1) 호출확인
        //  console.log("휠~~");
        // 통과

        // (2) 휠 방향 알아내기
        // 이벤트객체.wheelData
        // 위치, 방향알기
        let dir = e.wheelDelta;

        //  console.log("방향", dir);
        // 통과

        // (3) 방향에 따른 페이지 번호 증감
        // 스크롤 아래방향 : 페이지번호 증가
        // 페이지 번호만 지정
        // 아래방향 음수

        if (dir < 0) {
            // 아래방향 음수
            // 페이지번호 1씩증가

            pgnum++;

            // 한계수 : 페이지끝 번호(페이지수 - 1)
            if (pgnum > pgcnt - 1) pgnum = pgcnt - 1;
            console.log("증가");
        } /////////////if/////////////////
        else {
            // 윗방향 양수
            // 페이지 번호 1씩 감소
            pgnum--;

            // 한계수 : 페이지 첫 번호 = 0
            if (pgnum < 0) pgnum = -1;

            console.log("감소");
        } //////////else///////////

        console.log("페이지번호:", pgnum);

        // 2. 페이지 이동하기
        // scrollTo(가로,세로)
        window.scrollTo(0, window.innerHeight * pgnum);

        // 페이지 호출

        setTimeout(() => {
            pageAction(pgnum);
        }, 100);
    } /////////////function wheelFn(e) /////////////////////

    ///////////오늘 코딩 //////////

    let picnum = 0;
    page[1].addEventListener("wheel", pg1, { passive: false });

    const logo = document.querySelectorAll(".logo");
    const wallwrapper = document.querySelector(".wall-wrapper");

    ///////////인디케이터 ////////

    const indic = document.querySelectorAll(".indic a");
    // const findic = document.querySelector(".findic");

    $(".findic ").click(() => (location.href = "index.html"));

    // console.log(indic);

    indic.forEach((ele, idx, obj) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            movePg(ele, idx);

            if (idx === 1) {
                picnum = 0;

                logo.forEach((ele, idx) => {
                    ele.style.cssText = "";
                });
                wallwrapper.style.cssText = "";

                pg1;
                // setTimeout(() => pg1, 1);

                // console.log(3453453453);
                // 여기
            } else if (idx === 2) {
                setTimeout(() => pageAction(2), 100);
            }
        });
    });

    function movePg(ele, seq) {
        // event.preventDefault();

        pgnum = seq;

        window.scrollTo(0, window.innerHeight * pgnum);
    }

    /**************************************************** 
    함수명 : initCSS
    기능: 등장할 요소들으 초기값 셋팅 
    ****************************************************/
    // 1. 대상 :.minfo
    const minfo = document.querySelectorAll(".minfo");

    /************************************* 
    첫페이지 글자 나오게 하기 
    
    *************************************/

    /**************************************
            함수명 : pageAction
            기능: 페이지별 액션추가 
        
    ********************************************/

    function pageAction(seq) {
        ///////pageAction////////////
        // 1. 호출확인
        console.log("액션", seq);

        // 4. 해당 페이지 액션주기\

        if (seq === 0) {
            /************************** 
             * 
                // window.onresize = () => {
            //     makeStars();
            // };
            // window.onload = () => {
            //     makeStars();
            // };
            타이핑 글자 
            **************************/

            const h1 = document.querySelector("h1");

            const sky = document.querySelector(".sky");

            const maxSize = Math.max(window.innerWidth, window.innerHeight);

            // 랜덤한 X 위치값
            const getRandomX = () => Math.random() * maxSize;

            // 랜덤한 Y 위치값
            const getRandomY = () => Math.random() * maxSize;

            // 랜덤한 크기 (circle는 반지름이 크기)
            const randomRadius = () => Math.random() * 0.7 + 0.6;

            // 초기화 질문 지우지말것
            function initPage0() {
                // ele.style.cssText
                sky.innerHTML = "";
                h1.innerText = "";
            }

            initPage0();

            // 허용상태값
            //     printSts = 0;

            // pg1용 막기변수
            // let printProt = 0;
            // if (printProt) return;
            // printProt = 1; // 신호 1개만 허용
            // setTimeout(() => {
            //     printProt = 0;
            // }, 500);

            function makeStars() {
                for (let i = 0; i < 200; i++) {
                    sky.innerHTML += `<circle class="star"
                cx=${getRandomX()}
                cy=${getRandomY()}
                r=${randomRadius()}>`;
                }
            } //////////////////////////////

            makeStars();

            const content = "Print Bakery";

            let typingBool = false;
            let typingIdx = 0;
            // 한글자씩 자른다.
            // html 에 있는 글자들을
            let text = content.split("");
            // console.log("text", text);
            // console.log('typeoftext', typeof text)

            // /*

            // if (printSts === 0) return;
            // setTimeout(() => {}, 200);

            if (typingBool === false) {
                // 타이핑이 진행되지 않았다면
                typingBool === true;

                setInterval(typing, 200);
                // printSts === 1;

                // return true;
            }

            ///////if//////////////////
            // ele.style.cssText
            function typing() {
                // 타이핑될 텍스트 길이만큼 반복
                // 질문 해결

                if (typingIdx < text.length) {
                    // console.log("content.length", content.length);
                    //12
                    h1.append(text[typingIdx]);
                    typingIdx++;
                    //console.log(typingIdx);
                } else if (typingIdx === text.length - 1) {
                    clearInterval();
                } //////else///////////
            } ////////function typing()/////////
        } //////else///////////
        else if (seq === 1) {
        } else if (seq === 2) {
            //////else if ///////////

            const cutit = ["싱그러운 삶을 위한 플랜테리어", "더욱 특별한 큐레이션, 프리미엄관 오픈", "뚜벅뚜벅 인센스 홀더가 찾아왔다!", "공간을 채우는 가구의 힘", "식탁에 띄우는 봄 한 접시", "For Idiots, 이 세상의 모든 멍청이들을 위해"];
            // 잠시 주석
            makelist();
            function makelist() {
                // console.log(123123);
                //////function makelist/////////

                // on
                let hcode = "<ul>";

                for (let i = 0; i < 6; i++) {
                    hcode += `
                <li>
                

                    <div class = "flip-card">
                    <div class="flip-card-front">
                    <img src="./img/main${i}.jpg" alt="이미지" />
                    </div>

                    <h3 class= "flip-card-back">
                    <a class="picname" href="#">${cutit[i]}</a>
                    </h3>

                    </div>
            

                </li>
                `;
                }

                hcode += "</ul>";
                minfo[1].innerHTML = hcode;
            } ///////////function makelist///////////////////
            /// 대상
            const introul = document.querySelector(".introimg ul");
            const introli = document.querySelectorAll(".introimg li");
            const flipcard = document.querySelectorAll(".introimg li flip-card");

            let picname = document.querySelectorAll(".picname");

            function beforeintro() {
                // console.log("여기");
                // () => { } 질문 뭐가 다른가?

                introul.style.position = `absolute`;
                introul.style.top = `20%`;
                introul.style.left = `10%`;
                introul.style.width = `18vw`;
                introul.style.aspectRatio = `1/1.4`;

                introli.forEach((ele, idx) => {
                    ele.style.position = `absolute`;
                    ele.style.boxSizing = `border-box`;
                    ele.style.width = `100%`;
                    ele.style.height = `100%`;
                }); /////forEach//////////////
            } /////  beforeintroli();//////////

            // 잠시 주석
            beforeintro();

            setTimeout(() => {
                introul.classList.remove("on");
                introul.classList.add("on");
            }, 100);

            const posVal = [];

            function showintro() {
                //////showintro함수 //////
                console.log("여기");
                introli.forEach((ele, idx) => {
                    ele.style.transform = `rotate3d(1, 1, 1, 480deg) translate3d(${idx - 10}px, 200px,  ${(idx - 10) * -120}px`;
                    ele.style.transition = `${(idx + 0.2) * 0.4}s cubic-bezier(0.16,-0.23, 0, 0.96)
                        ${(idx + 0.2) * 0.2}s`;
                    ele.style.aspectRatio = `1/1.4`;

                    posVal[idx] = ele.style.cssText;
                }); ///forEach////////////
                console.log(posVal);
            } /////////intro.showintro함수 /////////////

            setTimeout(showintro, 2000);

            introli.forEach((ele, idx) => {
                ele.addEventListener("click", click);
                // ele.addEventListener("click", remove);
            }); //////forEach/////////// // //마우스 오버

            // 클릭 일단 대기
            function click() {
                // event.preventDefault();

                let temp = document.querySelectorAll(".minfo li");

                temp.forEach((ele, idx) => {
                    ele.style.cssText = posVal[idx];

                    introli.forEach((ele, idx) => {
                        ele.classList.remove("on");
                    });
                });

                event.currentTarget.style.cssText = `
                    
                    transform: rotate3d(1, 1, 1, 360deg) translate3d(100px, 0px, 600px);
                    transition: all 1s cubic-bezier(0, 0.68, 0.73,0.5) 0.2s ;
                    `;

                event.currentTarget.classList.add("on");
            }
        } ////////else if /////////

        let introimg = document.querySelector(".introimg");
        // let img = document.querySelectorAll(".introimg h3 img");
        // let backimg = document.querySelectorAll('.introimg h3 img.back');Action

        console.log("introimg", introimg);
    } //////pageAction//////////

    /////////// 2번째 페이지  seq(1)///////////////////////
    pageAction(0);

    // 05 바꿈 위로
    // let picnum = 0;
    // page[1].addEventListener("wheel", pg1, { passive: false });

    // const logo = document.querySelectorAll(".logo");
    // const wallwrapper = document.querySelector(".wall-wrapper");

    let totlogo = 0;

    let longlogo;
    let lologo;

    //let i = 0;

    // 허용상태값
    let letSts = 0;

    // 글자블럭 개수
    let logostr_cnt;

    // pg1용 막기변수
    let pg1Prot = 0;

    function pg1(e) {
        if (mob) return;
        // console.log(333);

        // 광스크롤 막기!
        if (pg1Prot) return;
        pg1Prot = 1; // 신호 1개만 허용
        setTimeout(() => {
            pg1Prot = 0;
        }, 1000);

        const totnum = 5;

        // #pg 안의 delta
        let delta = e.wheelDelta;

        // 마우스 휠 방향에 따른 그림액션
        // 증감

        if (delta > 0) {
            // 윗방향 양수
            picnum--;
            if (picnum === -1) picnum = 0;

            console.log("위");
        } ////////////if문//////////////
        else {
            // 아랫방향 음수
            picnum++;

            if (picnum === totnum) picnum = totnum - 1;

            console.log("아래");
        }
        // if(picnum > 5) picnum = 4;

        console.log("순번:", picnum);

        if (picnum === 1) {
            letSts = 0; // 05 넣음
            if (delta < 0) {
                wallwrapper.style.perspective = `2000px`;
                wallwrapper.style.transition = `perspective 0.5s linear`;

                logo[0].style.transform = `translateZ(-50vw)`;
                logo[0].style.opacity = `1`;
                logo[0].style.transition = `all .5s ease-in 0.1s`;

                setTimeout(() => {
                    logo[0].style.display = "none";
                    // transform: translateY(-100vw)
                    letSts = 0;
                }, 700);
            } else {
                // 새로 넣음
                letSts = 0;
                logo[1].style.transform = `translateZ(-500vw) `;
                // logo[1].style.transition = `all .5s linear 0.1s`;
                setTimeout(() => {
                    logo[1].style.opacity = `0`;
                }, 400);

                setTimeout(() => {
                    logo[0].style.display = "block";
                    logo[0].style.transform = `translateZ(-50vw) `;
                    // logo[0].style.transition = `all .8s ease-in`;
                }, 550);

                setTimeout(() => {
                    logo[0].style.display = "block";
                    logo[0].style.transform = `translateZ(-500vw) `;
                    logo[0].style.opacity = `0`;
                    // logo[0].style.transition = `all .5s ease-in`;
                    logo[0].style.transition = `all .8s ease-in`;
                }, 600);

                setTimeout(() => {
                    wallwrapper.style.perspective = `300px `;
                    wallwrapper.style.transition = `perspective 0.6s linear`;
                }, 850);

                setTimeout(() => {
                    letSts = 1;
                }, 900);
            }
        } else if (picnum === 2) {
            // 새로 넣음
            letSts = 0;
            if (delta < 0) {
                logo[1].style.transform = `translateZ(-50vw)`;
                logo[1].style.opacity = `1`;
                logo[1].style.transition = `all .3s ease-in`;

                setTimeout(() => {
                    logo[1].style.display = "none";
                }, 500);
            } else {
                setTimeout(() => {
                    logo[1].style.display = "block";
                    logo[1].style.transform = `translateZ(-50vw) `;
                    logo[1].style.transition = `all .5s linear `;
                }, 700);

                logo[2].style.transform = `translateZ(-500vw) `;
                // logo[2].style.transition = `all .5s linear`;
                setTimeout(() => {
                    logo[2].style.opacity = `0`;
                }, 400);
                // logo[2].style.display = `block`;
            }
        } else if (picnum === 3) {
            //  새로 넣음
            letSts = 0;
            if (delta < 0) {
                logo[2].style.transform = `translateZ(-50vw)`;
                logo[2].style.opacity = `1`;
                logo[2].style.transition = `all .3s linear  `;

                setTimeout(() => {
                    logo[2].style.display = "none";
                }, 500);
            } else {
                setTimeout(() => {
                    wallwrapper.style.perspective = `-50vw `;
                    wallwrapper.style.transition = `perspective 0.5s linear`;
                }, 900);

                setTimeout(() => {
                    logo[2].style.display = "block";
                }, 500);

                // logo 2 아트
                setTimeout(() => {
                    logo[2].style.transform = `translateZ(-50vw) `;
                    logo[2].style.opacity = `1`;
                    logo[2].style.transition = `all .5s linear  `;
                }, 400);

                /// 글 많은 로고
                setTimeout(() => {
                    wallwrapper.style.perspective = `2000px`;
                    wallwrapper.style.transition = `perspective 0.4s linear`;
                    logo[3].style.transform = `translateZ(-500vw) `;
                    logo[3].style.transition = `all 0.4s linear `;
                    logo[3].style.opacity = `0`;
                }, 200);
            }
        } else if (picnum === 4) {
            setTimeout(() => {
                wallwrapper.style.perspective = `5000px`;
                wallwrapper.style.transition = `perspective 0.5s linear`;
                logo[3].style.transform = `translateZ(-500vw) `;
                logo[3].style.transition = `all 0.5s linear`;
                logo[3].style.opacity = `1`;
            }, 100);

            logo[2].style.display = "none";

            if (totlogo === 0) {
                setTimeout(() => {
                    wallwrapper.style.perspective = `5000px`;
                    wallwrapper.style.transition = `perspective 0.5s linear`;
                    logo[3].style.transform = `translateZ(-500vw) `;
                    logo[3].style.transition = `all 0.5s linear`;
                    logo[3].style.opacity = `1`;
                }, 100);

                const logostr = "Print Bakery pursues a life of enjoying art as if choosing bread at a bakery. We introduce contents created by art experts in various fields. I hope that the value of art will be present in everyone's daily life.";

                let substring = logostr.split(" ");

                logostr_cnt = substring.length;

                let lcode = "";
                // let idx = 0;

                for (let x of substring) {
                    lcode += `<div class=lologo>${x}</div> `;
                } ////for///////////////

                longlogo = document.querySelector(".longlogo");

                longlogo.innerHTML = lcode;
                lologo = document.querySelectorAll("h5 .lologo");

                lologo[totlogo].classList.add("on");
            } //////////// if: totlogo===0 //////////////

            // console.log("로고개수:", logostr_cnt);
            if (delta < 0 && totlogo <= 1) {
                totlogo++;
                console.log(totlogo);

                lologo = document.querySelectorAll("h5 .lologo");

                lologo[totlogo].classList.add("on");
                if (totlogo < 0) totlogo = 0;
            } else if (delta < 0 && totlogo >= 2) {
                lologo = document.querySelectorAll("h5 .lologo");
                // lologo.forEach((ele, idx) => {
                //     lologo[idx].classList.remove("on");
                // });
                for (let i = 2; i < 39; i++) {
                    lologo[i].classList.add("on");
                    // console.log("i", i);
                }

                setTimeout(() => {
                    letSts = 1;
                }, 40);
                setTimeout(() => {
                    letSts = 0;
                    // lologo = document.querySelectorAll("h5 .lologo");
                    // lologo.forEach((ele, idx) => {
                    //     lologo[idx].classList.remove("on");
                    // });
                }, 300);
            }
        } ////////else if (picnum === 4)///////////////////
    } //////////////// pg1 함수 ///////////
} ////// loadFn ///////////////

/// 메뉴함수 내보내기 /////
export default loadFn;
