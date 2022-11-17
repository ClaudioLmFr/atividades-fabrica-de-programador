let produtos = [
    {
        valor: 164.00,
        imagem: "https://static.nagem.com.br/util/artefatos/produtos/m/n/796151627653543/462110_1.jpg",
        descricao: "SSD Sandisk"
    },
    {
        valor: 280.00,
        imagem: "https://images.kabum.com.br/produtos/fotos/115063/hd-wd-blue-2tb-3-5-sata-6-0gb-s-wd20ezaz_1649957860_g.jpg",
        descricao: "HD 2TB Westener"
    },
    {
        valor: 300.00,
        imagem: "https://m.media-amazon.com/images/I/71aur4iQr4L._AC_SY450_.jpg",
        descricao: "Gabinete Gamer"
    },
    {
        valor: 530.00,
        imagem: "https://images.kabum.com.br/produtos/fotos/115216/placa-mae-asus-tuf-gaming-b550m-plus-amd-b550-matx-ddr4_1638447289_original.jpg",
        descricao: "Placa Mãe Tuff Gaming"
    },
    {
        valor: 500.00,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_609596-MLA48832758014_012022-O.jpg",
        descricao: "Memória DDR4 8GB Hiper-X"
    },
    {
        valor: 700.00,
        imagem: "https://images.tcdn.com.br/img/img_prod/374123/placa_de_video_amd_radeon_hd_6570_4gb_gddr5_128_bits_single_fan_gaming_edition_pjhd6570gr54gsf_pcyes_36931_1_992f43487e38a573655dc0638161e5b3.jpg",
        descricao: "Placa de Vídeo RX-550 4GB"
    },
    {
        valor: 320.00,
        imagem: "https://static.mundomax.com.br/produtos/59765/550/5.jpg",
        descricao: "Fonte KCAS 80 PLUS Bronze - 500W"
    }
]

let produtosBkp

function criaCatalogo() {
    let sectionCatalogo = document.getElementById("catalogo")
    for (let i = 0; i < produtos.length; i++) {
        sectionCatalogo.innerHTML += `
        <div class="produto">
            <img src="${produtos[i].imagem}">
            <div class="produto-detalhe">
            <p class="produto-titulo">${produtos[i].descricao}</p>
            <p class="produto-valor">R$${produtos[i].valor}</p>
            </div>
        </div>
        `
    }

}

function buscar() {
    let busca = document.getElementById("busca").value
    produtosBkp = produtos
    produtos = produtos.filter((elemento) => {
        return elemento.descricao.toLowerCase().includes(busca.toLowerCase())
    })
    document.getElementById("catalogo").innerHTML = ""
    criaCatalogo()
}

function limpar() {
    produtos = produtosBkp
    document.getElementById("catalogo").innerHTML = ""
    criaCatalogo()
}