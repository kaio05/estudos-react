function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo joia?`
    }
        return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao