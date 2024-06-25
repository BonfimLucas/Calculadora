(function main(){

    function criaCalculadora(){
        
        return {
            display: document.querySelector('#display'),

            inicia(){
                this.pressionaEnter()
                this.cliqueBotoes()
                
            },

            clearDisplay(){
                this.display.value = ' ';
    
            },

            pressionaEnter(){
                document.addEventListener('keydown', e => {
                    if (e.key === 'Enter'){
                        this.realizaCalculo()
                    }
                })
            },

            realizaCalculo(){
                let conta = this.display.value;

                try{
                    conta = eval(conta);

                    if(!conta){
                        alert('Conta Invalida.');
                        return;
                    }

                    this.display.value = String(conta);
                }catch(e){
                    alert('Conta invalida');
                    return;
                }
            },

            deleteOne(){
                this.display.value = this.display.value.slice(0, -1);
            },

            cliqueBotoes(){
                // this -> calculadora
                document.addEventListener('click', function(e){
                    const el = e.target;
                    
                    if(el.classList.contains('num')){
                        this.btnParaDisplay(el.innerText);
                    }
                    if(el.classList.contains('clear')){
                        this.clearDisplay();
                    }
                    if(el.classList.contains('del')){
                        this.deleteOne();
                    }
                    if(el.classList.contains('igual')){
                        this.realizaCalculo();
                    }
                }.bind(this));
            },

            btnParaDisplay(valor){
                this.display.value += valor;
            },

        };

    }

const calculadora = criaCalculadora();
calculadora.inicia();


})()