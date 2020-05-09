function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.querySelector('#txtano')
var res = document.querySelector('div#res')

if (fano.value.length ==0 || Number(fano.value) > ano) {
    window.alert('[ERRO]') 
} else {
    var fsex = document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    
}

    if (fsex[0].checked){
        genero = 'Homem'

        if(idade >=0 && idade<12) {
            //criança
            img.setAttribute('src','foto-bebe-m.png')
        } else if (idade <22){
            //jovem
            img.setAttribute('src', 'foto-jovem-m.png')
        } else if ( idade < 50) {
            //adulto
            img.setAttribute('src','foto-adulto-m.png')

        } else {
            //idoso
            img.setAttribute('src','foto-idoso-m.png')
        }


    } else if (fsex[1].checked){
        genero = 'Mulher'

        if(idade >=0 && idade<13) {
            //criança
            img.setAttribute('src','foto-bebe-f.png')
        } else if (idade <22){
            //jovem
            img.setAttribute('src','jovemf.png')
        } else if ( idade < 50) {
            //adulto
            img.setAttribute('src','foto-adulto-f.png')
        } else {
            //idoso
            img.setAttribute('src','foto-idoso-f.png')
        }
 
    }
    res.style.textAlign ='center'
    res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}



// < !--
//     adulto m
// adulto f https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
// jovem m
// jovem f https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// kid m
// kid f https://images.pexels.com/photos/1139613/pexels-photo-1139613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// idoso m
// idoso f https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940


// -->