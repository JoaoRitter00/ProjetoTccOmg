const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const futebolCategory = await prisma.category.create({
      data: {
        name: "Futebol",
        slug: "futebol",
        imageURL: "https://abre.ai/futebol-logo",
      },
    });

    const futebol = [
      {
        name: "Bola Nike Academy",
        slug: "bola-nike-academy",
        description:
          "A Bola Nike Academy é um equipamento de alta qualidade desenvolvido para oferecer um excelente desempenho em campo. Com materiais duráveis e um design inovador, esta bola proporciona precisão e controle excepcionais. Adquira a Bola Nike Academy agora e eleve seu jogo para o próximo nível!",
        imageURLs: [
          "https://abre.ai/fut-balls-x-01",
          "https://abre.ai/fut-balls-x-02",
        ],
        basePrice: 119.99,
        categoryId: futebolCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Bola Nike League",
        slug: "bola-nike-league",
        description:
          "A Bola Nike League é uma escolha de qualidade para jogadores exigentes. Seu design inovador e materiais premium garantem um ótimo desempenho. Esta bola oferece precisão e durabilidade excepcionais em campo. Domine o jogo com a Bola Nike League",
        imageURLs: [
          "https://abre.ai/fut-balls-league-01",
          "https://abre.ai/fut-balls-league-02",
        ],
        basePrice: 49.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Bola Campo Bravo",
        slug: "bola-campo-bravo",
        description:
          "As luvas Nike Jr. Goalkeeper Match estão prontas para qualquer defesa. O acolchoamento macio proporciona amortecimento contra impactos, enquanto uma superfície macia proporciona aderência em condições úmidas ou secas.",
        imageURLs: ["https://abre.ai/fut-balls-campo-bravo"],
        basePrice: 199.99,
        categoryId: futebolCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Bola Campo Bravo 70 Pro",
        slug: "bola-campo-bravo-70",
        description:
          "Com um design moderno e durável, a Bola Campo Bravo é a escolha ideal para quem busca um alto desempenho. Seu material resistente e características de voo estáveis tornam-na perfeita para jogadas precisas. Eleve seu jogo com a Bola Campo Bravo 70 Pro!",
        imageURLs: [
          "https://abre.ai/fut-balls-70-pro-1",
          "https://abre.ai/fut-balls-70-pro-2",
        ],
        basePrice: 399.99,
        categoryId: futebolCategory.id,
        discountPercent: 10,
      },
      {
        name: "Bola Topper",
        slug: "bola-topper",
        description:
          "A Bola de Futebol Topper tem sulcos inovadores projetados para um giro consistente quando a bola está no ar. Estampas de alto contraste ajudam você a controlar facilmente a bola para que possa se concentrar em suas habilidades com os pés.",
        imageURLs: [
          "https://abre.ai/fut-balls-topper-1",
          "https://abre.ai/fut-balls-topper-2",
        ],
        basePrice: 129.99,
        categoryId: futebolCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Bola Puma Premier League Academy",
        slug: "bola-puma-premier-league-academy",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-balls-puma-1",
          "https://abre.ai/fut-balls-puma-2",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa Vitória Futebol",
        slug: "camisa-vitoria",
        description:
          "A camisa deste time da segunda divisão celebra a paixão e a perseverança do clube em busca da ascensão. Com um design simples, porém marcante, esta camisa reflete a identidade do time e o apoio dos torcedores. Feita com tecido confortável e resistente, esta camisa representa a determinação e a luta contínua pela excelência, oferecendo aos fãs a oportunidade de mostrar seu apoio inabalável.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-c-01",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa Treze Futebol",
        slug: "camisa-treze-futebol",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-c-02",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa Jacuipense Futebol",
        slug: "camisa-jacuipense-futebol",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-c-03",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa Londrina Futebol",
        slug: "camisa-londrina-futebol",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-c-04",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa Manaus Futebol",
        slug: "camisa-manaus-futebol",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-c-05",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa Vila Nova Futebol",
        slug: "camisa-vila-nova-futebol",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-d-01",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa Porto Rico Futebol",
        slug: "camisa-porto-rico-futebol",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-d-02",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa XV de Novembro Futebol",
        slug: "camisa-quinze-novembro-futebol",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-paulistao-a2",
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Camisa Internacional SP Futebol",
        slug: "camisa-internacional-sp-futebol",
        description:
          "Você nunca para de melhorar as suas habilidades, então use a bola que trabalha tanto quanto você. Os gráficos brilhantes são fáceis de ver em campo enquanto você pratica as suas habilidades nos pés, e suas ranhuras inovadoras criam um giro consistente para aquele chute aéreo em direção ao gol.",
        imageURLs: [
          "https://abre.ai/fut-roupa-camiseta-paulistao-a2-branca"
        ],
        basePrice: 169.99,
        categoryId: futebolCategory.id,
        discountPercent: 5, // 5% discount
      },
    ];

    await prisma.product.createMany({
      data: futebol,
    });
    const voleiCategory = await prisma.category.create({
      data: {
        name: "Vôlei",
        slug: "volei",
        imageURL: "https://abre.ai/volei-logo",
      },
    });

    const volei = [
      {
        name: "Bola Mikasa Pro",
        slug: "bola-mikasa-pro",
        description:
          "A Bola Mikasa Pro Series é a escolha definitiva para jogadores de vôlei profissionais e entusiastas. Com sua construção de alta qualidade e design avançado, esta bola oferece precisão e controle excepcionais. Experimente a excelência com a Bola Mikasa Pro Series!",
        imageURLs: [
          "https://abre.ai/v-balls-mikasa-01",
          "https://abre.ai/v-balls-mikasa-02",
          "https://abre.ai/v-balls-mikasa-03",
        ],

        basePrice: 100,
        categoryId: voleiCategory.id,
        discountPercent: 5, // 5% discount
      },

      {
        name: "Bola Mikasa v330w",
        slug: "bola-mikasa-v330w",
        description:
          "A Bola Mikasa v330w é a escolha definitiva para jogadores de vôlei profissionais e entusiastas. Com sua construção de alta qualidade e design avançado, esta bola oferece precisão e controle excepcionais. Experimente a excelência com a Bola Mikasa Pro Series!",
        imageURLs: [
          "https://abre.ai/v-balls-mikasa-330-01",
          "https://abre.ai/v-balls-mikasa-330-02",
        ],
        basePrice: 89.9,
        categoryId: voleiCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Bola Penalty mg-3600",
        slug: "nexcare-fita-micropore-branca",
        description:
          "A Bola Penalty mg-3600 é reconhecida por sua precisão e sensação excepcional. Seu design técnico e materiais de alta qualidade oferecem uma experiência de jogo superior. Experimente o melhor do vôlei com a Bola Penalty mg-3600",
        imageURLs: [
          "https://abre.ai/v-balls-penalty-01",
          "https://abre.ai/v-balls-penalty-02",
        ],
        basePrice: 10,
        categoryId: voleiCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Bola Molten 5000",
        slug: "bola-molten-5000",
        description:
          "Combinando durabilidade e desempenho de elite, a Bola Molten 5000 é ideal para jogadores que buscam qualidade superior. Seu design avançado oferece um toque suave e controlado. Domine a quadra com a Bola Molten 5000!",
        imageURLs: [
          "https://abre.ai/v-balls-molten-01",
          "https://abre.ai/v-balls-molten-02",
          "https://abre.ai/v-balls-molten-03",
        ],
        basePrice: 35,
        categoryId: voleiCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Bola Vôlei Molten Trad",
        slug: "bola-volei-molten-trad",
        description:
          "A Bola de Vôlei Molten Trad foi desenvolvida para proporcionar conforto, maciez e resistência durante a utilização. Garantindo menor absorção de água, você vai aproveitar sem a necessidade de parar o jogo, mesmo em condições de chuva. A Molten Trad é o produto ideal para você se divertir com os amigos! <br>Benefícios: <br>Conforto e maciez no contato com o corpo. <br>Resistência e durabilidade. <br>Menor absorção de água. <br>Alguns diferenciais técnicos: <br>A Bola Vôlei MG 3600 Penalty XXI conta com a câmara Airbility 6D que proporciona precisão e controle absoluto durante os toques e jogadas. Seu peso e  <br>circunferência são ideais para utilizar com os amigos.Peso: 260-280g <br>Circunferência: 65-67cm <br>Gomos: 12 <br>Laminado: PU SUPER SOFT <br>Construção:  <br>Ultra Fusion <br>Câmara: 6D <br>Sistema de Forro: Termofixo <br>Camada Interna: Evacel <br>Processo Extra: Dupla Colagem <br>Miolo:  <br>Cápsula SIS <br> CUIDADOS: limpar a bola com escova ou pano limpo levemente úmido com água após utilização secar a bola por completo armazenar em ambiente seco e ventilado não deixar exposta ao sol ou chuva mantê-la sempre calibrada",
        imageURLs: [
          "https://abre.ai/v-balls-molten-trad-01",
          "https://abre.ai/v-balls-molten-trad-02",
        ],

        basePrice: 150,
        categoryId: voleiCategory.id,
        discountPercent: 10, // 10% discount
      },

      {
        name: "Bola De Vôlei Penalty 6.0",
        slug: "bola-de-volei-penalty-6.0",
        description:
          "Perfeita para seus treinos ou jogos de recreações, a Penalty criou a Bola de Vôlei Soft. Suas cores oferecem melhor visualização durante aspartidas e facilita em partidas noturnas. Desenvolvida com laminado em Micro Power, o produto proporciona maior durabilidade para você aproveitar por muito mais tempo. Mostre suas habilidades e se destaque poronde passar. <br>Benefícios <br>Maciez e conforto no contato com a bola. <br>Durabilidade e resistência para utilizar por mais tempo. <br>Alguns diferenciais técnicos <br>A câmara Arbility proporciona resistência a retenção de ar e equilíbrio perfeito para que suas jogadas sejam finalizadas com sucesso. Costurada à máquina, o produto proporciona maior durabilidade para você aproveitar por muito mais tempo e se divertir muito mais com os amigos. <br> Peso: 260-280g <br>Circunferência: 65-67cm <br>Gomos: 18 <br>Laminado: MICROPOWER <br>Construção: Costurada à Máquina <br> Câmara: Airbility <br>Sistema de Forro: Multiaxial <br>Camada Interna: Evacel <br>Miolo: Removível <br>CUIDADOS <br>limpar a bola com escova ou pano limpo levemente úmido com água após utilização <br>secar a bola por completo <br>armazenar em ambiente seco e ventilado <br>não deixar exposta ao sol ou chuva <br>mantê-la sempre calibrada",
        imageURLs: [
          "https://abre.ai/v-balls-penalty-6",
          "https://abre.ai/v-balls-penalty-6-0",
        ],
        basePrice: 369.9,
        categoryId: voleiCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: "Joelheira Asics Profissional",
        slug: "joelheira-asics-profissional",
        description:
          "Excelente joelheira para escola / clube / jogo / treino, revestida em PU (Poliuretano) material resistente e durável . À prova d'água. Bexiga interna em Butil laminado de dupla camada. <br>Tamanho e peso oficial <br>Modalidade <br>Vôlei <br>Indicação de Uso <br>Interno/Externo <br>Uso pretendido <br>Treino <br>Certificado <br>Reconhecida internacionalmente <br>Grupo de idade <br>Estudantes do Ensino médio e acima <br>Material da Superfície <br>PU <br>Bexiga Inter <br>Butílica <br>Tamanho <br>5 <br>Circunferência <br>650~670mm <br>Peso <br>260~280g <br>Cor <br>Branco/Verde/Vermelho <br>Pressão do ar <br>4.26-4.63 lbs/psi <br>EAN <br>4905741795672 <br>Código do Produto <br>V5M3500",
        imageURLs: [
          "https://abre.ai/v-acessorios-joelheira-b-01",
          "https://abre.ai/v-acessorios-joelheira-b-02",
          "https://abre.ai/v-acessorios-joelheira-b-03",
        ],
        basePrice: 359.9,
        categoryId: voleiCategory.id,
        discountPercent: 10,
      },
      {
        name: "Fita Micropore Nexcare",
        slug: "fita-micropore-nexcare",
        description:
          "A Fita Micropore Nexcare Branca é a escolha número um em fitas hospitalares. Ela foi projetada para ter o máximo de suavidade, não interferindo nas funções normais da pele e permitindo que ela transpire para melhor conforto. É uma fita microporosa perfeita para a fixação de curativos, gazes, cateteres, sondas e curativos de drenos, sem deixar resíduos ou irritações na pele, por sua fácil remoção, ela é ótima para mudanças frequentes dos curativos ou gazes, sendo ideal para peles sensíveis. A Fita Micropore Nexcare Branca não sai na água, pode ser aplicada diretamente no machucado e é hipoalergênica. É flexível e perfeita para áreas difíceis de cobrir, garantindo conforto ao usuário. Além disso, ela corta facilmente no tamanho que você precisa. Trata-se de um esparadrapo Micropore dermatologicamente testado que faz parte da linha completa de fitas médicas da 3M, que alia uma variedade de soluções com alta qualidade e tecnologia. Experimente o esparadrapo Nexcare que melhor atende à sua necessidade e sinta a diferença. Conheça este item indispensável em seu kit de primeiros socorros. Principais Benefícios: -Não deixa resíduos ou irritações na pele; -Não sai na água; -Pode ser aplicada diretamente no machucado; -Permite que a pele transpire para melhor conforto; -É flexível, perfeita para áreas difíceis de cobrir; -Corta facilmente.",
        imageURLs: [
          "https://abre.ai/v-acessorios-fita-01",
          "https://abre.ai/v-acessorios-fita-02",
        ],
        basePrice: 359.9,
        categoryId: voleiCategory.id,
        discountPercent: 10,
      },
      {
        name: "Tornozeleira Ortopédica Volei",
        slug: "tornozeleira-ortopedica-volei",
        description:
          "A Tornozeleira Ortopédica ComfortFlex é um suporte de alta qualidade projetado para oferecer estabilidade e conforto durante a recuperação de lesões no tornozelo. Feita com materiais respiráveis e leves, esta tornozeleira proporciona suporte sem restringir os movimentos naturais.",
        imageURLs: [
          "https://abre.ai/v-acessorios-tornozeleira-01",
          "https://abre.ai/v-acessorios-tornozeleira-02",
        ],
        basePrice: 359.9,
        categoryId: voleiCategory.id,
        discountPercent: 10,
      },
      {
        name: "Manguito Volei UV Lightweight",
        slug: "manguito-volei-uv-lightweight",
        description:
          "O Manguito de Pressão Arterial ProCare é um equipamento essencial para monitoramento preciso da pressão arterial. Projetado com materiais de alta qualidade e precisão técnica, este manguito proporciona medições confiáveis e consistentes. Com seu design ergonômico e durável, o Manguito ProCare é compatível com a maioria dos esfigmomanômetros, permitindo aferições precisas e confortáveis. Sua construção em nylon resistente garante durabilidade e vida útil prolongada, mesmo em condições de uso intensivo.",
        imageURLs: [
          "https://abre.ai/v-acessorios-manguito-01",
          "https://abre.ai/v-acessorios-manguito-02",
        ],
        basePrice: 359.9,
        categoryId: voleiCategory.id,
        discountPercent: 10,
      },
      {
        name: "Rede de Vôlei 9.5m",
        slug: "rede-volei-9.5m",
        description:
          "A Rede de Vôlei Profissional EliteX é uma escolha premium para jogadores sérios e entusiastas do voleibol. Construída com materiais de alta qualidade e durabilidade, esta rede oferece desempenho superior em todas as partidas.",
        imageURLs: ["https://abre.ai/v-acessorios-rede"],
        basePrice: 19.9,
        categoryId: voleiCategory.id,
        discountPercent: 10,
      },
      {
        name: "Meia Asics Basic 3pares",
        slug: "meia-asics-basic",
        description:
          "O kit é composto por 3 pares de meias pretas, com calcanhar verdadeiro e cano baixo. Composição: 69% Algodão, 29% Poliamida e 2% Elastano <br>Cor: Preto, cano baixo. Para manter o produto em condições perfeitas e prezar por sua durabilidade sempre olhar antes a etiqueta de cuidado e conservação que está aplicada na parte interna da peça. Abaixo alguns cuidados gerais: Não pisar na parte do calcanhar do tênis (esmagando o contraforte); Não expor o produto a lugares quentes e úmidos por períodos excessivamente longos; Jamais coloque perto de labaredas ou qualquer tipo de fogo, para evitar deformidades de materiais; Evite contato com óleo/gordura/graxa; Para Tênis, sugerimos a lavagem com produtos específicos para lavagem de calçados, com uma escova com cerdas macias em sua superfície.",
        imageURLs: ["https://abre.ai/v-acessorios-meia"],
        basePrice: 59.9,
        categoryId: voleiCategory.id,
        discountPercent: 10,
      },
      {
        name: "Camisa Taubaté Voleibol",
        slug: "camisa-taubate-voleibol",
        description:
          "A Camisa de Vôlei ProFit é uma peça essencial para os entusiastas do esporte. Com um design ergonômico e moderno, esta camisa oferece conforto e desempenho durante as partidas. Feita com tecido respirável de alta qualidade, proporciona liberdade de movimento para movimentos ágeis e precisos na quadra.Seu corte ajustado permite uma sensação de suporte, enquanto os tecidos de secagem rápida ajudam a manter o corpo seco e fresco durante as atividades intensas. Além disso, a camisa apresenta costuras reforçadas para garantir durabilidade e resistência. Com um estilo versátil e disponível em várias cores vibrantes, a Camisa ProFit não só oferece desempenho de alto nível, mas também permite que os jogadores se expressem com estilo dentro e fora da quadra. Ideal para atletas comprometidos que buscam qualidade e conforto em sua vestimenta esportiva",
        imageURLs: ["https://abre.ai/v-roupa-camiseta-taubate", "https://abre.ai/v-roupa-camiseta-taubate-02"],
        basePrice: 359.9,
        categoryId: voleiCategory.id,
        discountPercent: 10,
      },
      {
        name: "Camisa Farma Conde São José Voleibol",
        slug: "camisa-sao-jose-voleibol",
        description:
          "A Camisa de Vôlei EliteXcel é um exemplo de elegância e desempenho. Projetada para atender às demandas do esporte, esta camisa combina estilo e funcionalidade. Feita com um tecido leve e respirável, proporciona conforto durante toda a partida, permitindo uma ampla amplitude de movimentos. Seu design ergonômico e ajuste preciso oferecem suporte aos atletas, mantendo-os frescos e secos mesmo nos momentos mais intensos do jogo. Com tecnologia de absorção de umidade, a Camisa EliteXcel ajuda a manter a pele seca, garantindo conforto durante toda a partida. Além disso, esta camisa é reconhecida por seu estilo moderno e elegante, disponível em diversas cores vibrantes para complementar o estilo pessoal de cada jogador. Seja para competições ou treinos, a Camisa EliteXcel é a escolha ideal para os jogadores que buscam excelência e conforto no vôlei.",
        imageURLs: ["https://abre.ai/v-roupa-camiseta-farma-conde-01"],
        basePrice: 359.9,
        categoryId: voleiCategory.id,
        discountPercent: 10,
      },
    ];
    await prisma.product.createMany({
      data: volei,
    });
    /**const bolasFutebol = [
      
    ];

    await prisma.product.createMany({
      data: bolasFutebol,
    });**/
    const pingpongCategory = await prisma.category.create({
      data: {
        name: "Ping Pong",
        slug: "pingpong",
        imageURL: "https://abre.ai/pingpong-logo",
      },
    });

    const pingpong = [
      {
        name: "Rede P/ Ping Pong Tenis De Mesa Retratil Até 1,65m Universal",
        slug: "rede-ping-pong-tenis-de-mesa-retratil-ate-1.65m-universal",
        description:
          "ESPECIFICAÇÕES TÉCNICAS : <br>- Dimensões da Peça : 14 x 5,5 x 19cm; <br>- Material: Plástico, PVC, Poliéster; <br>- Cor: Cinza com azul e preto; <br>- Rede expansível e adaptável a diversos tamanhos de mesa; <br>- Sistema de clipes com fácil encaixe; <br>- Abertura do encaixe de até 4,5 cm; <br>- Expansível até 165cm (1,65metros);<br>- Adaptável a diversos tamanhos de mesa; <br>- Sistema com mola; <br>- Encaixe fácil; <br>INSTRUÇÕES: Aperte o gatilho na parte superior do suporte e encaixe sobre a mesa, estique a rede até o outro lado da mesa, aperte o outro gatilho e encaixe, assim a rede já estará pronta para uso. <br>- Não esticar a rede além do máximo suportado para não rasgar ou danificar o produto. <br>CONTEÚDO DA EMBALAGEM: <br>1 x Rede Ping Pong Retrátil <br>Garantia do vendedor: 3 meses",
        imageURLs: [
          "https://abre.ai/pp-rede-01",
          "https://abre.ai/pp-rede-02",
          "https://abre.ai/pp-rede-03",
        ],
        basePrice: 37.35,
        categoryId: pingpongCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Raquete Tênis De Mesa Ping Pong Force 1000 Vollo",
        slug: "raquete-tenis-de-mesa-ping-pong-force-1000-vollo",
        description:
          "Desenvolva suas melhores jogadas com a Raquete de Tênis de Mesa Force 1000 Vollo criada especialmente para atletas iniciantes que buscam se aperfeiçoar nos treinos para competição ou lazer. A Raquete de ping-pong Force 1000 possui os dois lados revestidos de borracha, sendo uma vermelha e a outra preta, seguindo as regras da federação internacional de tênis de mesa (ITTF). Seu cabo clássico reto possibilita que o jogador segure a raquete pelo cabo com o indicador sobre as borrachas, sendo o modelo de raquete de tênis de mesa mais indicado para os novatos. <br>Praticar tênis de mesa, também chamado como ping-pong, é uma excelente maneira de estimular o cérebro e ainda melhorar a coordenação, o raciocínio rápido, e os reflexos. E melhor ainda se for praticado com as raquetes corretas que unem custo-benefício e qualidade Vollo. <br>Especificações Raquete Tênis de Mesa Force 1000 Vollo <br>Composição: Madeira e borracha <br>Cor: madeira, preto e vermelha <br>Peso aproximado: 166 g <br>Dimensões aproximadas: 2,3 x 15 x 25,5 cm <br>Folha: 6 mm <br>Borracha: 1,5 mm <br>Trazemos o que há de mais atual e moderno no mundo da moda esportiva, priorizando sempre a qualidade e o conforto. <br>Procuramos não apenas atender às suas necessidades, mas superar expectativas. <br>Realize sua compra com FRETE GRÁTIS, para isso adicione mais produtos nossos ao Carrinho até atender as condições do Mercado Livre <br>* Exceto para algumas cidades das regiões Norte e Nordeste <br>BENEFÍCIOS de comprar com A Elite Sport <br>1 - Produtos disponíveis à PRONTA ENTREGA em nosso estoque; <br>2 - GARANTIA de até 90 dias, dependendo do fabricante. <br>3 - Envio realizado pelo MERCADO ENVIOS que realiza as entregas em menor tempo; <br>4 - Pedidos com pagamento aprovado até às 12:00 hrs são despachados no mesmo dia. <br> Nós somos A Elite Sport, uma empresa com mais de 50 anos de atuação no mercado esportivo com loja física. <br>Isso porque somos uma empresa estruturada com foco na agilidade, lealdade e atendimento especializado. Somos uma empresa que tem a missão de garantir a satisfação total de nosso cliente, tanto nos produtos quanto no atendimento. Assim estabelecendo uma relação de confiança! Pois queremos uma parceria por muito tempo com nossos clientes. <br>GARANTIA <br>Todos os nossos produtos possuem garantia de 90 dias (dependendo do fabricante), tornando assim sua experiência de compra mais garantida! Todos nossos produtos são ORIGINAIS.",
        imageURLs: [
          "https://abre.ai/pp-raquete-cinza-01",
          "https://abre.ai/pp-raquete-cinza-02",
          "https://abre.ai/pp-raquete-cinza-03",
        ],
        basePrice: 30,
        categoryId: pingpongCategory.id,
        discountPercent: 5,
      },
      {
        name: "Bolinha De Ping Pong Kit Com 6 Tênis De Mesa Profissional",
        slug: "bolinha-de-ping-pong-kit-com-6-profissional",
        description:
          "Apresentamos o Kit Bolinha De Ping Pong da marca Vollo, perfeito para jogadores profissionais de tênis de mesa. Este kit vem com 6 unidades, todas embaladas em uma caixa para garantir a segurança e a integridade do produto durante o transporte. <br>As bolas são de cor laranja, uma cor vibrante que facilita a visualização durante o jogo. Com um diâmetro de 40 mm, estas bolas são do tamanho padrão para competições profissionais, garantindo que você tenha a experiência mais autêntica possível. <br> O modelo VT612 é classificado com 2 estrelas, o que indica a sua alta qualidade e desempenho. Estas bolas são feitas para durar, resistindo a jogos intensos e a longos períodos de prática. <br>Com o Kit Bolinha De Ping Pong da Vollo, você estará equipado para jogar no seu melhor. Seja para treinar para uma competição ou para se divertir com amigos, este kit é a escolha perfeita para qualquer amante de tênis de mesa.",
        imageURLs: [
          "https://abre.ai/pp-bolinha-01",
          "https://abre.ai/pp-bolinha-02",
        ],
        basePrice: 30,
        categoryId: pingpongCategory.id,
        discountPercent: 5,
      },
      {
        name: "Mesa de ping pong Klopf 1084 fabricada em MDF cor azul",
        slug: "mesa-de-ping-pong-klopf-1084-mdf-cor-azul",
        description:
          "Que o jogo comece! A mesa de ping pong Klopf 1084 é muito versátil para se divertir com quem você quiser. Nas noites de verão ou para jogar dentro de casa no inverno, você sempre a terá disponível para desfrutar de um bom jogo e relaxar. <br>Dobrável <br>O sistema dobrável permite que você tenha a mesa em 3 posições: sua forma tradicional para 2 ou 4 pessoas; para jogar o frontão e treinar suas habilidades; ou totalmente dobrada, o que facilita o armazenamento da mesa em espaços pequenos e apertados. Isso torna mais simples e fácil movê-la do lugar.",
        imageURLs: ["https://abre.ai/pp-mesa-01", "https://abre.ai/pp-mesa-02"],
        basePrice: 1500,
        categoryId: pingpongCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Rede Ping-Pong Cor Preta",
        slug: "pp-rede-preto",
        description:
          "A Rede de Pingue-Pongue Profissional ProNet é um acessório essencial para qualquer mesa de pingue-pongue. Criada com materiais de alta qualidade e durabilidade, esta rede foi projetada para oferecer estabilidade e desempenho excepcionais durante as partidas. Composta por uma malha resistente e faixas de fixação robustas, a Rede ProNet garante uma montagem fácil e segura em qualquer mesa padrão de pingue-pongue. Seu sistema de fixação ajustável permite um encaixe perfeito, garantindo que a rede permaneça esticada e nivelada durante o jogo.",
        imageURLs: [
          "https://abre.ai/pp-rede-preto-01",
          "https://abre.ai/pp-rede-preto-02",
        ],
        basePrice: 65,
        categoryId: pingpongCategory.id,
        discountPercent: 5,
      },
      {
        name: "Mesa de ping pong Klopf 1087 fabricada em MDP cor preto",
        slug: "mesa-de-ping-pong-klopf-1087-fabricada-em-mdp-cor-preto",
        description:
          "Que o jogo comece! A mesa de ping pong Klopf 1087 é muito versátil para se divertir com quem você quiser. Nas noites de verão ou para jogar dentro de casa no inverno, você sempre a terá disponível para desfrutar de um bom jogo e relaxar. <br>Dobrável <br>O sistema dobrável permite que você tenha a mesa em 3 posições: sua forma tradicional para 2 ou 4 pessoas; para jogar o frontão e treinar suas habilidades; ou totalmente dobrada, o que facilita o armazenamento da mesa em espaços pequenos e apertados. Isso torna mais simples e fácil movê-la do lugar.",
        imageURLs: [
          "https://abre.ai/pp-bolinha-01",
          "https://abre.ai/pp-bolinha-02",
        ],
        basePrice: 1600,
        categoryId: pingpongCategory.id,
        discountPercent: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: pingpong,
    });
    const skateCategory = await prisma.category.create({
      data: {
        name: "Skate",
        slug: "skate",
        imageURL: "https://abre.ai/skate-logo",
      },
    });

    const skate = [
      {
        name: "Skate Preto Standard",
        slug: "skate-preto-standard",
        description: "O Skate Thunderbolt é a escolha perfeita para entusiastas do skate. Com um design moderno e durável, este skate proporciona estabilidade e manobrabilidade ideais para executar truques radicais. Construído com madeira de alta qualidade e componentes resistentes, o Skate Thunderbolt oferece uma experiência de patinação emocionante para skatistas de todos os níveis.",
        imageURLs: ["https://abre.ai/sk-skate-black",
        "https://abre.ai/sk-skate-black-02"],
        basePrice: 429.99,
        categoryId: skateCategory.id,
        discountPercent: 0,
      },
      {
        name: "Roda Skate Rolamento",
        slug: "roda-skate-rolamento",
        description: "As Rodas de Skate TurboSpeed são projetadas para proporcionar velocidade e aderência superiores em qualquer superfície. Feitas de poliuretano de alta qualidade e com um padrão de superfície especial, essas rodas oferecem um desempenho excepcional. Seja para manobras em skate parks ou para passeios casuais, as Rodas TurboSpeed oferecem a combinação perfeita de velocidade e controle.",
        imageURLs: ["https://abre.ai/sk-skate-roda-01",
        "https://abre.ai/sk-skate-roda-02",
        "https://abre.ai/sk-skate-roda-03"],
        basePrice: 429.99,
        categoryId: skateCategory.id,
        discountPercent: 0,
      },
      {
        name: "Capacete de Proteção Para Skate Branco",
        slug: "capacete-proteção-skate-branco",
        description: "O Capacete ProShield oferece segurança e estilo enquanto você anda de skate. Construído com materiais de alta resistência e um design aerodinâmico, este capacete oferece proteção contra impactos, proporcionando conforto e confiança. Com ventilação ajustável e um ajuste perfeito, o Capacete ProShield é essencial para skatistas preocupados com segurança.",
        imageURLs: ["https://abre.ai/sk-capacete-branco-01",
        "https://abre.ai/sk-capacete-branco-02",
        "https://abre.ai/sk-capacete-branco-03",
        "https://abre.ai/sk-capacete-branco-04"],
        basePrice: 429.99,
        categoryId: skateCategory.id,
        discountPercent: 0,
      },
      {
        name: "Joelheira de Proteção Para Skate",
        slug: "joelheira-protecao-skate",
        description: "A Joelheira ArmaduraX é uma proteção robusta para os joelhos durante a prática de skate. Com uma estrutura durável e acolchoamento interno confortável, oferece proteção essencial contra impactos. Com ajustes de velcro e um design ergonômico, a Joelheira ArmaduraX garante segurança sem comprometer a mobilidade durante as manobras.",
        imageURLs: ["https://abre.ai/sk-joelheira-1",
        "https://abre.ai/sk-joelheira-2",
        "https://abre.ai/sk-joelheira-3"],
        basePrice: 429.99,
        categoryId: skateCategory.id,
        discountPercent: 0,
      },
      {
        name: "Truck Para Skate Profissional",
        slug: "",
        description: "O Truck BlastMaster é essencial para um desempenho suave e estável no skate. Fabricado com materiais robustos e eixos duráveis, este truck oferece resistência e precisão em cada curva e manobra. Com ajustes precisos, proporciona o equilíbrio perfeito entre estabilidade e capacidade de manobra para uma experiência de skate excepcional.",
        imageURLs: ["https://abre.ai/sk-truck-01",
        "https://abre.ai/sk-truck-02",
        "https://abre.ai/sk-truck-03",
        "https://abre.ai/sk-truck-04"],
        basePrice: 429.99,
        categoryId: skateCategory.id,
        discountPercent: 0,
      },
      {
        name: "Skate Customizado de Halloween",
        slug: "skate-halloween",
        description: "O Skate Midnight Reaper é um skate exclusivo para celebrar o Halloween. Com um visual único e detalhes temáticos assustadores, este skate proporciona uma experiência emocionante para os amantes do skate e do Halloween. Projetado com materiais duráveis e uma estética sombria, o Skate Midnight Reaper é perfeito para quem deseja se divertir com estilo nesta época assustadora do ano.",
        imageURLs: ["https://abre.ai/sk-skate-halloween-01",
        "https://abre.ai/sk-skate-halloween-02"],
        basePrice: 429.99,
        categoryId: skateCategory.id,
        discountPercent: 0,
      },
      {
        name: "Lixa Roxa Skate",
        slug: "sk-lixa-roxa",
        description: "A Lixa de Skate PurpleGrip é a escolha ideal para skatistas que buscam aderência e estilo. Com sua cor vibrante roxa, esta lixa oferece excelente aderência para os pés durante as manobras, garantindo estabilidade e controle sobre o skate. Fabricada com material de alta qualidade, a Lixa PurpleGrip possui uma superfície durável que mantém sua aderência mesmo em condições adversas. Além de proporcionar uma excelente tração, seu tom roxo vibrante adiciona um toque de estilo e personalidade ao seu skate, tornando-a uma escolha atraente para aqueles que buscam funcionalidade e estética.",
        imageURLs: ["https://abre.ai/sk-lixa-roxa"],
        basePrice: 429.99,
        categoryId: skateCategory.id,
        discountPercent: 0,
      },
    ];
    await prisma.product.createMany({
      data: skate,
    });
    const basqueteCategory = await prisma.category.create({
      data: {
        name: "Basquete",
        slug: "basquete",
        imageURL: "https://abre.ai/basketball-logo",
      },
    });


    /**const roupasBasquete = [

    ];

    await prisma.product.createMany({
      data: roupasBasquete,
    });**/




    /*const bolasVolei = [

    ];

    await prisma.product.createMany({
      data: bolasVolei,
    });*/

    const tenisCategory = await prisma.category.create({
      data: {
        name: "Tênis",
        slug: "tenis",
        imageURL: "https://abre.ai/tenis-logo",
      },
    });

    const tenis = [
      {
        name: "Clash 98 v2",
        slug: "raquete-clash-98-v2",
        description:
          "A raquete para o jogador moderno chegou. Projetada com propriedades de carbono e um aro com geometria exclusiva, a Clash é uma raquete flexível em todas as suas dimensões, mantendo a melhor estabilidade de uma raquete de performance. O resultado é uma raquete que exala uma confiança inigualável e precisão para golpes livres - uma raquete que oferece uma experiência de jogo completamente diferente. Gênero <br>Unissex <br>Familia: Clash <br>Tamanho do Aro: 98 sq in <br>Padrão de Encordoamento: 16x20 <br>Peso: 10.9 oz / 310 g <br>Balanço com corda: 30.6 cm / 12 pts HL <br>Comprimento: 27 / 68.58 cm <br>Encordoada: Não",
        imageURLs: [
          "https://abre.ai/ts-raquete-01",
          "https://abre.ai/ts-raquete-02",
          "https://abre.ai/ts-raquete-03",
        ],
        basePrice: 1850,
        categoryId: tenisCategory.id,
        discountPercent: 10,
      },
      {
        name: "Bola de Tênis Head Master Pack com 12 Tubos",
        slug: "bola-de-tênis-head-master-pack-com-12-tubos",
        description:
          "Marca destaque em produção de artigos para Tênis, a Head tem produtos que são desenvolvidos com alta tecnologia para proporcionar total desempenho, e são utilizados por alguns dos melhores atletas do mundo, que buscam constantemente quebrar recordes e romper limites. A Bola de Tênis Head Master Pack com 12 Tubos é ideal para melhorar a precisão e o dinamismo das jogadas, ganha maleabilidade conforme o uso. Sua estrutura tem menor desgaste, por isso oferece agilidade às partidas por mais tempo. <br>Conheça as características da Bola de Tênis Head Master <br>- Perfil: Tênis; <br>- Detalhamento: Bola de Tênis, pack com 12 tubos, cada tubo contendo 3 bolas, ideal para todos os tipos de quadra, alta densidade e alta qualidade de costura, filtro tradicional, bola aprovada pela ITF (Federação Internacional de Tênis); <br>- Origem: Importada.",
        imageURLs: [
          "https://abre.ai/ts-bolinha-01",
          "https://abre.ai/ts-bolinha-02",
          "https://abre.ai/ts-bolinha-03",
        ],
        basePrice: 422,
        categoryId: tenisCategory.id,
        discountPercent: 5,
      },
      {
        name: "Bolsa de Bola e raquete Gamma HI Rise Preto - Para 75 Bolas",
        slug: "bolsa-de-bola-gamma-rise-preto-para-75-bolas",
        description:
          "Internacionalmente reconhecida por seus produtos de qualidade, a Gamma tem como foco principal inovar em tecnologias que melhorem o desempenho dos tenistas. Assim, a marca consolidou-se como referência em artigos de alta performance, durabilidade e conforto. Conheça toda essa experiência em produção de artigos para Tênis através da Cesto de Bola Gamma HI Rise, ele foi desenvolvido com fibras de polipropilenos, tem pintura fosca e rodas EZ-Go que facilitam o transporte. <br>Conheça as características do Cesto de Bola Gamma HI Rise Laranja - Para 75 Bolas <br>- Perfil: Tennis; <br>- Material: Metal reforçado com fibras de polipropileno; <br>- Detalhamento: O cesto tem capacidade para 75 bolas, alças para melhor transporte que se transformam em pés. Pintura fosca e rodas EZ-Go que facilitam o transporte. É ideal para treinos e aulas. Dimensões aproximadas: 26cm X 26cm X 33cm X 83cm (L X C X A X <br>Considerando a altura com as alças ou pés); <br>- Origem: Importada.",
        imageURLs: [
          "https://abre.ai/ts-bolsa-wilson-preta-01",
          "https://abre.ai/ts-bolsa-wilson-preta-02",
        ],
        basePrice: 440,
        categoryId: tenisCategory.id,
        discountPercent: 5,
      },
      {
        name: "Overgrip Wilson Wrap Pack com 12 Unidades Sortidos",
        slug: "overgrip-wilson-wrap-pack-com-12-unidades-sortidos",
        description:
          "A Wilson é uma empresa líder no desenvolvimento de artigos esportivos para Tênis, Golfe, Futebol Americano, Basquete, Baseball, Vôlei de Praia, entre outros esportes, comercializando seus produtos em mais de 120 países ao redor do mundo. Sempre inovadora, traz o que há de melhor em tecnologia. Um exemplo disso é o Overgrip Wilson Wrap Pack com 12 Unidades Sortidos, que potencializam a tração e a firmeza, cobre perfeitamente a região do cabo e promove excelente aderência nas jogadas.  <br>Conheça as características do Overgrip Wilson Wrap Pack com 12 Unidades Sortidos <br> - Perfil: Tênis; <br> - Material: Combinação de 50% poliuretano e 50% feltro; <br>- Detalhamento: Overgrip misto, pack com 12 overgrips, contém as cores: 3 unidades preto, 2 unidades branca, 2 unidades marrom, 2 unidades rosa, 1 unidade verde, 1 unidade amarela e 1 unidade roxo, oferece maior sensibilidade e conforto, medidas: 2,5 cm x 110 cm x <br>0,6 mm; <br>- Garantia do fabricante: Contra defeito de fabricação; <br> - Origem: Importado.",
        imageURLs: [
          "https://abre.ai/ts-wilson-bolinha-01",
          "https://abre.ai/ts-wilson-bolinha-02",
        ],
        basePrice: 120,
        categoryId: tenisCategory.id,
        discountPercent: 5,
      },
      {
        name: "Munhequeira Nike Swoosh Branca com 2 Unidades - Longa",
        slug: "munhequeira-nike-swoosh-branca-com-2-unidades-longa",
        description:
          "Quando menciona-se em desenvolver confecção para tenistas, a Nike é uma das marcas que mais destaca-se no ramo esportivo. Conhecida por seus produtos de qualidade, a Nike está sempre em busca de novas tecnologias que melhorem o desempenho dos atletas. A Munhequeira Nike Swoosh Branca com 2 Unidades - Longa foi confeccionada para oferecer total precisão de movimentos da raquete e absorver a umidade da pele, sendo a escolha ideal para os atletas que querem a máxima performance nas quadras. <br>Conheça as Características da Munhequeira Nike Swoosh Branca com 2 Unidades - Longa <br>- Perfil: Tênis; <br>- Material: 72% algodão, 21% nylon, 3% borracha e 2% elastano; <br>- Detalhamento: Pacote com 2 Unidades, branco, formato anatômico, elástico para melhor ajuste, tecido atoalhado, unissex, sem costuras, swoosh bordado na parte central, total proteção e conforto nos golpes com a raquete; <br>- Origem: Importada.",
        imageURLs: [
          "https://abre.ai/ts-raquete-wilson-vermelha-01",
          "https://abre.ai/ts-raquete-wilson-vermelha-02",
          "https://abre.ai/ts-raquete-wilson-vermelha-03",
        ],
        basePrice: 130,
        categoryId: tenisCategory.id,
        discountPercent: 5,
      },
      {
        name: "Testeira Nike Swoosh Cinza",
        slug: "testeira-nike-swoosh-cinza",
        description:
          "Em busca do que há de melhor em artigos esportivos, a Nike está sempre inovando e desenvolvendo produtos cada vez melhores. É por isso que os atletas confiam nessa marca que está há anos no mercado, surpreendendo em tecnologias e qualidade. A Testeira Nike Swoosh Cinza ajuda a absorver o suor, evitando que ele atrapalhe o bom desempenho.  <br>Conheça as Características da Testeira Nike Swoosh Cinza <br>- Perfil: Tênis; <br>- Material: 80% algodão, 16% nylon e 4% elastano; <br>- Detalhamento: Testeira unissex, proporciona ajuste perfeito e absorve o suor na região da testa, swoosh bordado na parte central; <br>- Medida: Unico <br>- Garantia do fabricante: Contra defeito de fabricação; <br>- Origem: Importada.",
        imageURLs: [
          "https://abre.ai/ts-raquete-wilson-rosa-01",
          "https://abre.ai/ts-raquete-wilson-rosa-02",
        ],
        basePrice: 62,
        categoryId: tenisCategory.id,
        discountPercent: 10,
      },
      {
        name: "Munhequeira Nike Swoosh Branca com 2 Unidades - Longa",
        slug: "munhequeira-nike-swoosh-branca-com-2-unidades-longa",
        description:
          "Quando menciona-se em desenvolver confecção para tenistas, a Nike é uma das marcas que mais destaca-se no ramo esportivo. Conhecida por seus produtos de qualidade, a Nike está sempre em busca de novas tecnologias que melhorem o desempenho dos atletas. A Munhequeira Nike Swoosh Branca com 2 Unidades - Longa foi confeccionada para oferecer total precisão de movimentos da raquete e absorver a umidade da pele, sendo a escolha ideal para os atletas que querem a máxima performance nas quadras. <br>Conheça as Características da Munhequeira Nike Swoosh Branca com 2 Unidades - Longa <br>- Perfil: Tênis; <br>- Material: 72% algodão, 21% nylon, 3% borracha e 2% elastano; <br>- Detalhamento: Pacote com 2 Unidades, branco, formato anatômico, elástico para melhor ajuste, tecido atoalhado, unissex, sem costuras, swoosh bordado na parte central, total proteção e conforto nos golpes com a raquete; <br>- Origem: Importada.",
        imageURLs: [
          "https://abre.ai/ts-raquete-wilson-01",
          "https://abre.ai/ts-raquete-wilson-02",
          "https://abre.ai/ts-raquete-wilson-03",
        ],
        basePrice: 130,
        categoryId: tenisCategory.id,
        discountPercent: 5,
      },
    ];

    await prisma.product.createMany({
      data: tenis,
    });
    const basquete = [
      {
        name: "Bola Basquete Wilson Standard",
        slug: "bola-basquete-wilson-standard",
        description:
          "Jayson não tem vergonha de seu amor por fortes automóveis americanos. Há algo em seu visual atemporal que continua bonito. O Tatum 1 'Old School' não é diferente. Feito em preto elegante e cinza frio, é mais fresco do que a pintura fresca em um muscle car clássico. Acelere, pedale ao som do metal, vrum vrum - seja como for que você queira dizer, basta entrar na quadra e marcar.",
        imageURLs: [
          "https://abre.ai/bk-balls-laranja-01",
          "https://abre.ai/bk-balls-laranja-02",
          "https://abre.ai/bk-balls-laranja-03",
        ],
        basePrice: 999.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Bola Penalty Shoot Bege",
        slug: "bola-penalty-shoot-bege",
        description:
          "Jayson não tem vergonha de seu amor por fortes automóveis americanos. Há algo em seu visual atemporal que continua bonito. O Tatum 1 'Old School' não é diferente. Feito em preto elegante e cinza frio, é mais fresco do que a pintura fresca em um muscle car clássico. Acelere, pedale ao som do metal, vrum vrum - seja como for que você queira dizer, basta entrar na quadra e marcar.",
        imageURLs: [
          "https://abre.ai/bk-balls-bege-01",
          "https://abre.ai/bk-balls-bege-02",
        ],
        basePrice: 999.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Bola Basquete Wilson Rosa",
        slug: "bola-basquete-wilson-rosa",
        description:
          "Jayson não tem vergonha de seu amor por fortes automóveis americanos. Há algo em seu visual atemporal que continua bonito. O Tatum 1 'Old School' não é diferente. Feito em preto elegante e cinza frio, é mais fresco do que a pintura fresca em um muscle car clássico. Acelere, pedale ao som do metal, vrum vrum - seja como for que você queira dizer, basta entrar na quadra e marcar.",
        imageURLs: [
          "https://abre.ai/bk-balls-rosa-01",
          "https://abre.ai/bk-balls-rosa-02",
          "https://abre.ai/bk-balls-rosa-03",
        ],
        basePrice: 999.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Bola Basquete Wilson Preto",
        slug: "bola-basquete-wilson-preto",
        description:
          "Jayson não tem vergonha de seu amor por fortes automóveis americanos. Há algo em seu visual atemporal que continua bonito. O Tatum 1 'Old School' não é diferente. Feito em preto elegante e cinza frio, é mais fresco do que a pintura fresca em um muscle car clássico. Acelere, pedale ao som do metal, vrum vrum - seja como for que você queira dizer, basta entrar na quadra e marcar.",
        imageURLs: [
          "https://abre.ai/bk-balls-black-01",
          "https://abre.ai/bk-balls-black-02",
        ],
        basePrice: 999.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Tênis Jordan Tatum 1 V3 Masculino",
        slug: "tênis-jordan-tatum-1-V3-masculino",
        description:
          "Jayson não tem vergonha de seu amor por fortes automóveis americanos. Há algo em seu visual atemporal que continua bonito. O Tatum 1 'Old School' não é diferente. Feito em preto elegante e cinza frio, é mais fresco do que a pintura fresca em um muscle car clássico. Acelere, pedale ao som do metal, vrum vrum - seja como for que você queira dizer, basta entrar na quadra e marcar.",
        imageURLs: [
          "https://abre.ai/bk-tenis-pv-01",
          "https://abre.ai/bk-tenis-pv-02",
          "https://abre.ai/bk-tenis-pv-03",
          "https://abre.ai/bk-tenis-pv-04",
        ],
        basePrice: 999.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Bola Basquete Jordan Vinho",
        slug: "bola-basquete-jordan-vinho",
        description:
          "Jayson não tem vergonha de seu amor por fortes automóveis americanos. Há algo em seu visual atemporal que continua bonito. O Tatum 1 'Old School' não é diferente. Feito em preto elegante e cinza frio, é mais fresco do que a pintura fresca em um muscle car clássico. Acelere, pedale ao som do metal, vrum vrum - seja como for que você queira dizer, basta entrar na quadra e marcar.",
        imageURLs: [
          "https://abre.ai/bk-balls-jordan-01",
          "https://abre.ai/bk-balls-jordan-02",
        ],
        basePrice: 999.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Bola Basquete Jordan Preto e Dourado",
        slug: "bola-basquete-jordan-preto-dourado",
        description:
          "Jayson não tem vergonha de seu amor por fortes automóveis americanos. Há algo em seu visual atemporal que continua bonito. O Tatum 1 'Old School' não é diferente. Feito em preto elegante e cinza frio, é mais fresco do que a pintura fresca em um muscle car clássico. Acelere, pedale ao som do metal, vrum vrum - seja como for que você queira dizer, basta entrar na quadra e marcar.",
        imageURLs: [
          "https://abre.ai/bk-balls-dourado-1",
          "https://abre.ai/bk-balls-dourado-02",
          "https://abre.ai/bk-balls-dourado-03",
        ],
        basePrice: 999.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },

      {
        name: "Tênis Jordan Tatum 1 V3 Masculino",
        slug: "tênis-jordan-tatum-1-V3-masculino",
        description:
          "Jayson não tem vergonha de seu amor por fortes automóveis americanos. Há algo em seu visual atemporal que continua bonito. O Tatum 1 'Old School' não é diferente. Feito em preto elegante e cinza frio, é mais fresco do que a pintura fresca em um muscle car clássico. Acelere, pedale ao som do metal, vrum vrum - seja como for que você queira dizer, basta entrar na quadra e marcar.",
        imageURLs: [
          "https://abre.ai/bk-tenis-pv-01",
          "https://abre.ai/bk-tenis-pv-02",
          "https://abre.ai/bk-tenis-pv-03",
          "https://abre.ai/bk-tenis-pv-04",
        ],
        basePrice: 999.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Tênis Jordan Stay Loyal 2",
        slug: "tenis-jordan-stay-loyal-2",
        description:
          "Inspirado nas gerações de J, esse tênis é uma colagem de tudo o que é cool. Detalhes do design relembram décadas de calçados lendários enquanto prestam homenagem à carreira de MJ. Mesh respirável, material resistente e amortecimento Air leve no calcanhar tornam muito mais fácil seguir os passos da grandeza.",
        imageURLs: [
          "https://abre.ai/bk-tenis-white-01",
          "https://abre.ai/bk-tenis-white-02",
          "https://abre.ai/bk-tenis-white-03",
          "https://abre.ai/bk-tenis-white-04",
        ],
        basePrice: 669.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "LeBron NXXT Gen",
        slug: "lebron-nxxt-gen",
        description:
          "Seja você um saltador do tipo enterrada ou um jogador que fica abaixo da borda vagando pela linha de base, sinta-se mais rápido, mais baixo na quadra e seguro no LeBron NXXT Gen. Nós o adaptamos especificamente para atender às demandas do ritmo acelerado do jogo, para que você possa ficar à frente da oposição com sua velocidade e força em todas as direções.",
        imageURLs: [
          "https://abre.ai/bk-tenis-verde-01",
          "https://abre.ai/bk-tenis-verde-02",
          "https://abre.ai/bk-tenis-verde-03",
          "https://abre.ai/bk-tenis-verde-04",
        ],
        basePrice: 1299.99,
        categoryId: basqueteCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: "Tênis Nike Air Force",
        slug: "tenis-nike-air-force",
        description:
          "O brilho perdura no Nike Air Force 1 ’07, o tênis original do basquete que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar.",
        imageURLs: [
          "https://abre.ai/bk-tenis-cinza-01",
          "https://abre.ai/bk-tenis-cinza-02",
          "https://abre.ai/bk-tenis-cinza-03",
          "https://abre.ai/bk-tenis-cinza-04",
        ],
        basePrice: 799.99,
        categoryId: basqueteCategory.id,
        discountPercent: 15, // 10% discount
      },
      {
        name: "Tênis Nike LeBron 20",
        slug: "tenis-nike-leBron-20",
        description:
          "Duas décadas de uma carreira que supera todas as expectativas, LeBron se recusou a se contentar com nada menos do que a grandeza, mesmo quando foi ele quem estabeleceu o padrão para as próximas gerações. O LeBron 20 é mais leve, próximo ao chão e turbinado. É diferente de qualquer design que LeBron já vestiu antes - confortável e com suporte, mas com cano baixo, rápido como um relâmpago e criado para ficar à frente do estilo de jogo frenético de hoje. Esse modelo é feito com um cabedal de couro clássico, uma referência ao impacto do Rei na cultura do calçado.",
        imageURLs: [
          "https://abre.ai/bk-tenis-bege-01",
          "https://abre.ai/bk-tenis-bege-02",
          "https://abre.ai/bk-tenis-bege-03",
          "https://abre.ai/bk-tenis-bege-04",
        ],
        basePrice: 1369.99,
        categoryId: basqueteCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: "Shorts Nike Chicago Bulls Courtside Masculino",
        slug: "shorts-nike-chicago-bulls-courtside-masculino",
        description:
          "Os Shorts Chicago Bulls Authentic são um tributo à lendária equipe da NBA. Com o icônico logotipo do Chicago Bulls, estes shorts oferecem estilo e conforto. Feitos com tecido respirável e corte moderno, proporcionam liberdade de movimento para jogar ou exibir seu amor pelo time, tanto nas quadras quanto fora delas. Vista-se com a tradição e a energia do Chicago Bulls!",
        imageURLs: [
          "https://abre.ai/bk-roupa-bermuda-v-01",
          "https://abre.ai/bk-roupa-bermuda-v-02",
          "https://abre.ai/bk-roupa-bermuda-v-03",
        ],
        basePrice: 299.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Shorts Nike Los Angeles Lakers Icon",
        slug: "shorts-nike-los-angeles-lakers-icon",
        description:
          "Os Shorts Chicago Bulls NBA Edition são uma declaração de estilo para os fãs apaixonados. Apresentando cores vibrantes e o logotipo clássico do Chicago Bulls, estes shorts oferecem um visual autêntico da NBA. Com tecido leve e confortável, são ideais para prática esportiva ou momentos casuais. Mostre seu apoio ao time com estes shorts emblemáticos do Chicago Bulls.",
        imageURLs: [
          "https://abre.ai/bk-roupa-bermuda-m-01",
          "https://abre.ai/bk-roupa-bermuda-m-02",
        ],
        basePrice: 399.99,
        categoryId: basqueteCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Moletom Nike LeBron James Edição Especial Masculina",
        slug: "moletom-nike-leBron-james-edição-especial-masculina",
        description:
          "O Moletom NBA Team Edition é uma peça essencial para os amantes da liga. Com um design clássico e confortável, este moletom apresenta o logotipo oficial da NBA, oferecendo estilo e aquecimento. Feito com tecido macio e durável, é perfeito para demonstrar seu apoio ao basquete ou para uso diário, mantendo você confortável e elegante em qualquer situação.",
        imageURLs: [
          "https://abre.ai/bk-roupa-moletom-01",
          "https://abre.ai/bk-roupa-moletom-02",
        ],
        basePrice: 649.99,
        categoryId: basqueteCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: "Blusão Jordan Zion Dri-FIT Crossover Masculino",
        slug: "blusão-jordan-zion-dri-fit-crossover-masculino",
        description:
          "A Regata Chicago Bulls é um símbolo de paixão e orgulho pelo lendário time da NBA. Com o logotipo icônico e cores distintas, esta regata oferece estilo e conforto. Feita com tecido macio e respirável, é uma escolha perfeita para mostrar seu apoio aos Bulls em dias quentes ou para complementar seu estilo esportivo. Mostre sua devoção ao Chicago Bulls com esta regata autêntica.",
        imageURLs: [
          "https://abre.ai/bk-roupa-regata-b-01",
          "https://abre.ai/bk-roupa-regata-b-02",
        ],
        basePrice: 299.99,
        categoryId: basqueteCategory.id,
        discountPercent: 15, // 10% discount
      },
      {
        name: "Camiseta Nike NBA Team 31 Masculina",
        slug: "camiseta-nike-nba-team-31-masculina",
        description:
          "A Regata Brooklyn Nets é uma representação da determinação e estilo desta equipe icônica da NBA. Com o logotipo distinto dos Nets, esta regata oferece leveza e conforto para qualquer ocasião. Feita com material respirável e um corte moderno, esta regata é perfeita para exibir seu apoio ao Brooklyn Nets com orgulho, enquanto mantém um estilo urbano e elegante.",
        imageURLs: [
          "https://abre.ai/bk-roupa-regata-p-01",
          "https://abre.ai/bk-roupa-regata-p-02",
        ],
        basePrice: 149.99,
        categoryId: basqueteCategory.id,
        discountPercent: 5, // 10% discount
      },
      
    ];

    await prisma.product.createMany({
      data: basquete,
    });


    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
