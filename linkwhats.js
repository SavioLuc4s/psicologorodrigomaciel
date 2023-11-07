function saudacaoHorario() {
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 6 && hora < 12) {
        return "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

function atualizarLinksWhatsapp() {
    const saudacao = saudacaoHorario();
    const numeroWhatsapp = "5584988337668";
    const mensagem = `${saudacao}! Gostaria de agendar uma consulta!`;
    const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

    const elementosHeaderButton = document.querySelectorAll(".api-whats");

    elementosHeaderButton.forEach((elemento) => {
        elemento.href = link;
    });
}

atualizarLinksWhatsapp();
