function listarDivs() {
    const divs = document.querySelectorAll('div.ad-area');

    if (divs.length > 0) {
      divs.forEach(div => {
        console.log(div);
      });
    } else {
      console.log("N�o h� divs dispon�veis na p�gina.");
    }
  }

  function verificarURL() {
    if(window.location.hostname === "noticias.uol.com.br" || window.location.pathname === "/" || window.location.pathname === "/esporte/" || window.location.pathname === "/splash/"){
      listarDivs();
    }
  }

verificarURL();