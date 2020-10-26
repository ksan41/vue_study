<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
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
   methods:{ // mutations
    //  addOneItem(todoItem){
    //     const obj = {completed:false, item: todoItem}; //텍스트값, 체크 여부 담긴 개게
    //     localStorage.setItem(todoItem,JSON.stringify(obj)); // 저장로직
    //     this.todoItems.push(obj); //배열 맨 끝에 값 추가
    //  },
    //  removeOneItem(todoItem,index){
    //     localStorage.removeItem(todoItem.item);
    //     this.todoItems.splice(index,1);
    //  },
    //  toggleOneItem(todoItem,index){
    //   this.todoItems[index].completed = !this.todoItems[index].completed;

    //   localStorage.removeItem(todoItem.item); //로컬스토리지에서 삭제
    //   localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    //  },
    //  clearAllItems(){
    //     localStorage.clear();
    //     this.todoItems = [];
    //  }
   },
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
