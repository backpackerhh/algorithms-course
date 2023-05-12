// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.callbacks = {}
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.callbacks.hasOwnProperty(eventName)) {
      this.callbacks[eventName].push(callback)
    } else {
      this.callbacks[eventName] = [callback]
    }
  }

  // Trigger all callbacks associated with a given eventName
  trigger(eventName) {
    for (let callback of this.callbacks[eventName] || []) {
      callback()
    }
  }

  // Remove all event handlers associated with the given eventName
  off(eventName) {
    delete this.callbacks[eventName]
  }
}

module.exports = Events
