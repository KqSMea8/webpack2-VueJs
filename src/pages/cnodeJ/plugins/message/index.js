import Vue from 'vue'

const MessageConstructor = Vue.extend(require('./message.vue'))

let instance = null
const instances = []
let seed = 1

const INITZINDEX = 1101

const Message = (options) => {
  options || (options = {})

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  const userOnClose = options.onClose
  const id = `message_${seed++}`

  options.onClose = () => {
    Message.close(id, userOnClose)
  }

  instance = new MessageConstructor({
    data: options
  })

  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = INITZINDEX + seed
  instances.push(instance)

  return instance.vm
};

['success', 'warning', 'info', 'error'].forEach((type) => {
  Message[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }

    options.type = type

    return Message(options)
  }
})

Message.close = (id, userOnClose) => {
  instances.every((val, key) => {
    if (id === val.id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[key])
      }
      instances.splice(key, 1)

      return false
    }

    return true
  })
}

export default Message
