metodos de string

includes() = achar um texto dentro de uma texto.

str.includes(searchString[, position])

indexOF() = onde esta um determinado texto dentro de outro texto, retorna um indice

srt.indexOF(searchValue[, fromIndex])



lastindexOF() = ele informa o ultimo indice
str.lastIndexOF(searchValue[, fromIndex])

slice() = fatia de uma string
str.slice(fromIndex(comeco e final)

raplace()= substituir, recebe dois argumentos (text, newtext)
var.replace(text, newText)

toUpperCase()=coloca as letras em maiusculo
texto.toUpperCase();

trim()= remove espaços em branco tanto no inicio quanto no fim de uma string.
text.trim(); texte: cosole.log(`_${variavel.trim()}_`)

padStart() = preencher uma string, colocando text no inicio dela(varias vezes, se necessário) ate que a string atinja o tamanho length
varr.padStart(lenght,"****"(texto que quer adicionar))

split() = transforma uma string numa array de strings menores, separado-a em todos onde encontrar o argumento text.
variavel.split(""); (quebra onde tem espaços)
