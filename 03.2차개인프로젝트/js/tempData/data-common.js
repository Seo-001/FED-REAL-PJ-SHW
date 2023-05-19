// 공통 data 객체 셋팅 JS  - data-common.js


const comData = {
    // index.js 메인
    tarea: `     
    
                                    <!-- 2-1. 인트로첫페이지 -->
                                    <section class="apage">
                                        <article id="pg1" class="page backSky">
                                            <div class="ibx">
                                                <svg class="sky"></svg>
                                                <div class="introcompany minfo">
                                                    <h1></h1>
                                                </div> 
                                            </div>
                                        </article>
                                
                                        <article id="pg2" class="page wcontainer">
                                            <ol class="wall-wrapper">
                                                <li class="wall wall-left"></li>
                                                <li class="wall wall-right"></li>
                                                <li class="wall logo logo1">
                                                    <h4 class="wall-content">WE</h4>
                                                </li>
                                                <li class="wall logo logo2">
                                                    <h4 class="wall-content">BAKE</h4>
                                                </li>
                                                <li class="wall logo logo3">
                                                    <h4 class="wall-content">ART</h4>
                                                </li>
                                                <li class="wall logo logo4">
                                                    <h5 class="wall-content longlogo"></h5>
                                                </li>
                                            </ol>
                                        </article>
                                
                                        <article id="pg3" class="page">
                                            <div class="ibx">
                                            <h2>Monthly Curation</h2>
                                                <div class="introimg minfo">
                                                </div>
                                            </div>
                                        </article>
                                
                                     

                                        <article class="indic">
                                    <ul>
                                        <li>
                                            <a class="findic" href="#"> <span>인트로 첫번째 페이지</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>인트로 두번째 페이지</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>인트로 세번째 페이지</span></a>
                                        </li>
                                    </ul>
                                </article>
                                  
                                    </section>

                            
                                
                                    `,

    //서브  화면 gnb
    tareasub: `
    <header>
            <section class="pagenav">
                    <nav>
                        <div class="top">
                        <div class= "tleft">
                        <a :href="'index.html'" class="comlogo">
                        <img src="./img/logo.svg" alt="로고" /> 
                        </a>
                            <div class="navleft">
                                <ul
                                >
                                
                                    <li class="navtit">
                                        <a href="#"
                                        v-on:click.prevent="$store.commit('chgData','Promotion')"
                                    >Promotion</a>
                                    </li>

                                    <li class="navtit">
                                        <a href="#" v-on:click.prevent="$store.commit('chgData','Art')">Art</a>
                                    </li>

                                    <li class="navtit">
                                        <a href="#" v-on:click.prevent="$store.commit('chgData','Living')">Living</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            
                            <div class="navright">
                                <ul>
                                    <li class="ham">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="mbox">
                        <nav class="mlist">
                            <ol>
                                <li class="top">
                                <a href="#" v-on:click="$store.commit('chgData','Promotion')">Promotion</a>
                                </li>
                                <li class="bt">All </li>
                                <li class="bt">Curation</li>
                                <li class="bt">Event</li>
                                <li class="bt">Gifts</li>
                            </ol>
                            <ol>
                                <li class="top"><a href="#" v-on:click="$store.commit('chgData','Art')">Art</a></li>
                                <li class="bt">All</li>
                                <li class="bt">Bestseller</li>
                                <li class="bt">Original</li>
                                <li class="bt">Limited Edition</li>
                                <li class="bt">Art Poster</li>
                                <li class="bt">Art Book</li>
                                <li class="bt">Golf</li>
                            </ol>
                            <ol>
                                <li class="top"><a href="#" v-on:click="$store.commit('chgData','Living')">Living</a></li>
                                <li class="bt">All</li>
                                <li class="bt">Tableware</li>
                                <li class="bt">Object</li>
                                <li class="bt">Fragrance</li>
                                <li class="bt">Textile</li>
                                <li class="bt">Art Book</li>
                                <li class="bt">Wall Decor</li>
                                <li class="bt">Art Toy</li>
                                <li class="bt">Desk</li>
                            </ol>
                        </nav>
                    </div>
                </section>
            </header>
    
    
    `,

    //메인 화면 gnb
    tgnb: `
    <header>
            <section class="pagenav">
                    <nav>
                        <div class="top">
                        <div class= "tleft">
                        <a :href="'index.html'" class="comlogo">
                        <img src="./img/logo.svg" alt="로고" /> 
                        </a>
                            <div class="navleft">
                                <ul>
                                
                                    <li class="navtit">
                                        <a href="sub.html?cat=Promotion"
                                >Promotion</a>
                                    </li>

                                    <li class="navtit">
                                        <a href="sub.html?cat=Art">Art</a>
                                    </li>

                                    <li class="navtit">
                                        <a href="sub.html?cat=Living">Living</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            
                            <div class="navright">
                                <ul>
                                    <li class="ham">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="mbox">
                        <nav class="mlist">
                            <ol>
                                <li class="top">
                                <a href="sub.html?cat=Promotion">Promotion</a>
                                </li>
                                <li class="bt">All</li>
                                <li class="bt">Curation</li>
                                <li class="bt">Event</li>
                                <li class="bt">Gifts</li>
                            </ol>
                            <ol>
                                <li class="top"><a href="sub.html?cat=Art" >Art</a></li>
                                <li class="bt">All</li>
                                <li class="bt">Bestseller</li>
                                <li class="bt">Original</li>
                                <li class="bt">Limited Edition</li>
                                <li class="bt">Art Poster</li>
                                <li class="bt">Art Book</li>
                                <li class="bt">Golf</li>
                            </ol>
                            <ol>
                                <li class="top"><a href="sub.html?cat=Living">Living</a></li>
                                <li class="bt">All</li>
                                <li class="bt">Tableware</li>
                                <li class="bt">Object</li>
                                <li class="bt">Fragrance</li>
                                <li class="bt">Textile</li>
                                <li class="bt">Art Book</li>
                                <li class="bt">Wall Decor</li>
                                <li class="bt">Art Toy</li>
                                <li class="bt">Desk</li>
                            </ol>
                        </nav>
                    </div>
                </section>
            </header>
    
    
    `,

    tareaFoot: `
    
    <footer>
                <address>
                    © PRINTBAKERY 대표 김소형 주소 [06017] 서울특별시 강남구 압구정로42길 24-6 사업자번호 428-87-00761
                    통신판매업 제2017-서울종로-0630호
                </address>
                <div>
                    메일 web_master@printbakery.com 개인정보보호책임자 김혜원 대표번호 1599-3403 팩스 02-391-2017 호스팅
                    카페24(주) 이용약관 개인정보보호방침 SITE BY BATON
                </div>
            </footer>

    `,
};

// 내보내기
export default comData;
