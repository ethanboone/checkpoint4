import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Todo from "./Models/Todo.js"

class AppState extends EventEmitter {
  /** @type {Todo[]} */
  todo = [new Todo('To Do')]

  tasks = []

  weather = {}

  quote = {}

  clock;
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
