
function novaFrase() {
    let frases = [
        "Não importa o quão forte você bate, mas sim o quanto aguenta apanhar e continuar.",
        "Se você sabe o seu valor, vá e lute por ele.",
        "O mundo não é só arco-íris e sol; ele é um lugar duro.",
        "Você, eu ou ninguém vai bater tão forte quanto a vida.",
        "Mas não é sobre o quão forte você bate — é sobre continuar seguindo em frente.",
        "Ninguém vai te dar nada de graça, você precisa conquistar.",
        "Até onde você pode ir? Depende de quanto você aguenta.",
        "Toda derrota é uma chance de voltar mais forte.",
        "Seja mais forte que suas desculpas.",
        "Continue indo, mesmo quando tudo em você quer parar,"
    ]

    let i = Math.floor(Math.random() * frases.length);

    document.getElementById("resultado").innerText = frases[i];
}