const temImgresso = true;
const censura = 16;
const idade = 18;

//ter um ingresso e ter idade maior ou igual a censura;

if(temImgresso === true){
    if (idade >= censura){
        console.log("Pode entrar");
    }else{
        console.log("Barrada pela censura");
    }

}else{
    console.log("Barrada por falta de ingresso ");
}