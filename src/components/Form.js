import { useState } from "react"

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário: ${name}`)
        console.log(`Senha: ${password}`)
        console.log('Cadastrou o usuário')
    }

    const [ name, setName ] = useState('Usuário')
    const [ password, setPassword ] = useState('Senha')


    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input id="name" type='text' placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type='password' id="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit"    value='Cadastrar' />
                </div>
            </form>
            <div>
                <p>Nome: {name}</p>
                <p>Senha: {password}</p>
            </div>
        </div>
    )
}

export default Form