//DECLARANDO O ARRAY DE IMAGE

let imagens =[
    'src/assets/imagem1.avif',
    'src/assets/imagem2.avif',
    'src/assets/imagem3.avif',
];

//DECLARANDO AS VARIAVEIS

let i=0;
let tempo =3000;

//CRIANDO A FUNÇÃO SLIDESHOW

function slideshow(){
    document.getElementById('image').src=imagens[i];
    i++;
    if( i ==imagens.length){
        i=0;
    }
    setTimeout("slideshow()",tempo)
}
slideshow()
