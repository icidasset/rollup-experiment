import choo from "choo"
import html from "choo/html"


// 🎒 App


const app = choo()

app.use(storage)
app.route("/", indexView)
app.mount("body")



// 🌳 State


function storage (_, emitter) {
  // initial state
  return {}
}



// 🍯 Views


function indexView (state, emit) {
  return html`
    <body>
      <h1>Hi!</h1>
    </body>
  `
}
