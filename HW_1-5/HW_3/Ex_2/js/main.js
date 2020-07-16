
let app = new Vue({
    el:'#app',
    data:{
        inputText: 'Внесите изменения', 
        flag: false
    },
    methods:{
        showInput: function(){
             this.flag = !this.flag
        }
        
    }, 

 
})
