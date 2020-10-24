<template>
  <div class="clearAllContainer">
      <!-- 전체삭제버튼 -->
      <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo(){
      this.$emit('clearAll');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer{
    width: 8.5rem;
    height:50px;
    line-height:50px;
    background-color: white;
    border-radius:5px ;
    margin: 0 auto;
  }

  .clearAllBtn:hover{
    cursor: pointer;
    opacity: 60%;
  }

  .clearAllBtn{
    color: #e20303;
    display: block;
  }
</style>