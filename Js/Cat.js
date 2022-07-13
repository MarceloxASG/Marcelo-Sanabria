const boton = document.querySelector('#formulario');
boton.addEventListener('submit',aplicar);

function aplicar(e){
    e.preventDefault();
    const valor = document.querySelector('#nombre').value;

    Swal.fire({
            title: 'Gracias por mostrar su interés',
            html: '<b>¡Que tenga un lindo día :)!</b>',
            footer: `${valor}`,
            width: 600,
            padding: '2em',
            color: 'black',
            backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
            `,
            icon:'success',
            width:'50%',
            timer:6000,
            timerProgressBar: true,
        })
}