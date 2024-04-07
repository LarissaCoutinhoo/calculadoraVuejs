const { createApp } = Vue;
createApp({
    data(){
        return{
            display: "0",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null
        }
    },
    methods:{
        LidarBotao(valor){
            switch (valor)
            {
                case '*':
                case '/':
                case '-':
                case '+':
                    this.LidarOperador(valor);
                    break;

                case '.':
                    this.LidarDecimal();
                    break;

                case 'C':
                    this.LidarLimpar();
                    break;

                case '=':
                    this.LidarIgual();
                    break;

                default:
                    this.LidarNumero(valor);
            }
        },
        LidarOperador(valor){
            if (this.numeroAnterior !== null) {
                this.Igual();
            }
            this.operador = valor;
            this.numeroAnterior = parseFloat(this.display);
            this.display = '0';
        },
        LidarDecimal(){
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },
        LidarLimpar(){
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        LidarIgual(){
            if (this.operador !== null) {
                this.numeroAtual = parseFloat(this.display);
                switch (this.operador) {
                    case '+':
                        this.display = this.numeroAnterior + this.numeroAtual;
                        break;
                    case '-':
                        this.display = this.numeroAnterior - this.numeroAtual;
                        break;
                    case '*':
                        this.display = this.numeroAnterior * this.numeroAtual;
                        break;
                    case '/':
                        this.display = this.numeroAnterior / this.numeroAtual;
                        break;
                }
                this.numeroAnterior = null;
                this.operador = null;
            }
        },
        LidarNumero(valor){
            if (this.display === '0' && valor !== '.') {
                this.display = valor;
            } else {
                this.display += valor;
            }
        },
    }
}).mount("#app");

