<template>
  <div>
    <h1>Kanban Board</h1>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Task" v-model="task">
      </div>
      <button class="btn btn-success" @click="addTask">Add</button>
    </form>
    <div class="row">
      <div class="col-sm">
        <h3>To-do</h3>
      </div>
      <div class="col-sm">
        <h3>In progress</h3>
      </div>
      <div class="col-sm">
        <h3>Validating</h3>
      </div>
      <div class="col-sm">
        <h3>Finished</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      task: '',
      todo: [],
      inProgress: [],
      validating: [],
      finished: []
    }
  },
  methods: {
    addTask () {
      console.log('Hola')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,h3{
  color:navy;
}
form{
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;
}
button{
  padding: 10px;
  width: 100px;
}
</style>
