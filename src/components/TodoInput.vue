<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>

    <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
            경고!
            <span>
                <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
            </span>
        </h3>
        <p slot="body">
            할 일을 입력하세요.
        </p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data(){
        return {
            newTodoItem:"",
            showModal: false
        }
    },
    methods: {
        addTodo(){
            // 입력 값이 있을 때만 실행하도록함
            if (this.newTodoItem !== ''){
                // 상위 컴포넌트(App)에 보낼 메서드 정의, 보낼 값
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem', text);
                this.clearInput();
            } else{
                this.showModal = !this.showModal;
            }
            
        },
        clearInput(){
             this.newTodoItem="";
        }
    },
    components:{
        Modal
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background:white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}

.closeModalBtn:hover{
    cursor: pointer;
    opacity: 60%;
}

.closeModalBtn{
    color:orangered;
}
</style>