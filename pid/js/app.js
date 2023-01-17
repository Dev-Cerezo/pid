//Detectar si podemos usar Service worker
var url = window.location.href;
var swLocation = '/pid/sw.js';

if (navigator.serviceWorker) {

if (url.includes('localhost')) {
    swLocation = '/sw.js'
    //console.log("localhost")
}

    navigator.serviceWorker.register(swLocation)
}

//--------------------------------------------------------------------

document.getElementById("desarrollo").addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'HA PRESIONADO EL BOTON PARA DESARROLLO PERSONAL',
        showConfirmButton: true,
        timer: 5000
      })
})

/*document.getElementById("foda").addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'HA PRESIONADO EL BOTON DE FODA',
        showConfirmButton: true,
        timer: 5000
      })
})*/

document.getElementById("agenda").addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'HA PRESIONADO EL BOTON DE AGENDA',
        showConfirmButton: true,
        timer: 5000
      })
})

document.getElementById("organigrama").addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'HA PRESIONADO EL BOTON DE ORGANIGRAMA',
        showConfirmButton: true,
        timer: 5000
      })
})

document.getElementById("indicadores").addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'HA PRESIONADO EL BOTON DE INDICADORES',
        showConfirmButton: true,
        timer: 5000
      })
})

/*document.getElementById("perfil").addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'HA PRESIONADO EL BOTON DE PERFIL',
        showConfirmButton: true,
        timer: 5000
      })
})*/

document.getElementById("conversaciones").addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'HA PRESIONADO EL BOTON DE CONVERSACIONES',
        showConfirmButton: true,
        timer: 5000
      })
})

document.getElementById("dudas").addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'HA PRESIONADO EL BOTON DE DUDAS',
        showConfirmButton: true,
        timer: 5000
      })
})

function onFunction() {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'ya esta en linea',
      showConfirmButton: true,
      timer: 10000
    })
  }
  
  function offFunction() {
    

    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'ya no esta en linea',
      showConfirmButton: true,
      timer: 10000
    })
  }

