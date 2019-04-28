<template>
  <div>
    <h1>Kanban Board</h1>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Task" v-model="task">
      </div>
      <button id="addButton" type="button" class="btn btn-success" @click="addTask">Add</button>
    </form>
    <div class="row">
      <div class="col-sm">
        <h3>To-do</h3>
        <div v-for="(todoTask, index) in todo" class="alert alert-warning" :key="index" role="alert">
          <p>{{ todoTask.task }}</p>
          <button class="btn btn-danger" @click="deleteTask(index, todo)">Delete</button>
          <button class="btn btn-primary ml-5" @click="moveTask(todo, inProgress, index)">→</button>
        </div>
      </div>
      <div class="col-sm">
        <h3>In progress</h3>
        <div v-for="(ipTask, index) in inProgress" class="alert alert-primary" :key="index" role="alert">
          <p>{{ ipTask.task }}</p>
          <div class="row">
            <div class="col-sm">
              <button class="btn btn-success" @click="moveTask(inProgress, todo, index)">←</button>
            </div>
            <div class="col-sm">
              <button class="btn btn-success" @click="moveTask(inProgress, validating, index)">→</button>
            </div>
          </div>
          <button class="btn btn-danger" @click="deleteTask(index, inProgress)">Delete</button>
        </div>
      </div>
      <div class="col-sm">
        <h3>Validating</h3>
        <div v-for="(validatingTask, index) in validating" class="alert alert-danger" :key="index" role="alert">
          <p>{{ validatingTask.task }}</p>
          <div class="row">
            <div class="col-sm">
              <button class="btn btn-primary" @click="moveTask(validating, inProgress, index)">←</button>
            </div>
            <div class="col-sm">
              <button class="btn btn-primary" @click="moveTask(validating, finished, index)">→</button>
            </div>
          </div>
          <button class="btn btn-danger" @click="deleteTask(index, validating)">Delete</button>
        </div>
      </div>
      <div class="col-sm">
        <h3>Finished</h3>
        <div v-for="(finishedTask, index) in finished" class="alert alert-success" :key="index" role="alert">
          <p>{{ finishedTask.task }}</p>
          <span v-if="!finishedTask.closed">
            <button class="btn btn-danger" @click="moveTask(finished, validating, index)">←</button>
            <button class="btn btn-success ml-5" @click="finishTask(index)">Close task</button>
          </span>
          <button class="btn btn-danger ml-5" @click="deleteTask(index, finished)">Delete</button>
        </div>
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
      this.todo.push({
        task: this.task,
        closed: false
      })
      this.task = ''
    },
    moveTask (from, to, index) {
      if (!from[index].closed) {
        to.push(from[index])
        this.deleteTask(index, from)
      }
    },
    deleteTask (index, list) {
      list.splice(index, 1)
    },
    finishTask (index) {
      this.finished[index].closed = true
    },
    cleanBoard () {
      this.todo = []
      this.inProgress = []
      this.validating = []
      this.finished = []
    }
  }
}
</script>

<style scoped>
h1,h3{
  color:navy;
}
form{
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;
}
#addButton{
  padding: 10px;
  width: 100px;
}
</style>
