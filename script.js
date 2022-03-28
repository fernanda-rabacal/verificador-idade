function verificar() {
    let data = new Date() 
    let ano = data.getFullYear()//captar o ano de hoje para poder calcular a idade
    let fano = document.getElementById('txtano') //capta a informação do ano colocado no site(input ano)
    let res = document.getElementById('res') //capta o id 'res' para modificar conforme a function é ativada
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente') //esse if é caso os dados não estejam corretos
    } else {
        let fsex = document.getElementsByName('radsex') 
        let idade = ano - Number(fano.value)
        let genero = ""
        let img = document.createElement('img')
        img.setAttribute('id','foto') // atribui um id com nome foto para a let img. o mesmo que <img id='foto'>
        if (fsex[0].checked) { //fsex[0] corresponde ao primeiro input radio, no caso 'masculino'
            genero= "Homem"
            if (idade>=0 && idade<10){
                img.setAttribute('src', 'menino.jpg')//atribui um source(imagem) na variavel img
            } else if (idade>=11 && idade<20) {
                img.setAttribute('src','menino-velho.jpg')//adolescente
            } else if (idade>=21 && idade<40) {
                img.setAttribute('src','homem-jovem.jpg')//jovem
            } else if (idade>=41 && idade<65) {
                img.setAttribute('src','homem-maduro.jpg')//maduro
            } else {
                img.setAttribute('src','idoso.jpg')//idoso
            }
        } else {
            genero= "Mulher"
            if (idade>=0 && idade<10){
                img.setAttribute('src','menina.jpg')
            } else if (idade>=11 && idade<20) {
                img.setAttribute('src','menina-velha.jpg') 
            } else if (idade>=21 && idade<40) {
                img.setAttribute('src','mulher-jovem.jpg') 
            } else if (idade>=41 && idade<65) {
                img.setAttribute('src','mulher-madura.jpg') 
            } else {
                img.setAttribute('src','idosa.jpg') 
            }
        }
        res.style.textAlign = 'center' //centraliza o texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img) //para a imagem selecionada nas condições aparecer
    }
}