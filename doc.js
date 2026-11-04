function responderDespuesde2sec() {
    return new Promise (resolver => {
        setTimeout(() => {
            resolver('respuesta');
        }, 2000);
    });
}
async function asyncCall () {
    console.log('llamando');
    const resultado = await responderDespuesde2sec();
    console.log(resultado);
}
asyncCall();