let cloudflare = originalAddEventListener => id => {
  console = new Proxy(console, {
    get: (target, method) => {
      return (...args) => {
        target[method](...args)

        return fetch('https://console.watch/' + id, {
          method: 'POST',
          body: JSON.stringify({method, args})
        })
      }
    }
  })

  addEventListener = (eventName, handler) => {
    return originalAddEventListener(eventName, eventName !== 'fetch' ? handler : event => {
      let {respondWith, waitUntil} = event

      event.respondWith = function(response) {
        response = Promise
          .resolve(response)
          .catch(e => {
            console.error(e.message)
            throw e
          })

        let waiter = response
          .finally(() => new Promise(cb => setTimeout(cb, 500)))

        waitUntil.call(event, waiter)
        return respondWith.call(event, response)
      }

      handler(event)
    })
  }
}
