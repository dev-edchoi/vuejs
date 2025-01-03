import { createApp } from 'vue/dist/vue.esm-bundler.js'

// const App = {
//     template: "This is the app's entrance",
// }

// const App = {
//     render() {
//         return "This is the app's entrance"
//     } 
// }

// const Description = {
//     template: "This is the app's entrance",
// }

// const App = {
//     components: { Description },
//     template: '<Description />'
// }

// const App = {    
//     template: "<div>This is te apps entrance</div>"
// }

const App = {    
    template : `
        <h1>This is the app's entrance</h1>
        <h2>we are exploring template syntax</h2>
    `,
}

const app = createApp(App)

app.mount('#app')