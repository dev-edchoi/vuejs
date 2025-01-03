import { createApp } from 'vue'

const App = {
    render() {
        return "this is the app's entrance";
    }    
}

const app = createApp(App)

app.mount('#app')
