const jogadores =[
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]

  let numeros1= 0
  let numeros0 = 0

  for(let item of jogadores){
   if( item.jogada === 1){
    numeros1++
   }else if( item.jogada === 0){
    numeros0++
   }
  }

  if(numeros1=== 1){
    
    for(let item of jogadores){
        if(item.jogada === 1){
            console.log(item.nome)
        }
    }

  }else if(numeros0 === 1){
    
    for(let item of jogadores){
        if(item.jogada === 0){
            console.log(item.nome)
        }
    }


  }else{
    console.log("NINGUEM")
  }