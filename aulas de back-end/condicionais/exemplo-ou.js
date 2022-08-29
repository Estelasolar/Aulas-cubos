const temImgresso = true;
const censura = 16;
const idade = 18;
const comPais= true

//ter um ingresso e ter idade maior ou igual a censura;
// usando o ||;

if(temImgresso){
    if(idade >= censura|| comPais){
        console.log("pode entrar")
    }else{
        console.log("barrada")
    }
}else{
    console.log("barrada")
}

