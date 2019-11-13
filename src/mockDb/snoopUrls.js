const congelador = [
  {
    url:
      "https://www.easy.cl/tienda/producto/congelador-horizontal-203-litros-hs-258c-blanco-maigas-1193765p",
    site: "easy",
    weight: 51.85185185185185
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/ventilador-industrial-thorben-fan-26-1102909p",
    site: "easy",
    weight: 46
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/ventilador-industrial-df-600-combi-1164692p",
    site: "easy",
    weight: 46
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/ventilador-industrial-df-650-combi-1164693p",
    site: "easy",
    weight: 44
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/calefon-anwo-tiro-forzado-24-litros-gn-1149775p",
    site: "easy",
    weight: 44
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/circulador-de-piso-thorben-fl-20-thorben-1102908p",
    site: "easy",
    weight: 44
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/ventilador-industrial-30-df-750-dual-mural-pedestal-metal-combi-1164694p",
    site: "easy",
    weight: 42.857142857142854
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/caja-promocional-30-lt-blanca-1189462p",
    site: "easy",
    weight: 42
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/clarificador-agua-piscina-20-litros-puratech-691388p",
    site: "easy",
    weight: 40
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/papel-mural-vinilico-blanco-1160097p",
    site: "easy",
    weight: 40
  }
];

const frague = [
  {
    url:
      "https://www.easy.cl/tienda/producto/frague-rose-1-kilo-frague-162082p",
    site: "easy",
    weight: 64
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-rose-5-kilos-frague-162083p",
    site: "easy",
    weight: 57.692307692307686
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-almond-1-kilo-frague-162042p",
    site: "easy",
    weight: 51.85185185185185
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-tacora-1-kilo-bekron-162084p",
    site: "easy",
    weight: 51.85185185185185
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-bio-bio-1-kilo-frague-162050p",
    site: "easy",
    weight: 50
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-helecho-1-kilo-frague-162070p",
    site: "easy",
    weight: 50
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-rose-1-kilo-fluido-cadina-910639p",
    site: "easy",
    weight: 50
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-negro-1-kilo-frague-162072p",
    site: "easy",
    weight: 50
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-guinda-1-kilo-frague-162068p",
    site: "easy",
    weight: 48.148148148148145
  },
  {
    url:
      "https://www.easy.cl/tienda/producto/fragüe-gris-5-kilo-frague-162067p",
    site: "easy",
    weight: 48
  }
];

export const getSnoopUrls = title => {
  let urls = [];
  if (title === "congelador") {
    urls = congelador;
  } else if (title === "frague") {
    urls = frague;
  }
  return urls;
};
