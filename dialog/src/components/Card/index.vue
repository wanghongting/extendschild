<template>
    <div class="card-wrap" 
    :class="[bordered?'border':'',hover?'boxshaw':'']" 
    @mouseenter="enter"
    @mouseleave="leave">
        <div class="top">
            <slot name="title"/>
            <slot name="extra"/>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        bordered:{
            type:Boolean,
            default:true
        },
        noHover:{
            type:Boolean,
            default:false
        },
        bodyStyle:{
            type:Boolean,
            default:false
        }
    },
    components:{

    },
    data(){
        return {
            // bordered:'bordered',
            hover:this.noHover,
            // bodyStyle:"bodyStyle"
        }
    },
    computed:{

    },
    methods:{
        enter(){
            // console.log(121)
            this.hover = !this.hover
        },
        leave(){
            // console.log(121)
            this.hover = !this.hover
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
/* .card-wrap{
    border:1px solid #ccc;
} */
.top{
    height:30px;
    line-height: 30px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
}
.border{
    border:1px solid #ccc;
}
.boxshaw{
    box-shadow: 5px 5px 5px #000;
}
</style>