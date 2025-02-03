const products = [
  {
    id: 1,
    name: "ALEXA",
    price: 1245.99,
    Shortdescription: "Stylowy zegarek, który pasuje do każdej okazji.",
    description:
      "Uniwersalny zegarek, który z łatwością wpasowuje się w każdą sytuację. Jego ponadczasowy design i staranne wykonanie sprawiają, że stanowi idealne uzupełnienie zarówno codziennych, jak i bardziej formalnych stylizacji. Niezależnie od tego, czy wybierasz się do pracy, na spotkanie z przyjaciółmi czy ważne wydarzenie, ten zegarek zawsze będzie wyglądał stylowo i elegancko, podkreślając Twój wyjątkowy charakter i dbałość o detale.",
    image: "img/alexa/alexa-main.jpg",
    restImg: [
      "img/alexa/alexa-rest.jpg",
      "img/alexa/alexa-rest1.jpg",
      "img/alexa/alexa-rest2.jpg",
    ],
    list: [
      "Mechanizm: kwarcowy",
      "Rodzaj zasilania: bateria litowa",
      "Wodoszczelność: 10 ATM",
      "Materiał paska: silikon z antypoślizgową fakturą",
      "Funkcje: podświetlenie LED, stoper",
      "Wyświetlacz: hybrydowy (cyfrowo-analogowy)",
      "Kolor koperty: czarny mat",
    ],
  },
  {
    id: 2,
    name: "BOWA",
    price: 1899.6,
    Shortdescription:
      "Elegancki czasomierz z prostym i ponadczasowym designem.",
    description:
      "Zegarek, który łączy w sobie tradycję i nowoczesność. Dzięki klasycznemu wzornictwu i wysokiej jakości materiałom jest nie tylko praktycznym narzędziem do odmierzania czasu, ale również wyrazem dobrego smaku i indywidualnego stylu. Jego uniwersalność pozwala nosić go każdego dnia, a starannie dopracowane detale przyciągają uwagę i dodają wyjątkowego charakteru każdej stylizacji.",
    image: "img/bowa/bowa-main.jpg",
    restImg: [
      "img/bowa/bowa-rest.jpg",
      "img/bowa/bowa-rest1.jpg",
      "img/bowa/bowa-rest2.jpg",
    ],
    list: [
      "Mechanizm: automatyczny",
      "Materiał paska: silikon",
      "Wodoszczelność: 100 m",
      "Rodzaj szkła: szafirowe",
      "Średnica tarczy: 44 mm",
      "Funkcje: stoper, chronograf",
      "Kolor koperty: srebrny",
      "Typ wskazówek: fluorescencyjne",
      "Waga zegarka: 150 g",
    ],
  },
  {
    id: 3,
    name: "CERTINA",
    price: 1780.0,
    Shortdescription: "Funkcjonalny zegarek o nowoczesnym wyglądzie.",
    description:
      "Stylowy czasomierz, który został zaprojektowany z myślą o osobach ceniących prostotę i funkcjonalność. Jego minimalistyczna tarcza w połączeniu z solidnym wykończeniem tworzy harmonijną całość, która pasuje zarówno do eleganckich, jak i casualowych strojów. To zegarek, który nie tylko mierzy czas, ale również opowiada historię Twojego wyjątkowego stylu życia.",
    image: "img/certina/certina-main.jpg",
    restImg: [
      "img/certina/certina-rest.jpg",
      "img/certina/certina-rest1.jpg",
      "img/certina/certina-rest2.jpg",
    ],
    list: [
      "Mechanizm: hybrydowy",
      "Obwód paska: regulowany",
      "Rodzaj koperty: tytanowa",
      "Wodoszczelność: 30 m",
      "Czas pracy baterii: 2 lata",
      "Wyświetlacz: analogowy",
      "Szkło: hartowane",
      "Funkcje: czas światowy, alarm",
    ],
  },
  {
    id: 4,
    name: "FREDRIQUE",
    price: 2300.99,
    Shortdescription: "Klasyczny model, który łączy wygodę z estetyką.",
    description:
      "Ponadczasowy zegarek dla osób, które cenią sobie uniwersalność i elegancję. Wykonany z najwyższą precyzją, łączy subtelne detale z praktycznymi funkcjami, dzięki czemu staje się idealnym towarzyszem w codziennym życiu. Niezależnie od okazji, jego klasyczny design wprowadza odrobinę wyrafinowania i podkreśla Twoją dbałość o szczegóły.",
    image: "img/frederique/frederique-main.jpg",
    restImg: [
      "img/frederique/frederique-rest.jpg",
      "img/frederique/frederique-rest1.jpg",
      "img/frederique/frederique-rest2.jpg",
    ],
    list: [
      "Mechanizm: kwarcowy",
      "Materiał koperty: ceramika",
      "Szkło: szafirowe z powłoką antyrefleksyjną",
      "Wodoszczelność: 200 m",
      "Rodzaj paska: tekstylny",
      "Średnica koperty: 40 mm",
      "Kolor tarczy: biały",
      "Funkcje: sekundnik, datownik",
    ],
  },
  {
    id: 5,
    name: "GARETT",
    price: 1780.99,
    Shortdescription:
      "Minimalistyczny zegarek zaprojektowany z myślą o codziennym użytkowaniu.",
    description:
      "To nie tylko zegarek, ale także wyraz Twojej osobowości. Jego starannie przemyślany design sprawia, że jest doskonałym dodatkiem do każdej stylizacji, a wysoka jakość wykonania gwarantuje niezawodność przez lata. Subtelne wykończenia dodają mu charakteru, a uniwersalny styl sprawia, że jest to idealny wybór zarówno na co dzień, jak i na wyjątkowe okazje.",
    image: "img/garett/garett-main.jpg",
    restImg: [
      "img/garett/garett-rest.jpg",
      "img/garett/garett-rest1.jpg",
      "img/garett/garett-rest2.jpg",
    ],
    list: [
      "Mechanizm: solarny",
      "Zasilanie: energia słoneczna",
      "Materiał koperty: plastik wzmacniany włóknem szklanym",
      "Wodoszczelność: 50 m",
      "Wyświetlacz: cyfrowy",
      "Funkcje: alarm, stoper, timer",
      "Szkło: akrylowe",
      "Kolor paska: czarny",
      "Grubość koperty: 12 mm",
    ],
  },
  {
    id: 6,
    name: "HERBELIN",
    price: 1780.5,
    Shortdescription: "Uniwersalny czasomierz, który podkreśla Twój styl.",
    description:
      "Zegarek, który harmonijnie łączy w sobie funkcjonalność i estetykę. Jego wytrzymała konstrukcja i elegancki wygląd czynią go idealnym dodatkiem na każdą okazję – od codziennych spotkań po wieczorowe wyjścia. To akcesorium, które nie tylko ułatwia życie, ale również podkreśla Twoją wyjątkowość i dbałość o detale.",
    image: "img/herbelin/herbelin-main.jpg",
    restImg: [
      "img/herbelin/herbelin-rest.jpg",
      "img/herbelin/herbelin-rest1.jpg",
      "img/herbelin/herbelin-rest2.jpg",
    ],
    list: [
      "Mechanizm: automatyczny z rezerwą chodu 40h",
      "Materiał koperty: stal szlachetna",
      "Wodoszczelność: 100 m",
      "Funkcje: czas światowy, fazy księżyca",
      "Rodzaj paska: metalowy",
      "Szkło: szafirowe",
      "Kolor tarczy: granatowy",
    ],
  },
  {
    id: 7,
    name: "LUMINOX",
    price: 1773.0,
    Shortdescription: "Zegarek o praktycznym i trwałym wykonaniu.",
    description:
      "Praktyczny i stylowy zegarek zaprojektowany z myślą o nowoczesnym użytkowniku. Dzięki swojej uniwersalności może być noszony zarówno w sytuacjach formalnych, jak i podczas codziennych aktywności. To więcej niż narzędzie – to ozdoba, która podkreśla Twoją klasę, a jednocześnie pozostaje niezwykle wygodna i funkcjonalna.",
    image: "img/luminox/luminox-main.jpg",
    restImg: [
      "img/luminox/luminox-rest.jpg",
      "img/luminox/luminox-rest1.jpg",
      "img/luminox/luminox-rest2.png",
    ],
    list: [
      "Mechanizm: kwarcowy",
      "Rodzaj zasilania: bateria litowa",
      "Wodoszczelność: 10 ATM",
      "Materiał paska: silikon z antypoślizgową fakturą",
      "Funkcje: podświetlenie LED, stoper",
      "Wyświetlacz: hybrydowy (cyfrowo-analogowy)",
      "Kolor koperty: czarny mat",
    ],
  },
  {
    id: 8,
    name: "POLAR",
    price: 1300.0,
    Shortdescription: "Wyrafinowany design, który dopełni każdy strój.",
    description:
      "Zegarek dla tych, którzy szukają czegoś więcej niż tylko urządzenia do odmierzania czasu. Jego elegancki, a jednocześnie praktyczny design sprawia, że doskonale wpisuje się w różne style życia i modowe gusta. Idealnie wyważone proporcje, solidne wykonanie i uniwersalny charakter czynią go idealnym wyborem na każdą okazję, od biznesowych spotkań po codzienne obowiązki.",
    image: "img/polar/polar-main.jpg",
    restImg: [
      "img/polar/polar-rest.jpg",
      "img/polar/polar-rest1.jpg",
      "img/polar/polar-rest2.jpg",
    ],
    list: [
      "Mechanizm: automatyczny",
      "Materiał koperty: stal nierdzewna",
      "Średnica koperty: 41 mm",
      "Rodzaj paska: skórzany z przeszyciami",
      "Kolor tarczy: srebrny",
      "Wodoszczelność: 5 ATM",
      "Grubość koperty: 9 mm",
    ],
  },
  {
    id: 9,
    name: "SUUNTO",
    price: 1409.99,
    Shortdescription: "Subtelne wzornictwo dla osób ceniących prostotę.",
    description:
      "Zegarek, który jest doskonałym połączeniem nowoczesnych rozwiązań i klasycznego wzornictwa. Jego minimalistyczny styl sprawia, że pasuje do wszystkiego, a starannie dobrane materiały gwarantują trwałość i niezawodność. To akcesorium, które nie tylko ułatwia kontrolę nad czasem, ale również podkreśla Twoją wyjątkowość i wyczucie estetyki.",
    image: "img/suunto/suunto-main.jpg",
    restImg: [
      "img/suunto/suunto-rest.jpg",
      "img/suunto/suunto-rest1.jpg",
      "img/suunto/suunto-rest2.jpg",
    ],
    list: [
      "Mechanizm: solarny",
      "Materiał koperty: aluminium",
      "Wodoszczelność: 3 ATM",
      "Rodzaj paska: tkanina",
      "Szkło: szafirowe",
      "Wyświetlacz: analogowy z datownikiem",
      "Czas pracy po naładowaniu: 6 miesięcy",
    ],
  },
  {
    id: 10,
    name: "TIMEX",
    price: 1570.98,
    Shortdescription:
      "Wszechstronny zegarek idealny na co dzień i na wyjątkowe chwile.",
    description:
      "To zegarek, który wyróżnia się w swojej prostocie i elegancji. Jego uniwersalny design sprawia, że jest idealnym dodatkiem do każdej stylizacji – od casualowych po bardziej oficjalne. Dzięki wysokiej jakości wykonania i przemyślanym detalom jest to nie tylko praktyczne narzędzie, ale również element, który przyciąga wzrok i podkreśla Twój indywidualny styl.",
    image: "img/timex/timex-main.jpg",
    restImg: [
      "img/timex/timex-rest.jpg",
      "img/timex/timex-rest1.jpg",
      "img/timex/timex-rest2.jpg",
    ],
    list: [
      "Mechanizm: kwarcowy",
      "Materiał koperty: stal nierdzewna",
      "Funkcje: chronograf, tachometr",
      "Rodzaj paska: bransoleta stalowa",
      "Szkło: mineralne",
      "Wodoszczelność: 10 ATM",
      "Kolor tarczy: czarny z czerwonymi akcentami",
    ],
  },
  {
    id: 11,
    name: "TISSOT",
    price: 999.99,
    Shortdescription: "Połączenie nowoczesności i klasyki w jednym modelu.",
    description:
      "Zegarek, który zachwyca uniwersalnym stylem i funkcjonalnością. Każdy jego szczegół został starannie zaprojektowany, by zapewnić nie tylko wygodę noszenia, ale również wyjątkowy wygląd. To idealny wybór dla osób, które cenią sobie klasykę, elegancję i trwałość w jednym akcesorium, które można nosić każdego dnia.",
    image: "img/tissot/tissot-main.jpg",
    restImg: [
      "img/tissot/tissot-rest.jpg",
      "img/tissot/tissot-rest1.jpg",
      "img/tissot/tissot-rest2.jpg",
    ],
    list: [
      "Mechanizm: mechaniczny z ręcznym naciągiem",
      "Materiał paska: skóra naturalna",
      "Funkcje: rezerwa chodu, sekundnik",
      "Średnica koperty: 38 mm",
      "Kolor koperty: złoty",
      "Szkło: szafirowe",
      "Wodoszczelność: 3 ATM",
    ],
  },
];
function openFullscreen(imageSrc) {
  const imgElement = document.createElement("img");
  imgElement.src = imageSrc;
  imgElement.style.width = "100%";
  imgElement.style.height = "100%";
  imgElement.style.objectFit = "contain";

  const fullscreenDiv = document.createElement("div");
  fullscreenDiv.style.position = "fixed";
  fullscreenDiv.style.top = "0";
  fullscreenDiv.style.left = "0";
  fullscreenDiv.style.width = "100vw";
  fullscreenDiv.style.height = "100vh";
  fullscreenDiv.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  fullscreenDiv.style.zIndex = "1000";
  fullscreenDiv.style.display = "flex";
  fullscreenDiv.style.justifyContent = "center";
  fullscreenDiv.style.alignItems = "center";
  fullscreenDiv.appendChild(imgElement);

  fullscreenDiv.onclick = () => {
    document.body.removeChild(fullscreenDiv);
  };

  document.body.appendChild(fullscreenDiv);
}

