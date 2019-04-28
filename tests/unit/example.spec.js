import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Board from '@/components/Board.vue'

describe('Board.vue', () => {
  const testTask = 'test'
  let wrapper

  beforeEach(function () {
    wrapper = shallowMount(Board)

    wrapper.vm.task = testTask
    wrapper.vm.addTask()
  })

  it('add new task', () => {
    let taskNames = wrapper.vm.todo.map(task => task.task)

    expect(taskNames).to.include(testTask)
  })
  it('delete task', () => {
    wrapper.vm.deleteTask(0, wrapper.vm.todo)

    let taskNames = wrapper.vm.todo.map(task => task.task)

    expect(taskNames).to.not.include(testTask)
  })
  it('moved task in no longer in the list ', () => {
    wrapper.vm.moveTask(wrapper.vm.todo, wrapper.vm.inProgress, 0)

    let todoTaskNames = wrapper.vm.todo.map(task => task.task)

    expect(todoTaskNames).to.not.include(testTask)
  })
  it('moved task is in the new list', () => {
    wrapper.vm.moveTask(wrapper.vm.todo, wrapper.vm.inProgress, 0)

    let inProgressTaskNames = wrapper.vm.inProgress.map(task => task.task)

    expect(inProgressTaskNames).to.include(testTask)
  })
  it('closed task can not move', () => {
    wrapper.vm.moveTask(wrapper.vm.todo, wrapper.vm.inProgress, 0)
    wrapper.vm.moveTask(wrapper.vm.inProgress, wrapper.vm.validating, 0)
    wrapper.vm.moveTask(wrapper.vm.validating, wrapper.vm.finished, 0)

    wrapper.vm.finished[0].closed = true

    wrapper.vm.moveTask(wrapper.vm.finished, wrapper.vm.validating, 0)

    let finishedTaskNames = wrapper.vm.finished.map(task => task.task)

    expect(finishedTaskNames).to.include(testTask)
  })
})
