function switchMode() {
  // cria/declara uma função chamada switchMode(), que será executada quando for chamada
  const html = document.documentElement // seleciona o elemento HTML e guarda na constante html OU pega o elemento HTML e guarda na variável html
  // Botão Toggle ou Swith versão 2
  html.classList.toggle("shine") // adiciona a classe 'shine' se não existir, ou remove se já existir

  // pegar a imagem com a tag img
  const img = document.querySelector(".profile img")

  // substituir a imagem de acordo com as condições
  if (html.classList.contains("shine")) {
    // se tiver light mode, adicionar a imagem 1
    img.setAttribute("src", "./assets/avatar-light.png") // define o atributo src da imagem para './assets/avatar-light.png'
    img.setAttribute(
      "alt",
      "Foto de Fabrício Bezerra usando um boné azul, óculos e casaco de frio."
    ) // define o texto alternativo (descrição da imagem) para fins de acessibilidade e SEO
    // img.style.transition = "all 0.5s ease"
  } else {
    // se não tiver light mode, adicionar a imagem 2
    img.setAttribute("src", "./assets/avatar.png") // define o atributo src da imagem para './assets/avatar.png'
    img.setAttribute("alt", "Foto de Fabrício Bezerra usando camiseta preta.") // define o texto alternativo (descrição da imagem) para fins de acessibilidade e SEO
    // img.style.transition = "all 0.5s ease"
  }

  // Botão Toggle ou Swith versão 1
  // if (html.classList.contains("shine")) {
  //   // se a lista de classes do elemento HTML, contém a classe shine?)
  //   html.classList.remove("shine") // remove a classe shine
  // } else {
  //   // senão
  //   html.classList.add("shine") // adiciona a classe shine
  // }
}
