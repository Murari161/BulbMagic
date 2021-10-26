const bulbMagic = {
    data() {
        return{
            status: true,
        };
    },
    methods: {
        changeStatus(){
            this.status = !this.status;
        }
    }
}

Vue.createApp(bulbMagic).mount('#app')