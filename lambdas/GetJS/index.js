let cloudflare=e=>t=>{console=new Proxy(console,{get:(e,o)=>(...l)=>(e[o](...l),fetch("https://console.watch/"+t,{method:"POST",body:JSON.stringify({method:o,args:l})}))}),addEventListener=((t,o)=>e(t,"fetch"!==t?o:e=>{let{respondWith:t,waitUntil:l}=e;e.respondWith=function(o){let n=(o=Promise.resolve(o).catch(e=>{throw console.error(e.message),e})).finally(()=>new Promise(e=>setTimeout(e,500)));return l.call(e,n),t.call(e,o)},o(e)}))};
let init = function(cloudflare) {
  let code
  let ws = new WebSocket('wss://ws.console.watch')
  let $console = document.querySelector('.console')

  let connectionStart = Date.now()

  $console.addEventListener('click', event => {

    switch (event.target.className) {
      case 'copycloudflare':
        event.preventDefault()

        copy(code)

        $console.insertAdjacentHTML('beforeend', `
          <li>Copied! Next, paste this code at the top of <a href='https://cloudflareworkers.com' target='_blank'>your worker code</a>, call a console method (like <b>.log</b> or <b>.error</b>), and run the worker.</li>
        `)

        break
    }
  })

  ws.onmessage = message => {
    $console.lastElementChild.innerHTML += ` Connected in ${Date.now() - connectionStart} ms.`

    code = `(${cloudflare})(addEventListener)('${message.data}')\n`

    $console.insertAdjacentHTML('beforeend', `
      <li>
        console.watch is a remote console polyfill for Cloudflare Workers by <a href="https://twitter.com/jedschmidt" target="_blank">@jedschmidt</a>. It redirects all console.* calls to this web page in real-time.
      </li>
      <li>
        To use it in your project, first <a class="copycloudflare">copy the polyfill code</a> (${code.length} bytes).
      </li>
    `)

    ws.onmessage = message => {

      $console.insertAdjacentHTML('beforeend', `
        <li>
          It worked! The code you pasted in your worker will work until this page is closed, so re-copy/paste it as needed.
        </li>
      `)

      ws.onmessage = message => {
        let {method, args} = JSON.parse(message.data)
        let $li = document.createElement('li')
        $li.className = method
        let $pre = document.createElement('pre')
        for (let arg of args) {
          let json = JSON.stringify(arg, null, 2) + ' '
          let $text = document.createTextNode(json)
          $pre.appendChild($text)
        }

        $li.appendChild($pre)
        $console.appendChild($li)
      }

      ws.onmessage(message)
    }
  }

  function copy(text) {
    let {clipboard} = navigator

    if (clipboard) return clipboard.writeText(text)

    let textArea = document.createElement('textarea')
    textArea.value = text;
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/javascript;charset=utf-8'},
    body: `void ${init}(${cloudflare})`
  }
}
