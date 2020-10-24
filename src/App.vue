<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" 
              v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
   data(){
     return {
      todoItems: []
     }
   },
   methods:{
     addOneItem(todoItem){
        const obj = {completed:false, item: todoItem}; //텍스트값, 체크 여부 담긴 개게
        localStorage.setItem(todoItem,JSON.stringify(obj)); // 저장로직
        this.todoItems.push(obj); //배열 맨 끝에 값 추가
     },
     removeOneItem(todoItem,index){
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index,1);
     },
     toggleOneItem(todoItem,index){
      this.todoItems[index].completed = !this.todoItems[index].completed;

      localStorage.removeItem(todoItem.item); //로컬스토리지에서 삭제
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
     },
     clearAllItems(){
        localStorage.clear();
        this.todoItems = [];
     }
   }
   ,
  created(){
        // 로컬스토리지에 데이터가 있다면 li 생성
        if(localStorage.length > 0){
            for(let i = 0; i<localStorage.length;i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    // input에서 문자열로 데이터를 넣었기 때문에 다시 JSON형식으로 변환
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
  }
  ,
  components:{
   TodoHeader,
   TodoInput,
   TodoList,
   TodoFooter
 }
}
</script>

<style>
  body{
    text-align: center;
    background: #F6F6F6;
  }

  input{
    border-style:groove;
    width:200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
