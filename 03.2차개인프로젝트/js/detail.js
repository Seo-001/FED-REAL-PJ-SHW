// gnb 데이터 가져오기
// import gnbData from "./gdsData/gnb.js";

// 공통 데이터 가져오기
import comData from "./tempData/data-common.js";
import detailTemp from "./tempData/detail-temp.js";
import store from "./store.js";

(() => {
    let pm;

    //GET 방식으로 넘어온 데이터 처리하여
    // 분류별 서브페이지 구성하기
    //location.href : 상단 URL  읽어온다.
    //indexOf("?")!==-1 물음표가 있으면!

    if (location.href.indexOf("?") !== -1) pm = location.href.split("?")[1].split("=")[1];
    // // 물음표 잘라서 뒤에것 , (=) 로 잘라서 뒤에것
    // // 파라미터 값만 추출함!!
    // // pm에 할당이 되었다면 undefined 가 아니므로 true
    // // 보기에는 괜찮아보이지만, 깨진 것이라서 디코딩을 해준다.
    // // 요즘에는 인코딩 안해줘도 된다.
    // // 바로 디코딩 해주어도 된다.
    if (pm) store.commit("chgData", decodeURI(pm));
    // // 메뉴를 선택해서 파라미터로 들어오지 않으면 "남성"셋팅
    else store.commit("chgData", "Promotion");
    // decodeURI() - 변경할 문자열나 있어야  변환됨
    // decodeURIcomponet() - url 전체에 섞여 있어도 모두 반환
})(); ////////////////// 바로 실행 함수 /////

/* 
 <sub-comp> </sub-comp>
      <sub-main> </sub-main>

      tsub- lnb   -comp
      tmain .cont -main
*/

// gnb
Vue.component("top-comp", {
    template: comData.tareasub,
}); ///////////////뷰 컴포넌트 상단영역 Vue Component////////////////

//; ////////////////////////상단 영역 뷰 인스턴스 생성하기 ////////////////
// // new Vue({ 옵션 });
new Vue({
    el: "#top",
    data: {},
    store,

    // mounted 실행구역 : DOM 연결후
    mounted: function () {
        //

        // // 메뉴기능 호출
        menuFn();

        // 전체메뉴클릭시 전체메뉴창 닫기
        $(".mlist a").click((e) => {
            // 0. 기본 이동막기
            e.preventDefault();
            //  1. 전체메뉴창 닫기
            $(".ham").trigger("click");
            // 2. 부드러운 스크롤 위치값 업데이트
            ss_pos = 0;
            $("html, body").animate({ screenTop: "0" }, 1);

            // 3.URL 강제 변경하기
            history.pushState(null, null, "sub.html?cat=" + store.state.name);
        });

        $(".navleft a").click((e) => {
            // 0. 기본 이동막기
            e.preventDefault();

            // 3.URL 강제 변경하기
            history.pushState(null, null, "sub.html?cat=" + store.state.name);
        });
    }, ////////마운트//////////
    // created 실행 구역: DOM 연결 전 (생성되고 나서 들어갈 때 )
    // 마운트 위에 있든, 아래에 있든, 먼저 실행된다.
    created: function () {
        // DOM 연결전 데이터 가공작업
        // console.log("created구역");
    },
}); /////////////상단영역 뷰 인스턴스//////////////

// Footer

// Vue.component(내가지은요소명, { 옵션 })
Vue.component("foot-comp", {
    template: comData.tareaFoot,
}); ///////////////뷰 컴포넌트 상단영역 Vue Component////////////////
// new Vue({ 옵션 });
new Vue({
    el: "#footer",
    data: {},

    // mounted 실행구역 : DOM 연결후
    mounted: function () {
        // 제이쿼리코드 함수 호출!
        console.log("common mounted구역");
    },
    // created 실행 구역: DOM 연결 전 (생성되고 나서 들어갈 때 )
    // 마운트 위에 있든, 아래에 있든, 먼저 실행된다.
    created: function () {
        // DOM 연결전 데이터 가공작업
        // console.log("created구역");
    },
}); /////////////상단영역 뷰 인스턴스//////////////

function menuFn() {
    // 햄버거 버튼 클릭시 전체 메뉴 보이기
    $(".ham").click(function () {
        // 햄버거 버튼 클래스변경(토글)
        $(this).toggleClass("on");
        // 전체메뉴보이기
        $(".mbox").fadeToggle(400);
    }); //////////// click ///////////////
} ///////// menuFn함수 ////////////////

// lnb
Vue.component("detail-comp", {
    template: detailTemp.detail,
}); ///////////////뷰 컴포넌트 상단영역 Vue Component////////////////

// new Vue({ 옵션 });
new Vue({
    el: "#detail",
    data: {},
    store,

    // mounted 실행구역 : DOM 연결후
    mounted: function () {
        // 제이쿼리코드 함수 호출!
        console.log("common mounted detail구역");
    },
    // created 실행 구역: DOM 연결 전 (생성되고 나서 들어갈 때 )
    // 마운트 위에 있든, 아래에 있든, 먼저 실행된다.
    created: function () {
        // DOM 연결전 데이터 가공작업
        // console.log("created구역");
    },
}); /////////////상단영역 뷰 인스턴스//////////////
