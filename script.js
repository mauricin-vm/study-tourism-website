// tourist destinations list
const touristDestinations = [
  {
    name: "Cristo Redentor",
    city: "Rio de Janeiro",
    country: "Brasil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Um dos símbolos mais famosos do Brasil, localizado no topo do Corcovado. Oferece uma vista panorâmica deslumbrante da cidade maravilhosa e é considerado uma das Sete Maravilhas do Mundo Moderno."
  },
  {
    name: "Torre Eiffel",
    city: "Paris",
    country: "França",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "O símbolo romântico de Paris e um dos monumentos mais visitados do mundo. A Torre Eiffel oferece vistas espetaculares da Cidade Luz e é especialmente mágica durante o pôr do sol."
  },
  {
    name: "Machu Picchu",
    city: "Cusco",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Antiga cidade inca situada no alto dos Andes peruanos. Este sítio arqueológico único oferece uma experiência mágica com sua arquitetura impressionante e paisagens montanhosas."
  },
  {
    name: "Coliseu",
    city: "Roma",
    country: "Itália",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "O maior anfiteatro já construído, símbolo do Império Romano. Palco de combates de gladiadores e espetáculos grandiosos, hoje é patrimônio mundial da humanidade."
  },
  {
    name: "Taj Mahal",
    city: "Agra",
    country: "Índia",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Mausoléu de mármore branco considerado uma das maiores obras da arquitetura mogol. Símbolo de amor eterno e uma das Sete Maravilhas do Mundo Moderno."
  },
  {
    name: "Grande Muralha da China",
    city: "Beijing",
    country: "China",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Uma das maiores obras arquitetônicas da humanidade, estendendo-se por mais de 21.000 km. Oferece vistas espetaculares e uma rica história de mais de 2.000 anos."
  },
  {
    name: "Sagrada Família",
    city: "Barcelona",
    country: "Espanha",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Obra-prima inacabada de Antoni Gaudí, uma basílica única no mundo. Combina elementos góticos e Art Nouveau, sendo um dos monumentos mais visitados da Espanha."
  },
  {
    name: "Big Ben",
    city: "Londres",
    country: "Reino Unido",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Símbolo icônico de Londres, a famosa torre do relógio do Palácio de Westminster. Um marco histórico que representa a tradição e elegância britânica."
  },
  {
    name: "Estátua da Liberdade",
    city: "Nova York",
    country: "Estados Unidos",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Símbolo universal da liberdade e democracia, presente da França para os Estados Unidos. Localizada na Ilha da Liberdade, oferece vistas magníficas de Manhattan."
  },
  {
    name: "Pirâmides de Gizé",
    city: "Cairo",
    country: "Egito",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "As únicas das Sete Maravilhas do Mundo Antigo que ainda existem. Monumentos impressionantes que revelam a grandeza da civilização egípcia antiga."
  },
  {
    name: "Santorini",
    city: "Santorini",
    country: "Grécia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Uma das ilhas mais belas da Grécia, famosa por suas casas brancas com cúpulas azuis, pôr do sol inesquecível e vistas deslumbrantes do Mar Egeu."
  },
  {
    name: "Angkor Wat",
    city: "Siem Reap",
    country: "Camboja",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "O maior complexo de templos religiosos do mundo, construído no século XII. Obra-prima da arquitetura khmer e símbolo do Camboja."
  },
  {
    name: "Petra",
    city: "Wadi Musa",
    country: "Jordânia",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Cidade histórica escavada na rocha, conhecida como 'Cidade Rosa' devido à cor das pedras. Uma das Novas Sete Maravilhas do Mundo e Patrimônio Mundial da UNESCO."
  },
  {
    name: "Monte Fuji",
    city: "Fujinomiya",
    country: "Japão",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Vulcão sagrado e símbolo do Japão, considerado uma das montanhas mais belas do mundo. Destino de peregrinação e inspiração artística por séculos."
  },
  {
    name: "Neuschwanstein",
    city: "Schwangau",
    country: "Alemanha",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Castelo de contos de fadas que inspirou o castelo da Bela Adormecida da Disney. Construído pelo rei Ludwig II, é um dos castelos mais fotografados do mundo."
  },
  {
    name: "Chichen Itza",
    city: "Yucatán",
    country: "México",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Antiga cidade maia e uma das Novas Sete Maravilhas do Mundo. O Templo de Kukulkán é famoso por seu fenômeno de luz e sombra durante os equinócios."
  },
  {
    name: "Stonehenge",
    city: "Wiltshire",
    country: "Reino Unido",
    image: "https://images.unsplash.com/photo-1599833975787-5fa2de6fb542?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Monumento pré-histórico misterioso composto por enormes pedras dispostas em círculo. Um dos sítios arqueológicos mais famosos do mundo, com mais de 4.000 anos de idade."
  },
  {
    name: "Alhambra",
    city: "Granada",
    country: "Espanha",
    image: "https://images.unsplash.com/photo-1558564098-c19c5094b428?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Complexo palaciano e fortaleza mourisca, considerado uma das maiores obras da arquitetura islâmica. Seus jardins, pátios e decorações intrincadas representam o auge da arte andaluza."
  },
  {
    name: "Golden Gate Bridge",
    city: "São Francisco",
    country: "Estados Unidos",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Icônica ponte suspensa de cor laranja-vermelho que conecta São Francisco à região de Marin County. Símbolo da engenharia moderna e um dos cartões postais mais famosos dos EUA."
  },
  {
    name: "Acropole",
    city: "Atenas",
    country: "Grécia",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258217?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Complexo de templos antigos no topo de uma colina rochosa, incluindo o famoso Partenon. Berço da democracia e símbolo da civilização grega clássica."
  },
  {
    name: "Sydney Opera House",
    city: "Sydney",
    country: "Austrália",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Obra-prima arquitetônica modernista com sua distintiva forma de conchas ou velas. Centro cultural mundial e Patrimônio da Humanidade, símbolo inconfundível da Austrália."
  },
  {
    name: "Burj Al Arab",
    city: "Dubai",
    country: "Emirados Árabes Unidos",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Hotel de luxo em formato de vela construído em uma ilha artificial. Símbolo da modernidade e opulência de Dubai, considerado um dos hotéis mais luxuosos do mundo."
  },
  {
    name: "Cataratas do Niágara",
    city: "Niágara Falls",
    country: "Estados Unidos/Canadá",
    image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Conjunto de três quedas d'água na fronteira entre EUA e Canadá. Maravilha natural que atrai milhões de visitantes com sua impressionante força e beleza cênica."
  },
  {
    name: "Hagia Sophia",
    city: "Istambul",
    country: "Turquia",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Antiga basílica bizantina que se tornou mesquita e depois museu. Obra-prima da arquitetura bizantina com sua imensa cúpula e mosaicos históricos únicos."
  },
  {
    name: "Moai da Ilha de Páscoa",
    city: "Hanga Roa",
    country: "Chile",
    image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Estátuas monolíticas misteriosas esculpidas pelo povo Rapa Nui entre 1250-1500 d.C. Símbolos enigmáticos de uma civilização isolada no meio do Oceano Pacífico."
  },
  {
    name: "Catedral de Notre-Dame",
    city: "Paris",
    country: "França",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Obra-prima da arquitetura gótica francesa, famosa por suas rosáceas, esculturas e história de quase 900 anos. Símbolo de Paris e cenário de importantes eventos históricos."
  },
  {
    name: "Cataratas do Iguaçu",
    city: "Foz do Iguaçu",
    country: "Brasil/Argentina",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258217?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sistema de 275 quedas d'água na fronteira Brasil-Argentina. Uma das maiores e mais espetaculares cataratas do mundo, cercada por rica biodiversidade tropical."
  },
  {
    name: "Templo Dourado",
    city: "Amritsar",
    country: "Índia",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Templo sikh mais sagrado, famoso por sua cúpula dourada e reflexo nas águas do lago sagrado. Centro espiritual que oferece refeições gratuitas a milhares de visitantes diariamente."
  },
  {
    name: "Castelo de Edimburgo",
    city: "Edimburgo",
    country: "Escócia",
    image: "https://images.unsplash.com/photo-1486022119026-2369a0c32fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Fortaleza histórica construída sobre um vulcão extinto, dominando o horizonte de Edimburgo. Residência real histórica e símbolo da independência escocesa."
  },
  {
    name: "Palácio de Versalhes",
    city: "Versalhes",
    country: "França",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Opulento palácio real famoso por seus jardins elaborados e Sala dos Espelhos. Símbolo do poder absoluto francês e cenário de importantes eventos da história europeia."
  }
];

