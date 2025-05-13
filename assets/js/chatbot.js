let baseConocimiento = [];

fetch("faq.json")
  .then(res => res.json())
  .then(data => baseConocimiento = data);

function enviarPregunta() {
  const entrada = document.getElementById("pregunta");
  const chat = document.getElementById("chat");
  const texto = entrada.value.trim();
  if (!texto) return;

  agregarMensaje(texto, "usuario");

  const respuesta = buscarRespuesta(texto.toLowerCase());
  setTimeout(() => {
    agregarMensaje(respuesta, "bot");
  }, 500);

  entrada.value = "";
}

function buscarRespuesta(preguntaUsuario) {
  for (let item of baseConocimiento) {
    for (let sin of item.pregunta) {
      if (preguntaUsuario.includes(sin.toLowerCase())) {
        return item.respuesta;
      }
    }
  }
  return "Lo siento, no tengo una respuesta para eso. ¿Quieres que la agreguemos?";
}

function agregarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const mensaje = document.createElement("div");
  mensaje.className = `mensaje ${tipo}`;
  mensaje.innerText = texto;
  chat.appendChild(mensaje);
  chat.scrollTop = chat.scrollHeight;
}
