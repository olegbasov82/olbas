
let app = new Vue({
    el:'#app',
    data:{
        title:'AUDI A7',
        show: false,

    },
    methods:{
        showText: function(){
             this.show = !this.show
        },
        
    },  
})
