        
        // const nome = prompt("Qual é o seu nome?")
        // alert("Olá " + nome + " Seja Bem Vindo")

        // Botão Menu

        const bntmobile = document.getElementById('btn-mobile');

        function toggleMenu(event) {
            if(event.type === 'touchstart') event.preventDefault()
            const nav = document.getElementById('nav');
            nav.classList.toggle('active');

            const active = nav.classList.contains('active');
            event.currentTarget.setAttribute('aria-expanded', active);
            if (active) {
                event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
            } else{
                    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
                }
        }

        bntmobile.addEventListener('click', toggleMenu);
        bntmobile.addEventListener('touchstart', toggleMenu);

       

        // Variaveis pegando as referencias do input
    

        let invalidCampo = document.querySelectorAll('.invalidCampo')
        let campo = document.querySelectorAll('.requireds')
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let validNome = false
        let validEmail = false
        let validSenha = false
        let validconfirmSenha = false
        let validCad = document.querySelector('.validRegistration')
        let invalidCad = document.querySelector('.invalidRegistration')

        let btnError = document.querySelectorAll('#btn-Error')
        let btnValid = document.querySelectorAll('#btn-Valid')
        let btnSenha = document.querySelector('#btn-senha')
        let btnConfirm = document.querySelector('#btn-confirmSenha')
        let confirmSenha = document.querySelector('#confirmSenha')


        // Função ver senha
        btnSenha.addEventListener('click', (e) => {
          let inputSenha = document.querySelector('#senha')

          if (inputSenha.getAttribute('type') == 'password') {
            inputSenha.setAttribute('type', 'text')
          } else {
            inputSenha.setAttribute('type', 'password')
          }
          e.preventDefault()
        })

        btnConfirm.addEventListener('click', (e) => {
            let inputConfSenha = document.querySelector('#confirmSenha')

            if (inputConfSenha.getAttribute('type') == 'password') {
                inputConfSenha.setAttribute('type', 'text')
            }   else {
                inputConfSenha.setAttribute('type', 'password')
            }
            e.preventDefault()
        })
         // fim função */

        // Função confirmar senha
     /* confirmSenha.addEventListener('keyup', () => {

            if (confirmSenha.value != campo[2].value) {
                confirmSenha.setAttribute('style', 'background: rgba(255, 0, 0, 0.140)')
                validconfirmSenha = false
            }   else {
                confirmSenha.setAttribute('style', 'background: rgba(4, 180, 4, 0.180)')
                validconfirmSenha = true
            }
        
        })
        
       /* nome.addEventListener('keyup', () => {
            if (nome.value.length < 4) {
                nome.setAttribute('style', ' background: rgba(255, 0, 0, 0.140)')
                validNome = false
            }   else {
                nome.setAttribute('style', ' background: rgba(4, 180, 4, 0.180) ')
                validNome = true
            }
        }) */

            function setError(index) { // Função de erro no campo
                invalidCampo[index].style.display = 'block'
                btnError[index].style.display = 'block'
                btnValid[index].style.display = 'none'
              
            }

            function setValido(index) { // Função de campo valido
                invalidCampo[index].style.display = 'none'
                btnError[index].style.display = 'none'
                btnValid[index].style.display = 'block'
            
            }

            // validando campos 
            function validateName() {
                if(campo[0].value.length < 3) {
                    validNome = false
                    setError(0)
                    
                }   else {
                    validNome = true
                    setValido(0)
                    
                }
            }

            function validateEmail() {
                if(!emailRegex.test(campo[1].value)) {
                    validEmail = false
                    setError(1)
                } else {
                    validEmail = true
                    setValido(1)
                     
                }
            }

            function validateSenha() {
                if(campo[2].value.length < 8) {
                    validSenha = false
                    setError(2)
                   
                } else {
                    validSenha = true
                    setValido(2)
                    
                }
            }

            function validateConfirmSenha() {
                if(campo[3].value != campo[2].value) {
                    validconfirmSenha = false
                    setError(3)
                }  else {
                    validconfirmSenha = true
                    setValido(3)
                }
            }

       /* email.addEventListener('keyup', () => {
            if (email.value.length < 5) {
                email.setAttribute('style', 'background: rgba(255, 0, 0, 0.140)')
                validEmail = false
            }   else {
                email.setAttribute('style', 'background: rgba(4, 180, 4, 0.180)')
                validEmail = true
            }
        }) */

        // Função para cadastrar 
        function cadastrar() {
            if (validNome && validEmail && validSenha && validconfirmSenha) {
                let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]' )

                 listaUser.push(
                    {
                        nomeCad: nome.value,
                        emailCad: email.value,
                        senhaCad: senha.value
                    }
                 )

                localStorage.setItem('listaUser', JSON.stringify(listaUser))

                validCad.setAttribute('style', 'display: block')
                invalidCad.setAttribute('style', 'display: none')

                setTimeout(() => {

                    window.location.href = '../index.html'

                }, 5000)
                

            }   else {
                invalidCad.setAttribute('style', 'display: block')
                validCad.setAttribute('style', 'display: none')
            }
        }
       

        