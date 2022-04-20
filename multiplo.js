var multiplo = document.getElementById("multiplo");
var rango = document.getElementById("rango");
var boton = document.getElementById("convertir")
var resultado = document.getElementById("resultado")
var de = document.getElementById("mde")
    boton.addEventListener("click" , ejecutar)

    function ejecutar()
    {
      de.innerHTML="";
      resultado.innerHTML ="";
      var m = parseInt(multiplo.value);
      var r = parseInt(rango.value);
      de.innerHTML = de.innerHTML + " de " + m 
      for (var c = 0; c <= r; c++)
      {
          if (c % m == 0)
          {
            resultado.innerHTML=  resultado.innerHTML + c + " - multiplo de " + m + "<br>" ;
          }
          else
           {
            resultado.innerHTML= resultado.innerHTML + c + "<br>";
          }

      }

    }
