// 메뉴 기능함수 가져오기
import loadFn from "./mainjs/mainfn.js";

// 공통 데이터 가져오기
import comData from "./tempData/data-common.js";

// HTML태그 로딩후 loadFn함수 호출! ///
// window.addEventListener("DOMContentLoaded", loadFn);
/* 질문 햄버거 이상함  */

// gnb
Vue.component("top-comp", {
    template: comData.tgnb,
}); ///////////////뷰 컴포넌트 상단영역 Vue Component////////////////

//; ////////////////////////상단 영역 뷰 인스턴스 생성하기 ////////////////
// // new Vue({ 옵션 });
new Vue({
    el: "#top",
    data: {},
    // store,

    // mounted 실행구역 : DOM 연결후
    mounted: function () {
        //    // 상세보기 박스 닫기

        // // 메뉴기능 호출
        menuFn();
        function menuFn() {
            // 햄버거 버튼 클릭시 전체 메뉴 보이기
            $(".ham").click(function () {
                // 햄버거 버튼 클래스변경(토글)
                $(this).toggleClass("on");
                // 전체메뉴보이기
                $(".mbox").fadeToggle(400);
                // 상세보기 박스 닫기
            }); //////////// click ///////////////
        } ///////// menuFn함수 ////////////////

        // 전체메뉴클릭시 전체메뉴창 닫기

        $(".mlist a").click(() => {
            //  1. 전체메뉴창 닫기
            $(".ham").trigger("click");
            // 2. 부드러운 스크롤 위치값 업데이트
            ss_pos = 0;
           
        });

        $(".navleft a").click((e) => {
           
        });
    }, ////////마운트//////////
    // created 실행 구역: DOM 연결 전 (생성되고 나서 들어갈 때 )
    // 마운트 위에 있든, 아래에 있든, 먼저 실행된다.
    created: function () {
        // DOM 연결전 데이터 가공작업
        // console.log("created구역");
    },
}); /////////////상단영역 뷰 인스턴스//////////////

// Vue.component(내가지은요소명, { 옵션 })
Vue.component("main-comp", {
    template: comData.tarea,
}); ///////////////뷰 컴포넌트 상단영역 Vue Component////////////////

// new Vue({ 옵션 });
new Vue({
    el: "#cont",
    data: {},

    // mounted 실행구역 : DOM 연결후
    mounted: function () {
        // 제이쿼리코드 함수 호출!
        // console.log("mounted구역");
        loadFn();
    },
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