function displayProducts() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = '<div id="products-container"></div>';
  const productsContainer = document.getElementById("products-container");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
            <div class="imgCont">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h2>${product.name}</h2>
            <p>${product.Shortdescription}</p>
            <p>Cena: ${product.price.toFixed(2)} zł</p>
            <button onclick="showProductDetails(${
              product.id
            })">Zobacz szczegóły</button>
        `;

    productsContainer.appendChild(productElement);
  });
}

function showProductDetails(productId) {
  const product = products.find((p) => p.id === productId);

  if (product) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
    <div class="Detailproduct">
      <div class="wrapper">
        <div class="first">
          <div class="detailImgCont">
            <img src="${product.image}" alt="${
      product.name
    }" onclick="openFullscreen('${product.image}')">
          </div>
        </div>
        <div class="second">
          <h2 class="detailName">Marka: ${product.name}</h2>
          <ul>
            ${product.list.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
      <strong>Opis:</strong>           
      <p class="detailDesc">${product.description}</p>
      <p class="detailPrice">Cena: ${product.price.toFixed(2)} zł</p>
      <button onclick="goBackToList()">Powrót do listy produktów</button>
      <div class="imgList">
        <h1>Galeria:</h1>
        <div class="wrapperImg">
          ${product.restImg
            .map(
              (item) => `<div class="imgContRest">
                           <img src="${item}" onclick="openFullscreen('${item}')"/>
                         </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

    document.getElementById("page-title").textContent = product.name;

    history.pushState(
      { page: "product", productId: product.id },
      "",
      `?id=${product.id}`
    );
  } else {
    document.getElementById("main-content").innerHTML =
      "<h1>Produkt nie znaleziony</h1>";
  }
}

function goBackToList() {
  document.getElementById("page-title").textContent =
    "Informacje o naszych produktach";
  displayProducts();

  history.pushState({ page: "list" }, "", "/SzybkaStronaNaStudia/");
  if (window.location.pathname !== "/SzybkaStronaNaStudia/") {
    window.location.href = "/SzybkaStronaNaStudia/";
  }
}

window.onpopstate = function (event) {
  if (event.state && event.state.page === "product") {
    showProductDetails(event.state.productId);
  } else {
    displayProducts();
  }
};

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  if (productId) {
    showProductDetails(productId);
  } else {
    displayProducts();
  }
}

window.onload = init;
