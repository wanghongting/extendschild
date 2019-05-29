
import Curtain from '../components/curtain/'
import Imgs from '../components/Imgs/'
import Dialogconfirm from '../components/Dialog'
//步骤是首先抛出一个对象 install初始一下 (Vue,options){
// 里面是一个一个的方法 像构造函数中原型上的方法 
//}
export default {
    install(Vue, options) {
        //确认框
        Vue.prototype.$dialog = (str) =>{
            const Dialog = Vue.extend(Dialogconfirm)
            const Dialogok = new Dialog({
                propsData:{
                    title:str,
                    isshow:true
                },
                created(){
                    this.$on('closes',()=>{
                        this.isshow=false
                    })
                }
            })
            Dialogok.$mount()
            document.body.appendChild(Dialogok.$el)
        }
        // 广告弹框
        Vue.prototype.$curtain = () => { 
            const CurtainClass = Vue.extend(Curtain)
            const CurtainComponent = new CurtainClass({
                propsData: {
                    isOpened:true,
                    closeBtnPosition:"top"
                },
                created() {
                    this.$on("close",()=>{
                        this.isOpened = false
                    })
                },
            })
            //    console.log(CurtainClass,CurtainComponent)
            CurtainComponent.$mount()
            document.body.appendChild(CurtainComponent.$el)
        },
        // 图片放大
        Vue.prototype.$showimg = (str) => {
            const ImgsClass = Vue.extend(Imgs)
            const ImgsComponent = new ImgsClass({
                propsData: {
                    type:str,
                    flag:true
                },
                created() {
                    this.$on("close",()=>{
                        this.flag = false
                    })
                },
            })
            //    console.log(ImgsClass,ImgsComponent)
            ImgsComponent.$mount()
            document.body.appendChild(ImgsComponent.$el)
        }
    }
}
// 1.先引入拓展的子类组件A 放在install（Vue,options）中{
// 2.let a = Vue.extends(A) 继承   let newa = new a({
//      传参 propdats:{ 默认状态 或者从父组件接来的参数}
//      生命周期 created(){可以做的事 this.$on(监听子组件发来的状态)}
//})
// 3.挂在实例 newa.$mount()
// 4.挂载到真实dom上 document.body.appendChild(newa.$el)
//}