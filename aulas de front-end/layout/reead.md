*= quando for o padrão

layout flexbox

-flexbox - flex box = caixa felxivel
-alinhamento coerente em dois eixos
- tamanhos flexiveis
- ideal ara dispor elementos


flex - containers

(
    containers.{
    display: flex;
}
)

eixos dos flexbox
-eixo direto: a direção em que os intens estao dispostos 
    *se ficam lado a lado, horizintal
    *se um em cima do outro, vertical

-eixo cruzado: a outra direção

flex direction:

-row*- padrão
-column
-row-reverse
-column-reverse


eixo direto: justfy-content

-flex-start*
-flex-end
-center
-space-between
-space-around
space-evenly


eixo cruzado: align-items

-flex-start
-flex-end
-center
-stretch*
-baseline

flex wrap:

wrap = os elementosdescems para a linha de baixo 
no wrap* = os elementos noa vao pra baixo, eles tentar caber ao maximo na linha (mesmo que precisem diminuir)


item{
    flex-grow: 0; crecer proporcionalmente 
    flex-shrink:1; diminuir proporcionamente
    flex-basic: auto; tentar se manter ao maximo nas configurações
}

