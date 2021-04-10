import TodoController from "./Controllers/TodoController.js"
import WeatherController from "./Controllers/WeatherController.js"
import ClockController from "./Controllers/ClockController.js"
import QuoteController from "./Controllers/QuoteController.js"

class App {
  todoController = new TodoController()
  //clockController = new ClockController()
  //quoteController = new QuoteController()
  weatherController = new WeatherController()
}

window["app"] = new App();
