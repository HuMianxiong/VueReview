<template>
  <div class="search">
    <Header :isLeft="true" title='搜索'/>
    <div class="search_header">
        <div action="" class="search_wrap">
            <i class="fa fa-search"></i>
            <input type="text" v-model="key_word" placeholder="输入商家，商品信息">
            <button>搜索</button>
        </div>
    </div>
    <div class="shop" v-if="result">
        <div>
            <SearchIndex :data="result.restaurants"/>
            <SearchIndex :data="result.words"/>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import SearchIndex from '../components/SearchIndex'
export default {
    name:"Search",
    components:{
        Header,
        SearchIndex
    },
    data(){
        return {
            key_word:"",
            result:null,
        }
    },
    watch:{
        key_word(){
            this.keyWordChange()
        }
    },
    methods:{
        keyWordChange(){
            // console.log(this.key_word)
            this.$axios(`/api/profile/typeahead/${this.key_word}`).then(res=>{
                console.log(res.data);
                this.result = res.data;

            })
            .catch(()=>{
                this.result = null
                // console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.search{
    width:100%;
    height:100%;
    overflow:auto;
    box-sizing:border-box;
}
.search_header{
    margin-top:45px;
    background:#fff;
    padding:0 4.266667vw;
}
.search_header .search_wrap{
    padding:2.933333vw  2.933333vw 2.933333vw 0;
    display: flex;
    align-items:center;
    position:relative;
}
.search_wrap .fa-search{
    width:2.933333vw;
    height:2.933333vw;
    color:#888;
    position:absolute;
    top:4.666666vw;
    left:2.933333vw;
}
.search_wrap input{
    flex-grow:1;
    border-radius:0.266667vw;
    background-color:#f8f8f8;
    padding:1.733333vw 4vw 1.733333vw 8.8vw;
    color:#666;
    outline:none;
    border:none;

}
.search_wrap button{
    outline:none;
    border:none;
    background:#fff;
    color:#333;
    font-size:0.426667rem;
    font-weight: 700;
    margin-left:2.933333vw;
    font-size: 14px;
}
.shop{
    width:100%;
    height:calc(100% - 95px);
    overflow:auto;
}

</style>