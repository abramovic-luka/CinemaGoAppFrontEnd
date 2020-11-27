var login = new Vue({
    el: "#login",
    data: {
        username: null,
        password: null,
    },
    methods: {
        fun: function () {
            if (this.username == null) this.username = "";
            if (this.password == null) this.password = "";

            console.log("it sould run");
            axios.post(`https://cinema-app2.herokuapp.com/login`, {
                params: { username: this.username, pasword: this.password }
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err));
        }
    }
})
