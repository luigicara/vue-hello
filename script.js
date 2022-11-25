const { createApp } = Vue;

    createApp({
        data() {
            return {
                message: 'Hello Vue!',
                image: 'https://loremflickr.com/320/240'
            }
        }
    }).mount('#app')