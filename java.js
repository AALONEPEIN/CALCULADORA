
        // Funciones de JavaScript para la calculadora
        function addToDisplay(value) {
            document.getElementById("display").value += value; 
            // esta funcion toma el valor del elemento text referenciado por display y el parametro .value+=value toma el valor en value en display y le agrega el nuevo

        }

        function clearDisplay() {
            document.getElementById("display").value = "";
        }// toma el valor en pantalla de referencia display y le sustitulle elvalor con nada

        function calculate() {
            let displayValue = document.getElementById("display").value;
            let result = eval(displayValue);
            document.getElementById("display").value = result;
// se declara la variable displayvalue y sele asigna el valor en el display actual 
// result se declara  y se usa la funcion eval que sirve para evaluar texto y obtener operaciones matematicas y resultado
//retorna elvalor sustitullendo en pantalla el valorde la variable result
        }
        function clearLastCharacter() {
            let displayValue = document.getElementById("display").value;
            document.getElementById("display").value = displayValue.slice(0, displayValue.length - 1);
        }
        // declara la variable displayvalue y le asigna el valor de pantalla
       // retorna el valor para el display de la variable displayvalue.slice es la posision de la cadena de caracteres inicia en 0 y le resta al valor total 1 posision
