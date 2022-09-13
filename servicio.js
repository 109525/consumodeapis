const URI="https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un/top-tracks?market=US"


const TOKEN="Bearer BQASoKuBeOkRhstlSYo9jBPodQQ9Q131G0yLd87PO4QwmUQVbq3raRuu5kkV8czPSPaCNkwRdnR6G9a1MQpI3TwpoopLkB6k_Ee1VZXDXCM59uPXxvzRpeRT16BrkDD_5LyHIy6I19lCmjvlBk-ntGd334GrEgLd-KSbi7fxGK8NPci5F1z3cJ9AGPYTPfn9Kjs"

const PETICION={
    method:"GET",
    headers:{
        Authorization:TOKEN
    }
}

fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){})