// function to get random destinations
function getRandomDestinations(count = 6) {
  const shuffled = [...touristDestinations].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// function to create HTML cards
function createCard(place) {
  return `
    <div class="card">
      <img 
        src="${place.image}" 
        alt="${place.name}" 
        class="card-image" 
        onerror="this.src='https://via.placeholder.com/400x300/667eea/ffffff?text=Destino+Turístico'"
      >
      <div class="card-content">
        <h3 class="card-title">${place.name} - ${place.city}</h3>
        <p class="card-description">${place.description}</p>
      </div>
    </div>
  `;
};

// function to load tourist places
function loadTouristPlaces() {
  const cardsGrid = document.querySelector('.cards-grid');
  cardsGrid.innerHTML = '<div class="loading">🌍 Carregando destinos turísticos...</div>';
  setTimeout(() => {
    try {
      const selectedDestinations = getRandomDestinations(6);
      const cardsHTML = selectedDestinations.map(place => createCard(place)).join('');
      cardsGrid.innerHTML = cardsHTML;
    } catch (error) {
      console.error('Erro ao carregar destinos:', error);
      cardsGrid.innerHTML = `
        <div class="error">
          ❌ Erro ao carregar os destinos turísticos. 
          <br><button class="retry-button" onclick="loadTouristPlaces()">🔄 Tentar novamente</button>
        </div>
      `;
    };
  }, 800);
};

// function to discover destination with countdown
function discoverDestination() {
  const resultCard = document.getElementById('resultCard');
  const resultContent = document.getElementById('resultContent');
  const discoverButton = document.querySelector('.discover-button');
  discoverButton.disabled = true;
  discoverButton.textContent = '🔄 Descobrindo...';
  resultCard.classList.add('loading');
  resultCard.classList.remove('revealed');
  let countdown = 3;
  resultContent.innerHTML = `
    <div class="countdown-content">
      <h3>🎲 Descobrindo seu destino...</h3>
      <div class="countdown">${countdown}</div>
      <p>Preparando sua próxima aventura!</p>
    </div>
  `;
  const countdownInterval = setInterval(() => {
    countdown--;
    const countdownElement = document.querySelector('.countdown');
    if (countdownElement) countdownElement.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      revealDestination();
    };
  }, 1000);
};

// function to reveal the chosen destination
function revealDestination() {
  const resultCard = document.getElementById('resultCard');
  const resultContent = document.getElementById('resultContent');
  const discoverButton = document.querySelector('.discover-button');
  const randomDestination = touristDestinations[Math.floor(Math.random() * touristDestinations.length)];
  resultCard.classList.remove('loading');
  resultCard.classList.add('revealed');
  resultContent.innerHTML = `
    <div class="destination-result">
      <img src="${randomDestination.image}" alt="${randomDestination.name}" 
           style="width: 100%; height: 120px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
      <h3>🎉 ${randomDestination.name}</h3>
      <p><strong>${randomDestination.city}, ${randomDestination.country}</strong></p>
      <p style="font-size: 0.85rem; margin-top: 10px; line-height: 1.4;">${randomDestination.description}</p>
    </div>
  `;
  discoverButton.disabled = false;
  discoverButton.textContent = '🎲 Descobrir Outro Destino';
};

// initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadTouristPlaces();
  document.querySelector('.header h1').addEventListener('click', () => {
    loadTouristPlaces();
  });
});