// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello Vue Js!",
            imgSrc: "https://picsum.photos/300",
            imgDesc: "Random image",
            titleColor: "red"
        }
    },
    methods: {
        changeTitleColor() {
            if (this.titleColor === "red") {
                this.titleColor = "blue";
            } else {
                this.titleColor = "red";
            }
        }
    }
}).mount("#app");