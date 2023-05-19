const subTemp = {
    tsub: `
    <div id="lnb">
    <article>
        <h5>
        {{$store.state.title}}
       </h5>
        <ul class="lnb" >
            <li v-for="(v, n) in $store.state.menu" v-bind:key="n">
                {{v}} 
            </li>
        </ul>
    </article>
</div>
    
    `,
    tmain: `
    <main class="ibx cont">
    <div id="art">
        <section class="grid">
            <article v-for="(v, n) in $store.state.subtit" v-bind:key="n" >
           
                <img 
                v-bind:src="
                './img/'+$store.state.cat+'_'+n
                +
                '.png'
                " alt="작품이미지" />
                    <h6> {{v}} </h6>
                    <div>{{$store.state.artist[n]}}</div>
                    <div>{{$store.state.price[n]}}</div>
          
            </article>
        </section>
    </div>
</main>
    `,
    detail: `
 
    <section id="detail">
    <div class="indt">
        <div id="bgbx">
            <a href="#" @click.prevent="test()"> X </a>
            
        </div>

       
         
                <section class="gimg">
                <article>
             
               
                <div class="movart">
                <div class="string"> 
                <div class="nail"> </div>
                </div>
             
               
                   <img 
                   v-bind:src="
                   './img/'+$store.state.cat+'_'+$store.state.gnum
                   +
                   '.png'
                   " alt="작품이미지" />
                   </div>

                  
                   


                   <div class="explain">
                       <h6> {{$store.state.subtit[$store.state.gnum]}} </h6>
                       <div>{{$store.state.artist[$store.state.gnum]}}</div>
                       <div>{{$store.state.price[$store.state.gnum]}}</div>
                       </div>
               </article>
                </section>
   

        </div>
    </section>


    `,
};

//   <a href="#" @click.prevent="test()"> X </a>

// 내보내기
export default subTemp;

/* <article v-for="v in $store.state.cnt" v-bind:key="v"> */

/* 
 <img src="./img/promotion_0.png" alt="그림" />

*/

/* 

         <h6 v-for="(v, n) in $store.state.subtit" v-bind:key="n"> {{v[n]}}</h6>

*/
