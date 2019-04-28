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
})
