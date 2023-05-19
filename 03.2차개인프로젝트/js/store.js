// 뷰엑스 스토어 - 전역뷰데이터 저장소!

// gnb 데이터 가져오기
import gnbData from "./gdsData/gnb.js";

/************************************************************* 
    [ SPA 개발환경에서 store를 내보낸 후 사용시 주의사항 ]

    -> vue 확장자 파일에서 이를 사용시 일반변수와 같이
    store라고 호출하면 에러발생!!!! 왜? 일반js파일이 아님!
    this.$store라고 호출해야한다!

    this -> 뷰 인스턴스 객체자신
    $store는 전역 뷰엑스 스토어에 등록된 변수를 지칭함!

    제이슨은 환경설정이 되어 있는 파일이다 .

질문

1. a튄다.

2. 프로모션으로 다시 안돌아가진다. 

3. 햄버거 에서도 이상하다. 

*************************************************************/

/////////////// 뷰엑스 스토어를 활용한 변수 셋팅하기 ////////////
// 1. 뷰엑스 스토어 인스턴스를 생성한다!

const store = new Vuex.Store({
    // (1) 데이터 셋팅구역 :
    state: {
        gnbData: gnbData,
        // 변경되는 데이터는 state 구역에 외부 변수를 할당하여
        // 변경시 가상돔에 반영하여 실제 돔으로 연결되도록 등록해준다.!!!
        // 이름은 같은 이름으로 사용해도 무방함!! (구분되기 때문에)
        // 이미지정보 셋업변수

        title: "Promotion",
        menu: ["All", "Curation", "Event", "Gifts"],
        cnt: 16,
        cat: "promotion",
        subtit: ["Pick Color Red for Valentine's Gift Ideas!", "Monotone, its depth and beauty", "A housewarming gift without failure", "Picnic on a warm spring day", "Bring the warmth of spring to your table", "We've Got Your Flowers!", "World Puppy Day, Friends with Four Feet.", "The consolation of love, Moon Hyeongtae", "NEW PRINT BAKERY, NEW ART PIECES!", "Did you get to see Dodo bird? Find them in Kim Sunwoo's art goods", "Leave Your Worries at the Sea", "2023 Year of Rabbit, Collection for Good Fortune", "Moon Jar Collection", "Colorful and fragrant spring, the Rookie of the Month", "Lee Wooyoun, New Original Paintings", "Black Neon, the sun that swallowed the charcoal"],

        artist: "",
        price: "",
        // 공통처리 분류명
        name: "",

        // 초기값 세팅
        // 처음엔 gnum: "" 이었는데, 빈값이 들어가면서 에러가 남
        gnum: 0,
    }, /////// state 구역 ///////////

    // (2) 데이터 변경 메서드 구역 :
    // 호출시 commit()사용!
    mutations: {
        // 초기데이터 셋업 메서드
        // // initSet(헐,param){
        // initSet(헐) {
        //     console.log("데이터변경! 초기화!", 헐);
        //     // 헐.imgsrc = param;
        //     // 파라미터가 객체일 경우(데이터다수일때!)

        //     // 이미지데이터 셋업
        //     // 헐.imgsrc = 헐.gnbData.인트로.이미지;
        //     // 설명데이터 셋업
        //     // 헐.desc = 헐.cityData.인트로.설명;
        // }, ////// initSet 메서드 /////

        // 데이터 변경 메서드
        //  chgData(a, b) {
        //     // 이자리에서 바로 스토어 변수를 업데이트 한다!!
        //     // 1. 이미지 변수 : imgsrc
        //  a.imgsrc = a.gnbData[b].이미지;
        //     // 2. 도시설명 변수 : desc
        //  a.desc = a.cityData[b].설명;
        //  }, //////// chgData 메서드 ///////

        // 메뉴데이터 변경메서드
        // 데이터 변경 셋업 메서드
        // commit('함수명', '전달인자')
        chgData(dt, pm) {
            // dt-state데이터, pm-전달값
            console.log("데이터변경:", pm);
            // pm에 객체데이터 속성명이 전달됨(남성/여성/스타일)
            // 1. 해당 카테고리 개수 업데이트
            dt.title = dt.gnbData[pm].title;
            // 1. 해당 카테고리 개수 업데이트
            dt.cnt = dt.gnbData[pm].cnt;

            dt.cat = dt.gnbData[pm].cat;
            dt.price = dt.gnbData[pm].price;
            // 3. 해당 카테고리 메뉴 업데이트
            dt.menu = dt.gnbData[pm].menu;
            dt.subtit = dt.gnbData[pm].subtit;
            dt.artist = dt.gnbData[pm].artist;
            dt.name = pm;
        },

        // 중요

        ///////// chgData메서드 ///////
    },
    // (3) 백엔관련 코딩 비동기처리 메서드 구역 :
    // 호출시 dispatch()사용
    //  actions: {

    //     myAct(헝, 벙) {
    //         console.log("나의액숀:", 헝, 벙);
    //     },
    //  },
}); /////////// 뷰엑스 인스턴스 ////////

/// 내보내기
export default store;
