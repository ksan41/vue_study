<template>
  <div>
     <ul>
         <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
             <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                v-on:click="toggleComplete(todoItem,index)"></i>
             <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
             <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
                 <i class="fas fa-trash"></i>
             </span>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            todoItems:[]
        }
    },
    methods:{
        removeTodo:function(todoItem,index){
            console.log(todoItem,index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        toggleComplete:function(todoItem,index){
            todoItem.completed = !todoItem.completed; //클릭시 true로 변경

            // 현재 update가 없기때문에 삭제해서 다시 갱신함.
            localStorage.removeItem(todoItem.item); //로컬스토리지에서 삭제
            localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
        }
    },
    created:function(){

        // 로컬스토리지에 데이터가 있다면 li 생성
        if(localStorage.length > 0){
            for(var i = 0; i<localStorage.length;i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    // input에서 문자열로 데이터를 넣었기 때문에 다시 JSON형식으로 변환
                   // console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    //this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.removeBtn{
    margin-left: auto;
    color: #de4343;
}
.textCompleted{
    color:lightgrey;
}
.checkBtnCompleted{
    color:lightgray;
}
</style>