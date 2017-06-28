import choo from "choo"
import html from "choo/html"
import trim from "1-liners/module/trim"


// 🎒 App


const app = choo()

app.use(storage)
app.route("/", indexView)
app.mount("body")



// 🌳 State


function storage (state, emitter) {
  // initial state
  state.msg = "Sup?"
}



// 🍯 Views


function indexView (state, emit) {
  return html`
    <body>
      <h1>${ trim(state.msg) }</h1>
    </body>
  `
}
