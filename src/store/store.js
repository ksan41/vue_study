import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
		if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
		return arr;
	}
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations:{
        addOneItem(state, todoItem){
            const obj = {completed:false, item: todoItem}; //텍스트값, 체크 여부 담긴 개게
            localStorage.setItem(todoItem,JSON.stringify(obj)); // 저장로직
            state.todoItems.push(obj); //배열 맨 끝에 값 추가
            // console.log(this);
         },
         removeOneItem(state,payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
         },
         toggleOneItem(state,payload){
          state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    
          localStorage.removeItem(payload.todoItem.item); //로컬스토리지에서 삭제
          localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
         },
         clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
         }
    }
});