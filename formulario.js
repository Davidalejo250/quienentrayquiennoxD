document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
 
   // campos de entrada del formulario
   const nombreInput = document.getElementById('nombre');
   const edadInput = document.getElementById('edad');
   const nacionalidadInput = document.getElementById('nacionalidad');
 
   // valores ingresados
   const nombre = nombreInput.value;
   const edad = parseInt(edadInput.value);
   const nacionalidad = nacionalidadInput.value;
 
   //  condiciones para que entres a la party 7u7
   if (nombre.trim() !== '' && !isNaN(edad) && edad >= 18 && edad <= 30 && ['mexicana', 'venezolana', 'argentina', 'peruana'].includes(nacionalidad)) {
     const lista = document.getElementById('lista');
 
     // invitado a la  fiesta se agrega a la lista 
     const listItem = document.createElement('li');
 
     // datos del invitado
     listItem.textContent = `Nombre: ${nombre}, Edad: ${edad}, Nacionalidad: ${nacionalidad}`;
     lista.appendChild(listItem);
 
     // Limpia los campos de entrada del formulario
     nombreInput.value = '';
     edadInput.value = '';
     nacionalidadInput.value = '';
   }
 });