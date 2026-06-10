// Banco de Dados Oficial de 100 Temas Absurdos do SHITAGRAM™
        const absurdThemes = [
            // 1-10 (Comida & Restaurante)
            { id: 'hamburguer-traidor', emoji: '🍔', title: "O Hambúrguer Traidor", mission: "No dia 09/06/2026, o hambúrguer saltou do pão como um paraquedista bêbado e aterrou nas calças brancas novas. As batatas fritas eram cúmplices.", bonus: "+500 se disseres \"crime gastronómico\".", bonusTerm: "crime gastronómico", bonusVal: 500, category: "Batalha Gourmet" },
            { id: 'batatas-frias', emoji: '🍟', title: "As Batatas Fritas Geladas", mission: "Provar que as batatas frias têm a mesma temperatura e frieza emocional que a tua pior relação passada.", bonus: "+300 se disseres \"pedra de gelo\".", bonusTerm: "pedra de gelo", bonusVal: 300, category: "Batalha Gourmet" },
            { id: 'cadeira-restaurante', emoji: '🪑', title: "A Cadeira Traiçoeira", mission: "A cadeira soltou um prego estratégico para atacar o teu bumbum. Exige cirurgia estética gratuita e indemnização.", bonus: "+1000 por \"dramatização\".", bonusTerm: "dramatização", bonusVal: 1000, category: "Batalha Gourmet" },
            { id: 'iogurte-morango', emoji: '🥛', title: "O Iogurte Suicida", mission: "Provar que o iogurte se atirou voluntariamente e com intenções dramáticas para manchar o sofá novo.", bonus: "+500 por descrever a \"trajetória da queda\".", bonusTerm: "trajetória da queda", bonusVal: 500, category: "Batalha Gourmet" },
            { id: 'maquina-cafe', emoji: '☕', title: "A Máquina Ditadora", mission: "A máquina recusou fazer expressos, cuspiu água quente e autoproclamou-se imperadora da bancada da cozinha.", bonus: "+500 por \"insulto elegante\".", bonusTerm: "insulto elegante", bonusVal: 500, category: "Batalha Gourmet" },
            { id: 'arroz-doce', emoji: '🍚', title: "O Arroz Doce Fugitivo", mission: "O arroz doce desapareceu do prato e foi encontrado debaixo da mesa rindo-se e gozando com a tua cara.", bonus: "+400 se disseres \"abandono afetivo\".", bonusTerm: "abandono afetivo", bonusVal: 400, category: "Batalha Gourmet" },
            { id: 'salada-greve', emoji: '🥗', title: "A Salada em Revolta", mission: "A alface e os tomates criaram uma frente de resistência ecológica no prato e recusam-se a cooperar.", bonus: "+500 por falar em \"ditadura do garfo\".", bonusTerm: "ditadura do garfo", bonusVal: 500, category: "Batalha Gourmet" },
            { id: 'vinho-casa', emoji: '🍷', title: "O Vinho Existencialista", mission: "O vinho questionou o seu próprio aroma e recusa-se a descer pela garganta sem terapia ou consulta prévia.", bonus: "+600 por simular \"choro de uva\".", bonusTerm: "choro de uva", bonusVal: 600, category: "Batalha Gourmet" },
            { id: 'francesinhas-guerra', emoji: '🥪', title: "Francesinhas Belicistas", mission: "A francesinha aliou-se ao molho picante para realizar manobras militares invasivas nas tuas entranhas gástricas.", bonus: "+700 se pedires \"apoio da Cruz Vermelha\".", bonusTerm: "Cruz Vermelha", bonusVal: 700, category: "Batalha Gourmet" },
            { id: 'pastel-nata', emoji: '🥧', title: "O Pastel de Nata Sufocado", mission: "O pastel de nata conspirou contra ti, cobrindo-te com uma tempestade de areia de canela em pó.", bonus: "+400 se gritares \"assalto perfumado\".", bonusTerm: "assalto perfumado", bonusVal: 400, category: "Batalha Gourmet" },
            
            // 11-20 (Eletrodomésticos Rebeldes)
            { id: 'comando-deprimido', emoji: '📺', title: "O Comando Deprimido", mission: "Provar que o comando da TV parou de funcionar de propósito no momento chave do episódio por pura apatia existencial.", bonus: "+300 por cada \"série arruinada\".", bonusTerm: "série arruinada", bonusVal: 300, category: "Eletrodomésticos Rebeldes" },
            { id: 'chinelo-desaparecido', emoji: '🩴', title: "O Chinelo Fugitivo", mission: "Encontrar o chinelo esquerdo que desapareceu de casa e justificar a sua fuga em busca de verdadeira liberdade.", bonus: "+700 se culpares o \"sofá\".", bonusTerm: "sofá", bonusVal: 700, category: "Eletrodomésticos Rebeldes" },
            { id: 'meia-seita', emoji: '🧦', title: "A Seita das Meias", mission: "Acusar a máquina de lavar de criar um portal místico para o mercado negro de meias órfãs e solteiras.", bonus: "+1000 por \"conspiração\".", bonusTerm: "conspiração", bonusVal: 1000, category: "Eletrodomésticos Rebeldes" },
            { id: 'frigorifico-greve', emoji: '🥶', title: "O Frigorífico Sindicalista", mission: "Negociar novos acordos coletivos com um frigorífico que parou de arrefecer os iogurtes em forma de protesto.", bonus: "+600 por \"sindical\".", bonusTerm: "sindical", bonusVal: 600, category: "Eletrodomésticos Rebeldes" },
            { id: 'wifi-independente', emoji: '📶', title: "O Wi-Fi Rebelde", mission: "O router do restaurante declarou independência do sinal e agora só distribui megas de alta velocidade a estranhos.", bonus: "+900 se o router tiver \"redes sociais\".", bonusTerm: "redes sociais", bonusVal: 900, category: "Eletrodomésticos Rebeldes" },
            { id: 'sofá-depressao', emoji: '🛋️', title: "O Sofá Deprimido", mission: "O sofá recusa-se a voltar a ser confortável após sofrer o derrame dramático do iogurte de morango assassino.", bonus: "+500 por pedires \"terapia de espuma\".", bonusTerm: "terapia de espuma", bonusVal: 500, category: "Eletrodomésticos Rebeldes" },
            { id: 'lampada-morse', emoji: '💡', title: "A Lâmpada do Morse", mission: "A lâmpada da sala de estar pisca insultos constantes à tua inteligência em código morse durante a noite.", bonus: "+500 se souberes \"traduzir\".", bonusTerm: "traduzir", bonusVal: 500, category: "Eletrodomésticos Rebeldes" },
            { id: 'aspirador-revolucao', emoji: '🧹', title: "O Aspirador Rebelde", mission: "O aspirador robô recusa-se a aspirar o corredor e exige ser tratado como um animal de estimação de raça.", bonus: "+400 se limpares com a \"vassoura\".", bonusTerm: "vassoura", bonusVal: 400, category: "Eletrodomésticos Rebeldes" },
            { id: 'microondas-explosivo', emoji: '🔥', title: "O Microondas Irado", mission: "O aparelho explode a caneca de café mas mantém o líquido gelado, agindo puramente por sadismo.", bonus: "+400 se gritares \"física quântica\".", bonusTerm: "física quântica", bonusVal: 400, category: "Eletrodomésticos Rebeldes" },
            { id: 'ferro-queimador', emoji: '👕', title: "O Ferro Vingativo", mission: "O ferro de engomar decidiu desenhar formas de protesto abstrato queimando as tuas melhores camisas de gala.", bonus: "+600 se culpares o \"vapor\".", bonusTerm: "vapor", bonusVal: 600, category: "Eletrodomésticos Rebeldes" },

            // 21-30 (Vida Quotidiana em Queluz)
            { id: 'clima-bullying', emoji: '🌧️', title: "Bullying Meteorológico", mission: "Processar o tempo por perseguição emocional, descarregando chuva apenas quando decides estender a roupa.", bonus: "+700 por \"testemunhas\" meteorológicas.", bonusTerm: "testemunhas", bonusVal: 700, category: "Vida Quotidiana em Queluz" },
            { id: 'revolta-pequenos', emoji: '👶', title: "A Revolta dos Pequenos", mission: "Os teus filhos pequenos organizaram um motim armado com colheres contra a imposição autoritária dos legumes cozidos.", bonus: "+500 se subornares com \"iogurte\".", bonusTerm: "iogurte", bonusVal: 500, category: "Vida Quotidiana em Queluz" },
            { id: 'cabelo-greve', emoji: '💇', title: "Revolução Capilar", mission: "Processar o teu próprio cabelo por insubordinação matinal, criando remoinhos em forma de mapa de Portugal.", bonus: "+800 se o cabelo criar um \"mapa\".", bonusTerm: "mapa", bonusVal: 800, category: "Vida Quotidiana em Queluz" },
            { id: 'glovo-atitude', emoji: '🛵', title: "O Glovo do Ego Ferido", mission: "O estafeta trouxe a comida virada ao contrário e entregou-te um sermão de filosofia existencial barata.", bonus: "+400 se exigires \"gorjeta negativa\".", bonusTerm: "gorjeta negativa", bonusVal: 400, category: "Vida Quotidiana em Queluz" },
            { id: 'carro-ciumento', emoji: '🚗', title: "O Carro Ciumento", mission: "O carro recusa-se a arrancar a menos que prometas não estacioná-lo perto de carros desportivos alemães.", bonus: "+500 por confessares \"amor a gasóleo\".", bonusTerm: "amor a gasóleo", bonusVal: 500, category: "Vida Quotidiana em Queluz" },
            { id: 'telemovel-grevista', emoji: '📱', title: "O Smartphone Cansado", mission: "O teu telemóvel entrou em modo de suspensão aleatória alegando cansaço crónico de ler notificações inúteis.", bonus: "+600 por simular \"ecrã preto\".", bonusTerm: "ecrã preto", bonusVal: 600, category: "Vida Quotidiana em Queluz" },
            { id: 'chuva-sintra', emoji: '⛰️', title: "A Chuva Invasora", mission: "A mística e gélida chuva da serra infiltrou-se cirurgicamente pelas tuas botas até molhar os teus chinelos.", bonus: "+500 se o vento cantar \"fado\".", bonusTerm: "fado", bonusVal: 500, category: "Vida Quotidiana em Queluz" },
            { id: 'sol-goza', emoji: '☀️', title: "O Sol Sarcástico", mission: "O sol espreita pelas nuvens no segundo exato em que guardas os óculos escuros na mochila, rindo da tua cara.", bonus: "+400 por simular \"suor na testa\".", bonusTerm: "suor na testa", bonusVal: 400, category: "Vida Quotidiana em Queluz" },
            { id: 'sapatos-desmemoriados', emoji: '👟', title: "Sapatos Sem Memória", mission: "Os sapatos novos apertam o calcanhar simulando dentes de piranha, esquecendo como andar de forma normal.", bonus: "+500 por clamar \"falta de massagem\".", bonusTerm: "falta de massagem", bonusVal: 500, category: "Vida Quotidiana em Queluz" },
            { id: 'fatura-superioridade', emoji: '🧾', title: "Fatura com Complexo", mission: "A fatura da luz veio com um tom tão arrogante que parece que fomos nós a consumir eletricidade num palácio.", bonus: "+600 se culpares a \"máquina de lavar\".", bonusTerm: "máquina de lavar", bonusVal: 600, category: "Vida Quotidiana em Queluz" },

            // 31-40 (Absurdo Doméstico)
            { id: 'sombra-fugitiva', emoji: '👤', title: "A Sombra Desertora", mission: "A tua sombra tentou descolar-se dos teus pés para fugir para a praia porque achou o teu dia-a-dia monótono.", bonus: "+500 se usares \"fita-cola\".", bonusTerm: "fita-cola", bonusVal: 500, category: "Absurdo Doméstico" },
            { id: 'espelho-ofensivo', emoji: '🪞', title: "O Espelho do Mal", mission: "O espelho do quarto insultou o teu penteado matinal e sugeriu que voltasses a deitar-te para poupar a vista das pessoas.", bonus: "+600 se espirrares \"pasta de dentes\".", bonusTerm: "pasta de dentes", bonusVal: 600, category: "Absurdo Doméstico" },
            { id: 'gravata-vingadora', emoji: '👔', title: "A Gravata Vingativa", mission: "A gravata do fato tentou fazer-te um mata-leão durante a reunião de departamento para protestar contra o colarinho.", bonus: "+400 se culpares o \"nó Windsor\".", bonusTerm: "nó Windsor", bonusVal: 400, category: "Absurdo Doméstico" },
            { id: 'relogio-humilhador', emoji: '⏰', title: "O Relógio Humilhador", mission: "O despertador parou misteriosamente de funcionar só para te fazer chegar 1 hora atrasado e gozar com o teu stress.", bonus: "+500 por imitares um \"cuco\".", bonusTerm: "cuco", bonusVal: 500, category: "Absurdo Doméstico" },
            { id: 'caneta-cobarde', emoji: '🖊️', title: "A Caneta Sabotadora", mission: "A caneta recusa-se a assinar documentos sérios de cobrança, mas desenha bonecos perfeitos na margem dos cadernos.", bonus: "+400 se chorar \"tinta preta\".", bonusTerm: "tinta preta", bonusVal: 400, category: "Absurdo Doméstico" },
            { id: 'papel-higienico', emoji: '🧻', title: "Papel Higiénico Rebelde", mission: "O rolo acabou precisamente a meio do serviço e declarou greve de fornecimento de celulose.", bonus: "+600 por simular \"gritar por socorro\".", bonusTerm: "gritar por socorro", bonusVal: 600, category: "Absurdo Doméstico" },
            { id: 'elevador-bullying', emoji: '🛗', title: "O Elevador Sádico", mission: "O elevador para entre andares apenas para te submeter a música de sala de espera foleira e ruídos mecânicos suspeitos.", bonus: "+500 por clamar \"ataque de claustrofobia\".", bonusTerm: "claustrofobia", bonusVal: 500, category: "Absurdo Doméstico" },
            { id: 'nuvem-cuspideira', emoji: '☁️', title: "A Nuvem Cuspidora", mission: "Uma pequena nuvem preta persegue-te pela rua e descarrega pingos grossos exclusivamente na tua cabeça calva.", bonus: "+700 se fingires abrir um \"guarda-chuva\".", bonusTerm: "guarda-chuva", bonusVal: 700, category: "Absurdo Doméstico" },
            { id: 'passaro-disstrack', emoji: '🐦', title: "O Pássaro do Diss", mission: "Um melro acorda-te às 5h da manhã com assobios ritmados que soam suspeitosamente a um insulto focado na tua pessoa.", bonus: "+400 se atirares um \"chinelo\".", bonusTerm: "chinelo", bonusVal: 400, category: "Absurdo Doméstico" },
            { id: 'aspirador-esperancas', emoji: '🗑️', title: "Aspirador de Sonhos", mission: "O aspirador engasgou-se com uma moeda de 2 cêntimos e recusa-se a engolir as tuas esperanças de ter uma casa limpa.", bonus: "+500 se disseres \"filtro entupido\".", bonusTerm: "filtro entupido", bonusVal: 500, category: "Absurdo Doméstico" },

            // 41-50 (Cotidiano Absurdo)
            { id: 'sorte-ferias', emoji: '🍀', title: "A Sorte de Férias", mission: "A tua boa sorte comprou uma viagem de ida para as Bahamas e deixou-te a lidar com o azar e as faturas pendentes.", bonus: "+500 por \"choro dramático\".", bonusTerm: "choro dramático", bonusVal: 500, category: "Cotidiano Absurdo" },
            { id: 'karma-fatura', emoji: '☯️', title: "A Fatura do Karma", mission: "O Karma enviou-te uma cobrança com juros por teres roubado um lápis de cor na escola primária em 1998.", bonus: "+600 se alegares \"prescrição\".", bonusTerm: "prescrição", bonusVal: 600, category: "Cotidiano Absurdo" },
            { id: 'destino-troll', emoji: '🔮', title: "O Destino Faz Trol", mission: "Provar que o fio invisível do destino está embaraçado com pastilha elástica de morango debaixo da tua secretária.", bonus: "+500 por descreveres um \"nó cego\".", bonusTerm: "nó cego", bonusVal: 500, category: "Cotidiano Absurdo" },
            { id: 'universo-piada', emoji: '🌌', title: "A Piada do Universo", mission: "O cosmos conspirou para alinhar todos os planetas na constelação de 'azar supremo' focado no teu almoço.", bonus: "+500 por pedir \"trégua cósmica\".", bonusTerm: "trégua cósmica", bonusVal: 500, category: "Cotidiano Absurdo" },
            { id: 'azar-vip', emoji: '🎫', title: "O Azar em Primeira Classe", mission: "O azar instalou-se na tua vida com tratamento VIP e recusa-se a fazer o checkout do teu quarto de hóspedes.", bonus: "+700 se usares \"sal grosso\".", bonusTerm: "sal grosso", bonusVal: 700, category: "Cotidiano Absurdo" },
            { id: 'sonho-processo', emoji: '💤', title: "O Sonho Vingativo", mission: "O pesadelo de ontem à noite contratou um advogado do subconsciente e quer processar-te por o tentares acordar.", bonus: "+600 por referires o \"Freud\".", bonusTerm: "Freud", bonusVal: 600, category: "Cotidiano Absurdo" },
            { id: 'realidade-bugada', emoji: '👾', title: "A Realidade deu Bug", mission: "O motor de renderização do teu dia-a-dia falhou e agora as maçanetas das portas estão no teto. Pede um reload.", bonus: "+500 se disseres \"Ctrl+Z\".", bonusTerm: "Ctrl+Z", bonusVal: 500, category: "Cotidiano Absurdo" },
            { id: 'multiverso-pior', emoji: '🌀', title: "O Pior do Multiverso", mission: "O portal interdimensional abriu-se e cuspiu uma versão tua que é excelente a lavar pratos, deixando-te a sentir inútil.", bonus: "+600 por \"inveja quântica\".", bonusTerm: "inveja quântica", bonusVal: 600, category: "Cotidiano Absurdo" },
            { id: 'tempo-viajante', emoji: '⏳', title: "O Tempo Gozador", mission: "O tempo passa a voar quando estás no descanso do almoço, mas abranda até parar quando estás na fila das finanças.", bonus: "+600 por simular um \"bocejo\".", bonusTerm: "bocejo", bonusVal: 600, category: "Cotidiano Absurdo" },
            { id: 'gravidade-seletiva', emoji: '🍎', title: "Gravidade Vingativa", mission: "A gravidade só funciona a 150% de intensidade quando seguras no teu telemóvel novo por cima de calçada portuguesa.", bonus: "+500 se culpares o \"Isaac Newton\".", bonusTerm: "Isaac Newton", bonusVal: 500, category: "Cotidiano Absurdo" },

            // 51-60 (Tecnologia & Apps)
            { id: 'algoritmo-odio', emoji: '📸', title: "O Algoritmo Malvado", mission: "O algoritmo do Instagram decidiu boicotar as fotos do teu prato de massa apenas porque a alface tinha melhor aspeto.", bonus: "+500 por pedires \"boost manual\".", bonusTerm: "boost manual", bonusVal: 500, category: "Tecnologia & Apps" },
            { id: 'tiktok-boicote', emoji: '🎵', title: "O TikTok Escuro", mission: "O teu vídeo de humor foi enviado para o limbo das visualizações zero porque usaste uma meia com buraco no cenário.", bonus: "+500 por referires a \"fama fracassada\".", bonusTerm: "fama fracassada", bonusVal: 500, category: "Tecnologia & Apps" },
            { id: 'whatsapp-rebelde', emoji: '💬', title: "O WhatsApp Insurgente", mission: "As mensagens dos clientes chegam atrasadas e misturam letras de forma a que pareças estar a falar em húngaro antigo.", bonus: "+600 por clamar \"bug de escrita\".", bonusTerm: "bug de escrita", bonusVal: 600, category: "Tecnologia & Apps" },
            { id: 'ementa-digital', emoji: '📋', title: "A Ementa Teimosa", mission: "O QR Code da ementa direciona os clientes para uma página de adoção de hamsters em vez do menu de almoço.", bonus: "+500 se pedires \"ementa física\".", bonusTerm: "ementa física", bonusVal: 500, category: "Tecnologia & Apps" },
            { id: 'login-existencial', emoji: '🔐', title: "O Botão de Login Triste", mission: "O botão de entrada no sistema recusa os teus dados dizendo que não te sente com 'energia positiva' suficiente hoje.", bonus: "+600 por simular \"falha de ligação\".", bonusTerm: "falha de ligação", bonusVal: 600, category: "Tecnologia & Apps" },
            { id: 'algoritmo-fantasma', emoji: '👻', title: "O IP Fantasma", mission: "O sistema de inteligência artificial decidiu que a tua cara é idêntica à de um foragido que roubou pastilhas de hortelã.", bonus: "+600 por \"erro facial\".", bonusTerm: "erro facial", bonusVal: 600, category: "Tecnologia & Apps" },
            { id: 'senha-fiel', emoji: '🔑', title: "A Senha Traidora", mission: "A tua palavra-passe habitual decidiu esquecer-se de ti alegando que andas a escrever senhas mais fáceis noutras apps.", bonus: "+500 por clamar \"ciúmes de código\".", bonusTerm: "ciúmes de código", bonusVal: 500, category: "Tecnologia & Apps" },
            { id: 'wifi-descriminador', emoji: '📡', title: "O IP Descriminado", mission: "O Wi-Fi da sala de reuniões concede 5G ao teu chefe mas bloqueia o teu telemóvel por suspeita de rebeldia digital.", bonus: "+500 por referires o \"antivírus\".", bonusTerm: "antivírus", bonusVal: 500, category: "Tecnologia & Apps" },
            { id: 'codigo-malicioso', emoji: '💻', title: "O Bug Maldoso", mission: "O teu código em Javascript deu erro na linha 42 apenas para protestar contra a cor de fundo cinzenta do teu editor.", bonus: "+600 por pedires um \"debug emocional\".", bonusTerm: "debug", bonusVal: 600, category: "Tecnologia & Apps" },
            { id: 'servidor-sindical', emoji: '🖥️', title: "O Servidor em Greve", mission: "O servidor de base de dados recusa-se a guardar as faturas alegando sobrecarga térmica e falta de ventilação digna.", bonus: "+600 por \"refrigeração\".", bonusTerm: "refrigeração", bonusVal: 600, category: "Tecnologia & Apps" },

            // 61-70 (Restaurante FRAN)
            { id: 'reviews-injustas', emoji: '⭐', title: "O Review Vingativo", mission: "O restaurante FRAN recebeu 1 estrela no Google porque o cliente sonhou que a sopa tinha demasiada cebola.", bonus: "+500 por \"resposta estratégica\".", bonusTerm: "resposta estratégica", bonusVal: 500, category: "Restaurante FRAN" },
            { id: 'decoracao-crise', emoji: '🖼️', title: "Decoração Deprimida", mission: "Os quadros da sala de jantar parecem estar de ressaca e decidiram ficar tortos mesmo depois de alinhados a prumo.", bonus: "+500 por pedires \"renovação\".", bonusTerm: "renovação", bonusVal: 500, category: "Restaurante FRAN" },
            { id: 'menu-guerra', emoji: '🍲', title: "O Menu do Dia Bélico", mission: "A ementa do dia conspirou contra os clientes e baralhou os acompanhamentos de forma a cruzar peixe com chocolate.", bonus: "+500 por \"crime de culinária\".", bonusTerm: "crime", bonusVal: 500, category: "Restaurante FRAN" },
            { id: 'musica-hipnose', emoji: '🎵', title: "A Playlist Misteriosa", mission: "A música ambiente começou a passar ruído de baleias de forma a adormecer os clientes antes de pedirem a sobremesa.", bonus: "+600 por \"hipnose\".", bonusTerm: "hipnose", bonusVal: 600, category: "Restaurante FRAN" },
            { id: 'cheiro-vizinho', emoji: '👃', title: "O Aroma Fugitivo", mission: "O maravilhoso aroma a assado decidiu escapar do exaustor direto para a varanda do vizinho que está em dieta severa.", bonus: "+500 por \"exaustor\".", bonusTerm: "exaustor", bonusVal: 500, category: "Restaurante FRAN" },
            { id: 'mesa5-manca', emoji: '🪑', title: "A Mesa 5 Manca", mission: "A perna da mesa 5 encolhe sempre que o cliente pousa o copo de vinho, criando mini tsunamis de tinto.", bonus: "+600 por \"nivelamento\".", bonusTerm: "nivelamento", bonusVal: 600, category: "Restaurante FRAN" },
            { id: 'prato-traidor', emoji: '🍛', title: "O Prato Prometido", mission: "O bife da casa não se parece em nada com a foto fotorrealista da ementa e até parece estar a tentar esconder-se do garfo.", bonus: "+600 se disseres \"versão reduzida\".", bonusTerm: "versão", bonusVal: 600, category: "Restaurante FRAN" },
            { id: 'caixa-rebelde', emoji: '💳', title: "O Multibanco Mimado", mission: "O terminal de pagamento rejeita cartões se o cliente não carregar no botão verde com carinho e suavidade.", bonus: "+500 por pedir \"sistema amigável\".", bonusTerm: "amigável", bonusVal: 500, category: "Restaurante FRAN" },
            { id: 'ar-partidario', emoji: '❄️', title: "O Ar Condicionado Faccioso", mission: "O ar condicionado gela a mesa 2 até parecer o Alasca, mas ferve a mesa 4 até ao ponto de ebulição da sopa.", bonus: "+600 por \"clima bipolar\".", bonusTerm: "clima bipolar", bonusVal: 600, category: "Restaurante FRAN" },
            { id: 'banheiro-independente', emoji: '🚽', title: "OWC Rebelde", mission: "O fecho da porta do banheiro decidiu trancar o cliente por dentro até este cantar o hino nacional por inteiro.", bonus: "+700 se clamares por \"manutenção\".", bonusTerm: "manutenção", bonusVal: 700, category: "Restaurante FRAN" },

            // 71-80 (Família & Casa)
            { id: 'brinquedos-revolucao', emoji: '🧸', title: "A Revolução do Quarto", mission: "Os brinquedos dos teus filhos espalharam-se estrategicamente pela sala a meio da noite para te atacarem os calcanhares.", bonus: "+500 por \"ordem familiar\".", bonusTerm: "ordem familiar", bonusVal: 500, category: "Família & Casa" },
            { id: 'ultimo-iogurte', emoji: '🍧', title: "A Guerra do Iogurte", mission: "A disputa diplomática e violenta com a tua cara-metade para decidir quem tem direito real sobre o último iogurte de baunilha.", bonus: "+600 se aumentares o \"stock\".", bonusTerm: "stock", bonusVal: 600, category: "Família & Casa" },
            { id: 'caos-cozinha', emoji: '🍳', title: "O Caos da Cozinha", mission: "A bancada transformou-se numa selva de panelas sujas e o detergente declarou-se neutro no conflito.", bonus: "+500 por \"aliança de limpeza\".", bonusTerm: "aliança", bonusVal: 500, category: "Família & Casa" },
            { id: 'sofa-batalha', emoji: '🛋️', title: "O Trono de Veludo", mission: "A disputa pelo melhor lugar do sofá, onde o cão da casa já se instalou de forma legal e recusa-se a sair.", bonus: "+600 se comprares um \"sofá maior\".", bonusTerm: "sofá", bonusVal: 600, category: "Família & Casa" },
            { id: 'pequenos-legumes', emoji: '🥦', title: "Guerra dos Brócolos", mission: "Os teus filhos acusam a sopa de brócolos de ser um crime contra a humanidade e exigem nuggets de compensação.", bonus: "+500 por \"truques criativos\".", bonusTerm: "truques", bonusVal: 500, category: "Família & Casa" },
            { id: 'roupa-suja', emoji: '🧺', title: "A Pilha Revolucionária", mission: "O cesto da roupa suja acumulou tanta roupa que agora tem gravidade própria e atrai camisas lavadas do roupeiro.", bonus: "+600 se alegares \"falta de paciência\".", bonusTerm: "paciência", bonusVal: 600, category: "Família & Casa" },
            { id: 'horario-rebelde', emoji: '💤', title: "O Sono Fugitivo", mission: "Os miúdos recusam ir para a cama e organizaram uma rave de pijama e almofadas no corredor às 23h.", bonus: "+600 por \"estratégia de sono\".", bonusTerm: "sono", bonusVal: 600, category: "Família & Casa" },
            { id: 'banho-opera', emoji: '🛁', title: "O Banho Dramático", mission: "A hora de dar banho aos pequenos transforma-se numa ópera trágica italiana com choro, gritos e inundação do chão.", bonus: "+500 por \"paciência extra\".", bonusTerm: "paciência extra", bonusVal: 500, category: "Família & Casa" },
            { id: 'carrinho-rebelde', emoji: '🛒', title: "O Carrinho Manco", mission: "O carrinho de compras do supermercado desvia-se para a secção de chocolates mesmo quando tentas ir aos vegetais.", bonus: "+600 por clamar \"carrinho leal\".", bonusTerm: "carrinho", bonusVal: 600, category: "Família & Casa" },
            { id: 'lista-greve', emoji: '📝', title: "A Lista de Compras Vazia", mission: "Esqueceste-te da lista em cima da mesa e compraste apenas batatas fritas e gomas em vez do jantar da semana.", bonus: "+500 por \"motivação cósmica\".", bonusTerm: "motivação", bonusVal: 500, category: "Família & Casa" },

            // 81-90 (Surreal & Épico)
            { id: 'lua-sarcástica', emoji: '🌙', title: "A Lua Gozona", mission: "A lua cheia parecia brilhar intensamente pela janela do quarto apenas para destacar as tuas olheiras monumentais.", bonus: "+500 por \"lua simpática\".", bonusTerm: "lua", bonusVal: 500, category: "Surreal & Épico" },
            { id: 'vento-humor', emoji: '💨', title: "O Vento Ladrão", mission: "Uma rajada de vento forte roubou o teu bom humor e o teu chapéu de chuva, deixando-te a falar sozinho na rua.", bonus: "+600 por \"calma atmosférica\".", bonusTerm: "calma", bonusVal: 600, category: "Surreal & Épico" },
            { id: 'eco-restaurante', emoji: '🗣️', title: "O Eco Traidor", mission: "O eco do restaurante repete os teus segredos de conversa íntima com um volume ligeiramente superior ao original.", bonus: "+500 por \"silêncio sábio\".", bonusTerm: "silêncio", bonusVal: 500, category: "Surreal & Épico" },
            { id: 'fantasma-aumento', emoji: '👻', title: "O Fantasma Inflacionado", mission: "O fantasma que assombra a cave do restaurante exige receber um salário em moedas de chocolate para parar de bater portas.", bonus: "+600 se cederes ao \"aumento\".", bonusTerm: "aumento", bonusVal: 600, category: "Surreal & Épico" },
            { id: 'gravidade-equilibrio', emoji: '⚖️', title: "Gravidade Seletiva", mission: "A física de Newton decidiu que o teu prato deve cair no segundo em que dizes que tens tudo sob controlo absoluto.", bonus: "+600 por \"gravidade neutra\".", bonusTerm: "gravidade", bonusVal: 600, category: "Surreal & Épico" },
            { id: 'tempo-congelado', emoji: '⏱️', title: "O Tempo Congelado", mission: "O relógio parece andar para trás quando estás à espera do veredicto sobre se queimaste ou não a comida.", bonus: "+600 por \"avanço rápido\".", bonusTerm: "avanço", bonusVal: 600, category: "Surreal & Épico" },
            { id: 'nuvem-abstrata', emoji: '🎨', title: "Nuvens Artistas", mission: "As nuvens formaram uma caricatura perfeita da tua silhueta cansada mesmo por cima do pátio do restaurante.", bonus: "+500 por \"arte abstrata\".", bonusTerm: "abstrata", bonusVal: 500, category: "Surreal & Épico" },
            { id: 'piso-patinagem', emoji: '⛸️', title: "O Chão de Patinagem", mission: "O piso recém-lavado aliou-se à sola dos teus sapatos para te fazer dançar um tango involuntário em frente aos clientes.", bonus: "+600 por pedires \"piso antiderrapante\".", bonusTerm: "piso", bonusVal: 600, category: "Surreal & Épico" },
            { id: 'armario-complô', emoji: '🚪', title: "O Armário Inimigo", mission: "A porta do armário da cozinha abre-se sozinha e bate-te na testa sempre que te curvas para apanhar as panelas.", bonus: "+500 por \"porta amigável\".", bonusTerm: "porta", bonusVal: 500, category: "Surreal & Épico" },
            { id: 'calendario-mau-humor', emoji: '📅', title: "Calendário Precoce", mission: "O calendário adiantou a segunda-feira em 12 horas só para te obrigar a pensar em trabalho durante o jantar de domingo.", bonus: "+600 por \"calendário justo\".", bonusTerm: "calendário", bonusVal: 600, category: "Surreal & Épico" },

            // 91-100 (Absurdo Máximo)
            { id: 'ego-homicida', emoji: '🧠', title: "O Ego Ferido", mission: "O teu próprio ego sofreu um ataque severo de pânico quando te esqueceste da ementa e inventaste pratos inexistentes.", bonus: "+500 por \"terapia de ego\".", bonusTerm: "terapia", bonusVal: 500, category: "Absurdo Máximo" },
            { id: 'autoestima-aviao', emoji: '✈️', title: "Autoestima Off", mission: "A tua autoestima entrou em modo de voo sem rede de internet após deixares cair o guardanapo em cima do prato do vizinho.", bonus: "+600 por \"reinício\".", bonusTerm: "reinício", bonusVal: 600, category: "Absurdo Máximo" },
            { id: 'bom-senso-ferias', emoji: '🏝️', title: "Bom Senso Off", mission: "O teu bom senso foi passar férias para o Algarve e deixou-te a discutir com a torradeira sobre o preço do pão.", bonus: "+500 por pedires \"retorno urgente\".", bonusTerm: "retorno", bonusVal: 500, category: "Absurdo Máximo" },
            { id: 'paciencia-falencia', emoji: '💸', title: "Falência da Paciência", mission: "A tua paciência declarou falência geral após o cliente da mesa 3 pedir para retirar o glúten da água com gás.", bonus: "+600 por \"recarga de paciência\".", bonusTerm: "recarga", bonusVal: 600, category: "Absurdo Máximo" },
            { id: 'dia-conspirador', emoji: '🎭', title: "O Dia do Contra", mission: "Provar que as últimas 24 horas foram escritas por um argumentista de comédia de baixo orçamento focado no teu azar.", bonus: "+500 por \"dia novo\".", bonusTerm: "dia novo", bonusVal: 500, category: "Absurdo Máximo" },
            { id: 'realidade-update', emoji: '🔄', title: "Update de Realidade", mission: "A realidade instalou uma atualização de sistema com erros graves que faz com que qualquer comida pareça sopa.", bonus: "+600 por \"rollback\".", bonusTerm: "rollback", bonusVal: 600, category: "Absurdo Máximo" },
            { id: 'azar-amigo', emoji: '🤝', title: "O Azar de Estimação", mission: "O azar tornou-se o teu seguidor mais fiel, acompanhando-te ao café e sentando-se no teu colo sem permissão.", bonus: "+600 por \"separação amigável\".", bonusTerm: "separação", bonusVal: 600, category: "Absurdo Máximo" },
            { id: 'caos-acoes', emoji: '📈', title: "O Caos em Alta", mission: "O caos comprou 51% das ações da tua rotina diária e agora é ele quem decide que meias deves usar.", bonus: "+600 por \"recompra de ações\".", bonusTerm: "recompra", bonusVal: 600, category: "Absurdo Máximo" },
            { id: 'universo-nota-fiscal', emoji: '💳', title: "Nota Fiscal do Drama", mission: "O universo mandou uma conta exorbitante de energia cósmica gasta com todas as tuas reclamações diárias.", bonus: "+600 por \"reembolso universal\".", bonusTerm: "reembolso", bonusVal: 600, category: "Absurdo Máximo" },
            { id: 'existencia-manutencao', emoji: '🛠️', title: "Existência Offline", mission: "A tua existência entrou em manutenção temporária e és obrigado a ver o mundo através de um ecrã pixelizado de 8 bits.", bonus: "+700 por \"upgrade completo\".", bonusTerm: "upgrade", bonusVal: 700, category: "Absurdo Máximo" }
        ];

        // Estado do app em tempo real
        let activeBattleIndex = 0;
        let userCoins = 1500;
        let userId = 'user_shitagram_' + Math.random().toString(36).substring(2, 9);
        let myCreatedBattles = [];
        let drawnThemeIndex = -1;
        let isSoundEnabled = true;
        let activeSpeaker = 'left'; // Alterna entre 'left' e 'right'
        let speakerInterval = null;
        
        // Variáveis para o Temporizador da Batalha (Estilo TikTok PK Lives)
        let battleTimer = null;
        let timeLeft = 60; // 1 minuto de batalha por padrão
        let isBattleActive = true;

        // Banco de Batalhas Geral (Inicia com a Torrada)
        const database = {
            battles: []
        };

        // Engine de Rivais Cómicos Dinâmica - Gera perfis para os 100 temas!
        function getDynamicRivals(theme) {
            let leftName = "Reclamante Indignado";
            let leftDesc = `Processa o universo pelo tema: "${theme.title}".`;
            let leftImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400";
            
            let rightName = "Inimigo Inanimado";
            let rightDesc = "Acha que a queixa é ridícula e recusa-se a pedir desculpas.";
            let rightImg = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400";

            const lowerId = theme.id.toLowerCase();

            if (theme.category === "Batalha Gourmet" || theme.category === "Restaurante FRAN" || lowerId.includes("cafe") || lowerId.includes("iogurte") || lowerId.includes("arroz") || lowerId.includes("frigorifico")) {
                leftImg = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400";
                rightImg = "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400";
                
                if (lowerId.includes("hamburguer")) {
                    leftName = "Hambúrguer Voador"; leftDesc = "Paraquedista de ketchup focado em calças de algodão branco.";
                    rightName = "Calça Branca Nova"; rightDesc = "Símbolo de elegância destruída num crime culinário.";
                } else if (lowerId.includes("batatas")) {
                    leftName = "Batatas Glaciares"; leftDesc = "Frias como o coração de uma relação antiga.";
                    rightName = "Consumidor Triste"; rightDesc = "Tenta usar o calor do seu bafo para aquecer o almoço.";
                } else if (lowerId.includes("cadeira")) {
                    leftName = "Prego da Cadeira 7"; leftDesc = "Ponta afiada que atacou cobardemente por trás.";
                    rightName = "Nádega Atacada"; rightDesc = "Ferida no orgulho e com trauma de assentos públicos.";
                } else if (lowerId.includes("iogurte")) {
                    leftName = "Iogurte Dramático"; leftDesc = "Lançou-se de cabeça para o abismo do tecido de veludo.";
                    rightName = "Sofá Premium"; rightDesc = "Completamente arruinado por laticínios suicidas.";
                } else if (lowerId.includes("maquina")) {
                    leftName = "Cafeteira Imperial"; leftDesc = "Imperadora do balcão que cospe água e rancor.";
                    rightName = "Barista Desesperado"; rightDesc = "Implora por um expresso decente sem fumo tóxico.";
                } else if (lowerId.includes("arroz")) {
                    leftName = "Arroz Doce Risonho"; leftDesc = "Encontrado a zombar e coberto de poeira sob a mesa.";
                    rightName = "Colher Solitária"; rightDesc = "Ficou a carregar o vazio de uma sobremesa traidora.";
                } else if (lowerId.includes("salada")) {
                    leftName = "Alface Insurgente"; leftDesc = "Comandante da resistência verde contra o vinagrete.";
                    rightName = "Garfo Opressor"; rightDesc = "Apenas queria guiar a fibra para um estômago feliz.";
                } else if (lowerId.includes("vinho")) {
                    leftName = "Vinho Intelectual"; leftDesc = "Crise de meia-idade numa garrafa com aroma a vinagre.";
                    rightName = "Cálice de Cristal"; rightDesc = "Suporta o peso dramático de uma bebida deprimente.";
                } else if (lowerId.includes("francesinha")) {
                    leftName = "Francesinha Armada"; leftDesc = "Invasora de artilharia pesada, queijo e molho picante.";
                    rightName = "Estômago em Pânico"; rightDesc = "Pede apoio urgente de antiácidos e proteção civil.";
                } else if (lowerId.includes("pastel")) {
                    leftName = "Tempestade de Canela"; leftDesc = "Pastel de nata que se armou em deserto do Saara.";
                    rightName = "Lanche Asfixiado"; rightDesc = "Sufocado em canela, tosse nuvens perfumadas.";
                }
            } 
            else if (theme.category === "Eletrodomésticos Rebeldes" || theme.category === "Tecnologia & Apps" || lowerId.includes("wifi") || lowerId.includes("codigo") || lowerId.includes("telemovel")) {
                leftImg = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400";
                rightImg = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400";

                if (lowerId.includes("comando")) {
                    leftName = "Comando Exausto"; leftDesc = "Cansado de pancadas secas sempre que a pilha falha.";
                    rightName = "Série do Ano"; rightDesc = "O episódio terminou sem que ninguém conseguisse dar play.";
                } else if (lowerId.includes("chinelo")) {
                    leftName = "Chinelo Fugitivo"; leftDesc = "Procura asilo político debaixo do sofá da sala.";
                    rightName = "Pé Direito Solitário"; rightDesc = "Patinha no chão frio sofrendo de abandono agudo.";
                } else if (lowerId.includes("meia")) {
                    leftName = "Meia Esquerda Órfã"; leftDesc = "Sobrevivente do triângulo das meias centrifugadoras.";
                    rightName = "Tambor Cúmplice"; rightDesc = "Roda a 1200 RPM negando qualquer sumiço de algodão.";
                } else if (lowerId.includes("frigorifico")) {
                    leftName = "Frigorífico em Greve"; leftDesc = "Cansado de ser aberto de 10 em 10 minutos sem compras.";
                    rightName = "Dono Esfomeado"; rightDesc = "Olha para a luz interior à procura de milagres.";
                } else if (lowerId.includes("wifi") || lowerId.includes("router")) {
                    leftName = "Router Rebelde"; leftDesc = "Entrega 1000 Mbps ao vizinho e dá-te 2G com falhas.";
                    rightName = "Utilizador Sem Rede"; rightDesc = "Chora a ver o círculo de carregamento rodar infinito.";
                } else if (lowerId.includes("lampada")) {
                    leftName = "Lâmpada Troll"; leftDesc = "Fisga morse insultuoso nas horas de sono profundo.";
                    rightName = "Olhos Cansados"; rightDesc = "Tenta traduzir insultos com um dicionário luminoso.";
                } else if (lowerId.includes("codigo") || lowerId.includes("bug")) {
                    leftName = "Bug Vingativo"; leftDesc = "Instalado na linha 42 para boicotar a entrega de faturas.";
                    rightName = "Dev Sênior Choroso"; rightDesc = "Procura por um ponto e vírgula perdido no código.";
                } else if (lowerId.includes("telemovel")) {
                    leftName = "Telemóvel Cansado"; leftDesc = "Entra em modo de suspensão para evitar ler e-mails.";
                    rightName = "Bateria Descarregada"; rightDesc = "Desliga-se aos 15% por falta de vontade de viver.";
                }
            } 
            else {
                leftImg = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&q=80&w=400";
                rightImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";

                if (lowerId.includes("clima") || lowerId.includes("bullying")) {
                    leftName = "Nuvem de Perseguição"; leftDesc = "Garante que vais apanhar chuva se saíres de sapatilhas.";
                    rightName = "Meteorologista Sorridente"; rightDesc = "Promete sol enquanto veste uma gabardina.";
                } else if (lowerId.includes("cabelo")) {
                    leftName = "Cabelo em Motim"; leftDesc = "Acorda no formato perfeito do mapa de Portugal.";
                    rightName = "Pente Desdentado"; rightDesc = "Perdeu metade dos dentes contra nós impiedosos.";
                } else if (lowerId.includes("sombra")) {
                    leftName = "Sombra Desertora"; leftDesc = "Quer ir para a esplanada sozinha sem te aturar.";
                    rightName = "Corpo 3D Triste"; rightDesc = "Teme perder a sua única projeção bidimensional.";
                } else if (lowerId.includes("espelho")) {
                    leftName = "Espelho Crítico"; leftDesc = "Mostra olheiras em formato HD e critica o teu pijama.";
                    rightName = "Cara Despenteada"; rightDesc = "Apenas queria lavar a boca sem receber ofensas.";
                } else if (lowerId.includes("relogio") || lowerId.includes("tempo")) {
                    leftName = "Relógio Humilhador"; leftDesc = "Acelera nas férias e para quando estás na fila.";
                    rightName = "Utilizador Atrasado"; rightDesc = "Exige um relógio com bom senso temporal.";
                } else if (lowerId.includes("paciencia")) {
                    leftName = "Paciência Falida"; leftDesc = "Fez as malas após o cliente pedir sopa sem água.";
                    rightName = "Cérebro em Chamas"; rightDesc = "Tenta respirar fundo para não lançar um prato.";
                } else {
                    leftName = theme.title.split(' ')[0] || "Reclamante";
                    rightName = "Alvo do Caos";
                }
            }

            return {
                left: { name: leftName, desc: leftDesc, img: leftImg },
                right: { name: rightName, desc: rightDesc, img: rightImg }
            };
        }

        // Popular database com base nos 100 temas absurdos iniciais
        absurdThemes.forEach(t => {
            const rivals = getDynamicRivals(t);
            database.battles.push({
                id: t.id,
                title: t.title,
                category: t.category,
                scoreLeft: 1000,
                scoreRight: 1000,
                left: rivals.left,
                right: rivals.right,
                mission: t.mission,
                bonus: t.bonus,
                bonusTerm: t.bonusTerm,
                bonusVal: t.bonusVal,
                emoji: t.emoji,
                comments: [
                    { name: "Sarcasmo_Puro", text: "ISTO É GENIAL kkkkk" },
                    { name: "Tuga_Indignado", text: "Eu defendo o lado esquerdo de olhos fechados!" },
                    { name: "Critico_Mestre", text: "Exijo bónus de improviso já!" }
                ]
            });
        });

        // Sintetizador Web Audio para feedbacks de som retro e contagens
        function playTone(frequency, type, duration, delay = 0) {
            if (!isSoundEnabled) return;
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === 'suspended') {
                    // Prevenir bloqueios de reprodução sem interação
                    return;
                }
                setTimeout(() => {
                    const oscillator = audioCtx.createOscillator();
                    const gainNode = audioCtx.createGain();
                    oscillator.connect(gainNode);
                    gainNode.connect(audioCtx.destination);
                    
                    oscillator.type = type;
                    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
                    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + duration);
                    
                    oscillator.start();
                    oscillator.stop(audioCtx.currentTime + duration);
                }, delay);
            } catch (err) {
                // Falha silenciosa de áudio
            }
        }

        function playInteractionSound(type) {
            if (type === 'vote') {
                playTone(480, 'sine', 0.1);
            } else if (type === 'gift') {
                playTone(880, 'triangle', 0.12);
                playTone(1320, 'triangle', 0.15, 60);
            } else if (type === 'create' || type === 'draw') {
                playTone(587, 'sine', 0.08);
                playTone(659, 'sine', 0.08, 40);
                playTone(784, 'sine', 0.12, 80);
            } else if (type === 'victory') {
                playTone(523, 'sawtooth', 0.15);
                playTone(659, 'sawtooth', 0.15, 120);
                playTone(784, 'sawtooth', 0.15, 240);
                playTone(1046, 'sawtooth', 0.4, 360);
            } else if (type === 'beep') {
                playTone(680, 'sine', 0.08);
            } else if (type === 'go') {
                playTone(1050, 'sine', 0.25);
            } else if (type === 'applause') {
                playTone(220, 'triangle', 0.1);
                playTone(280, 'triangle', 0.1, 50);
                playTone(330, 'triangle', 0.1, 100);
            }
        }

        function toggleSound() {
            isSoundEnabled = !isSoundEnabled;
            const icon = document.getElementById('sound-icon');
            if (isSoundEnabled) {
                icon.className = 'fa-solid fa-volume-high';
                showCustomNotification("Som Ativado", "Efeitos áudio virtuais ativados.", "success");
                playInteractionSound('vote');
            } else {
                icon.className = 'fa-solid fa-volume-xmark';
                showCustomNotification("Som Desativado", "A aplicação agora está silenciosa.", "info");
            }
        }

        // Função de Navegação por Abas
        function switchTab(tabId) {
            document.querySelectorAll('.view-section').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(`view-${tabId}`).classList.remove('hidden');

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('text-orange-400', 'font-bold');
                btn.classList.add('text-gray-400');
            });
            document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
                btn.classList.remove('text-orange-500');
                btn.classList.add('text-gray-400');
            });

            // Ativar botão selecionado
            const activeNav = document.getElementById(`nav-${tabId}`);
            if (activeNav) {
                activeNav.classList.remove('text-gray-400');
                activeNav.classList.add('text-orange-400', 'font-bold');
            }

            const activeMobileNav = document.getElementById(`m-nav-${tabId}`);
            if (activeMobileNav) {
                activeMobileNav.classList.remove('text-gray-400');
                activeMobileNav.classList.add('text-orange-500');
            }
        }

        // Carregar Batalha Ativa no Ecrã Principal
        function loadBattle(index) {
            activeBattleIndex = index;
            const battle = database.battles[index];

            document.getElementById('name-left').textContent = battle.left.name;
            document.getElementById('desc-left').textContent = battle.left.desc;
            document.getElementById('competitor-img-left').src = battle.left.img;

            document.getElementById('name-right').textContent = battle.right.name;
            document.getElementById('desc-right').textContent = battle.right.desc;
            document.getElementById('competitor-img-right').src = battle.right.img;

            document.getElementById('battle-category-badge').textContent = battle.category;
            
            // Atualizar Banner da Missão Ativa
            document.getElementById('mission-emoji').textContent = battle.emoji || '💩';
            document.getElementById('mission-title').textContent = battle.title;
            document.getElementById('mission-desc').textContent = battle.mission;
            document.getElementById('mission-bonus').textContent = battle.bonus;

            // Mudar rótulo dos botões de bónus
            document.getElementById('btn-bonus-left').innerHTML = `<i class="fa-solid fa-star"></i> <span>Bónus +${battle.bonusVal}</span>`;
            document.getElementById('btn-bonus-right').innerHTML = `<i class="fa-solid fa-star"></i> <span>Bónus +${battle.bonusVal}</span>`;

            updateScoresUI();

            const container = document.getElementById('chat-messages-container');
            container.innerHTML = '';
            battle.comments.forEach(c => appendChatMessage(c.name, c.text));

            renderUpcomingBattlesList();
            startBattleTimer();
            startSpeakerCycle();
        }

        // Ciclo de Turnos Automático (Lado A fala / Lado B fala alternadamente)
        function startSpeakerCycle() {
            if (speakerInterval) clearInterval(speakerInterval);
            activeSpeaker = 'left';
            updateSpeakerVisuals();

            speakerInterval = setInterval(() => {
                if (!isBattleActive) return;
                activeSpeaker = (activeSpeaker === 'left') ? 'right' : 'left';
                updateSpeakerVisuals();
                
                // Simular fala adicionando comentários automáticos hilariantes no chat de quem está a falar
                const battle = database.battles[activeBattleIndex];
                const speakerName = (activeSpeaker === 'left') ? battle.left.name : battle.right.name;
                const argumentsPool = [
                    "Isso é mentira descarada! Exijo intervenção policial!",
                    "Quem me ouve sabe que estou coberto de razão de cima a baixo!",
                    "Este meu rival nem sabe engomar um argumento!",
                    "A minha verdade é mais estaladiça do que qualquer opinião contrária!",
                    "Por favor, o público inteligente não vai cair nesta conversa fiada."
                ];
                const randomArg = argumentsPool[Math.floor(Math.random() * argumentsPool.length)];
                appendChatMessage(speakerName, `"${randomArg}" 🎤`, true);
                playInteractionSound('beep');
            }, 10000); // Muda a cada 10 segundos
        }

        function updateSpeakerVisuals() {
            const badgeLeft = document.getElementById('speaker-badge-left');
            const badgeRight = document.getElementById('speaker-badge-right');
            const vizLeft = document.getElementById('audio-visualizer-left');
            const vizRight = document.getElementById('audio-visualizer-right');
            const cardLeft = document.getElementById('card-left');
            const cardRight = document.getElementById('card-right');

            if (activeSpeaker === 'left') {
                badgeLeft.classList.remove('hidden');
                badgeRight.classList.add('hidden');
                vizLeft.classList.remove('hidden');
                vizRight.classList.add('hidden');
                cardLeft.classList.add('ring-4', 'ring-emerald-500/50');
                cardRight.classList.remove('ring-4', 'ring-emerald-500/50');
            } else {
                badgeLeft.classList.add('hidden');
                badgeRight.classList.remove('hidden');
                vizLeft.classList.add('hidden');
                vizRight.classList.remove('hidden');
                cardLeft.classList.remove('ring-4', 'ring-emerald-500/50');
                cardRight.classList.add('ring-4', 'ring-emerald-500/50');
            }
        }

        // Temporizador de 1 minuto
        function startBattleTimer() {
            clearInterval(battleTimer);
            timeLeft = 60;
            isBattleActive = true;
            document.getElementById('battle-end-overlay').classList.add('hidden');
            enableControls(true);
            updateTimerUI();

            battleTimer = setInterval(() => {
                timeLeft--;
                updateTimerUI();

                if (timeLeft <= 0) {
                    clearInterval(battleTimer);
                    clearInterval(speakerInterval);
                    endActiveBattle();
                }
            }, 1000);
        }

        function updateTimerUI() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const display = document.getElementById('live-timer-countdown');
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            const container = document.getElementById('live-timer-container');
            if (timeLeft <= 15) {
                container.className = "bg-red-650 text-white font-mono font-black text-xs md:text-sm px-4 py-1.5 rounded-full flex items-center space-x-2 shadow-[0_0_20px_rgba(239,68,68,0.8)] border border-red-300 animate-pulse";
            } else {
                container.className = "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-mono font-black text-xs md:text-sm px-4 py-1.5 rounded-full flex items-center space-x-2 shadow-md border border-orange-400/30";
            }
        }

        function enableControls(enable) {
            const controls = ['btn-vote-left', 'btn-vote-right', 'btn-bonus-left', 'btn-bonus-right', 'btn-gift-rose', 'btn-gift-weight', 'btn-gift-fire', 'btn-gift-crown'];
            controls.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (enable) {
                        el.removeAttribute('disabled');
                        el.classList.remove('opacity-40', 'cursor-not-allowed');
                    } else {
                        el.setAttribute('disabled', 'true');
                        el.classList.add('opacity-40', 'cursor-not-allowed');
                    }
                }
            });
        }

        // Fim da Batalha Absurda
        function endActiveBattle() {
            isBattleActive = false;
            enableControls(false);
            
            const battle = database.battles[activeBattleIndex];
            playInteractionSound('victory');
            launchConfettiShower();

            let winnerName = "";
            let statusText = "";
            let scoreLeft = battle.scoreLeft;
            let scoreRight = battle.scoreRight;

            // Atribuir vitória para o perfil pessoal estatístico se houver ligação
            let statWins = parseInt(document.getElementById('stat-wins').textContent);
            let statDuels = parseInt(document.getElementById('stat-duels').textContent);
            document.getElementById('stat-duels').textContent = statDuels + 1;

            if (scoreLeft > scoreRight) {
                winnerName = battle.left.name;
                statusText = `Venceu o debate cómico por uma margem de ${(scoreLeft - scoreRight).toLocaleString()} pontos!`;
                document.getElementById('stat-wins').textContent = statWins + 1;
            } else if (scoreRight > scoreLeft) {
                winnerName = battle.right.name;
                statusText = `Venceu o debate cómico por uma margem de ${(scoreRight - scoreLeft).toLocaleString()} pontos!`;
            } else {
                winnerName = "Empate Técnico! 🤝";
                statusText = "Ambos os reclamantes são igualmente teimosos.";
            }

            document.getElementById('end-winner-name').textContent = winnerName;
            document.getElementById('end-winner-status').textContent = statusText;
            document.getElementById('end-score-left').textContent = scoreLeft.toLocaleString('pt-PT');
            document.getElementById('end-score-right').textContent = scoreRight.toLocaleString('pt-PT');

            document.getElementById('battle-end-overlay').classList.remove('hidden');
            appendChatMessage("SHITAGRAM", `Combate encerrado! Campeão proclamado: ${winnerName}`, true);
        }

        function rematchActiveBattle() {
            const battle = database.battles[activeBattleIndex];
            battle.scoreLeft = 1000;
            battle.scoreRight = 1000;
            updateScoresUI();
            startBattleTimer();
            startSpeakerCycle();
            appendChatMessage("Sistema", "A revanche foi aceite pelo tribunal do absurdo! Toca a reclamar de novo!", true);
        }

        // Atribuição de Bónus de Improviso Manual
        function claimBonus(side) {
            if (!isBattleActive) return;
            const battle = database.battles[activeBattleIndex];
            playInteractionSound('victory');

            const bonusPoints = battle.bonusVal || 500;
            const competitorName = side === 'left' ? battle.left.name : battle.right.name;

            if (side === 'left') {
                battle.scoreLeft += bonusPoints;
                triggerFloater('⭐', 'left');
            } else {
                battle.scoreRight += bonusPoints;
                triggerFloater('⭐', 'right');
            }

            updateScoresUI();
            appendChatMessage("BÓNUS CONQUISTADO!", `${competitorName} cumpriu o desafio com sucesso e ganhou +${bonusPoints} pts!`, true);
            showCustomNotification("Bónus Ativado!", `Ganhos de improviso ativados para ${competitorName}.`, "success");
        }

        // NOVIDADE: Envio de Argumento Customizado do Usuário avaliado dinamicamente!
        function submitUserArgument() {
            if (!isBattleActive) {
                showCustomNotification("Sem Live Ativa", "Inicia uma batalha antes de gritares o teu argumento!", "error");
                return;
            }
            
            const textarea = document.getElementById('user-impro-text');
            const text = textarea.value.trim();
            if (!text) {
                showCustomNotification("Mensagem vazia", "Escreve algo de valor humorístico antes de submeteres.", "error");
                return;
            }

            playInteractionSound('applause');
            appendChatMessage("Tu (Improvisador)", `"${text}"`, true);
            textarea.value = '';

            const battle = database.battles[activeBattleIndex];
            const lowerText = text.toLowerCase();
            const term = battle.bonusTerm.toLowerCase();

            let pointsAwarded = 300; // Pontos base por participar
            let feedbackText = "O público sorriu e aplaudiu de forma simpática!";

            // Verificar se usou o termo de bónus
            if (lowerText.includes(term)) {
                pointsAwarded += 1000;
                feedbackText = `EXCELENTE! Usaste a palavra secreta "${battle.bonusTerm}"! O júri está em delírio gastronómico/comercial! (+1300 pts)`;
                triggerFloater('👑', activeSpeaker);
                launchConfettiShower();
                playInteractionSound('victory');
            } else {
                triggerFloater('💩', activeSpeaker);
            }

            // Adicionar pontos ao concorrente ativo no momento
            if (activeSpeaker === 'left') {
                battle.scoreLeft += pointsAwarded;
            } else {
                battle.scoreRight += pointsAwarded;
            }

            updateScoresUI();
            showCustomNotification("Ideia Avaliada!", feedbackText, "success");

            // Comentário automático do público reagindo especificamente
            setTimeout(() => {
                const reactions = [
                    "Que argumento brilhante kkkkk!",
                    "Este utilizador devia ser coroado mestre!",
                    "Estou sem fôlego! Bravo!",
                    "Dramatização fantástica."
                ];
                const randomName = "juiz_do_absurdo_" + Math.floor(Math.random() * 900 + 100);
                appendChatMessage(randomName, reactions[Math.floor(Math.random() * reactions.length)]);
            }, 1200);
        }

        // Sorteador de Temas Absurdos Dinâmico
        function rollAbsurdTheme() {
            playInteractionSound('draw');
            const display = document.getElementById('slot-display');
            const titleEl = document.getElementById('slot-title');
            const emojiEl = document.getElementById('slot-emoji');
            const subtitleEl = document.getElementById('slot-subtitle');
            const btnRoll = document.getElementById('btn-roll-theme');
            const btnLaunch = document.getElementById('btn-launch-sorteado');

            btnRoll.setAttribute('disabled', 'true');
            titleEl.classList.add('slot-spinning');
            emojiEl.classList.add('slot-spinning');

            let index = 0;
            const interval = setInterval(() => {
                const tempTheme = absurdThemes[index % absurdThemes.length];
                titleEl.textContent = tempTheme.title;
                emojiEl.textContent = tempTheme.emoji;
                subtitleEl.textContent = tempTheme.mission;
                index++;
            }, 80);

            setTimeout(() => {
                clearInterval(interval);
                titleEl.classList.remove('slot-spinning');
                emojiEl.classList.remove('slot-spinning');
                
                // Escolher um tema final aleatório
                drawnThemeIndex = Math.floor(Math.random() * absurdThemes.length);
                const finalTheme = absurdThemes[drawnThemeIndex];
                
                emojiEl.textContent = finalTheme.emoji;
                titleEl.innerHTML = `<span class="text-orange-400">⚠️ TEMA SORTEADO:</span><br>${finalTheme.title}`;
                subtitleEl.innerHTML = `
                    <div class="mt-2 space-y-1">
                        <p class="text-white text-xs font-semibold">" ${finalTheme.mission} "</p>
                        <p class="text-amber-400 text-[11px] font-bold">${finalTheme.bonus}</p>
                    </div>
                `;

                btnRoll.removeAttribute('disabled');
                btnLaunch.classList.remove('hidden'); // Exibir o botão de lançar batalha sorteada
                playInteractionSound('victory');
            }, 1500);
        }

        // Lançar Batalha Sorteada com Countdown 3..2..1
        function launchSorteadoLive() {
            if (drawnThemeIndex === -1) return;
            const selectedTheme = absurdThemes[drawnThemeIndex];

            // Encontrar index correspondente no banco
            const dbIndex = database.battles.findIndex(b => b.id === selectedTheme.id);
            if (dbIndex === -1) return;

            // Mudar para aba de live
            switchTab('feed');

            // Ativar Countdown Overlay
            const overlay = document.getElementById('countdown-overlay');
            const countdownNum = document.getElementById('countdown-number');
            const countdownTopic = document.getElementById('countdown-topic');

            overlay.classList.remove('hidden');
            countdownTopic.textContent = `RECLAMAÇÃO ABSURDA: "${selectedTheme.title}"`;

            let step = 3;
            countdownNum.textContent = step;
            playInteractionSound('beep');

            const counter = setInterval(() => {
                step--;
                if (step > 0) {
                    countdownNum.textContent = step;
                    playInteractionSound('beep');
                } else if (step === 0) {
                    countdownNum.textContent = "💥 RECLAMA!";
                    countdownNum.className = "text-5xl md:text-6xl font-black text-amber-400 animate-pulse";
                    playInteractionSound('go');
                } else {
                    clearInterval(counter);
                    overlay.classList.add('hidden');
                    // Resetar classes originais
                    countdownNum.className = "text-8xl md:text-9xl font-black text-white drop-shadow-[0_0_30px_rgba(249,115,22,0.8)]";
                    
                    // Iniciar Duelo
                    loadBattle(dbIndex);
                }
            }, 1000);
        }

        // Pontuação e Votação
        function updateScoresUI() {
            const battle = database.battles[activeBattleIndex];
            const leftScore = battle.scoreLeft;
            const rightScore = battle.scoreRight;
            const total = leftScore + rightScore;
            
            const leftPercent = total > 0 ? (leftScore / total) * 100 : 50;
            const rightPercent = 100 - leftPercent;

            document.getElementById('vote-bar-left').style.width = `${leftPercent}%`;
            document.getElementById('vote-bar-right').style.width = `${rightPercent}%`;

            document.getElementById('score-left').textContent = leftScore.toLocaleString('pt-PT');
            document.getElementById('score-right').textContent = rightScore.toLocaleString('pt-PT');
        }

        function castVote(side) {
            if (!isBattleActive) return;
            playInteractionSound('vote');
            const battle = database.battles[activeBattleIndex];
            
            if (side === 'left') {
                battle.scoreLeft += 50;
                triggerFloater('💩', 'left');
            } else {
                battle.scoreRight += 50;
                triggerFloater('💩', 'right');
            }
            updateScoresUI();
        }

        function sendGift(giftType) {
            if (!isBattleActive) return;
            let cost = 0;
            let points = 0;
            let icon = '';
            let label = '';

            switch(giftType) {
                case 'rose':
                    cost = 5;
                    points = 250;
                    icon = '🧻';
                    label = 'Papel H.';
                    break;
                case 'weight':
                    cost = 25;
                    points = 1500;
                    icon = '🥑';
                    label = 'Abacate Cru';
                    break;
                case 'fire':
                    cost = 50;
                    points = 4000;
                    icon = '💩';
                    label = 'Cocó Ouro';
                    break;
                case 'crown':
                    cost = 100;
                    points = 10000;
                    icon = '👑';
                    label = 'Coroa de Reclamações';
                    break;
            }

            if (userCoins < cost) {
                showCustomNotification("Moedas Insuficientes", "Clica no ícone das moedas no topo direito para obteres mais de bónus gratuitamente!", "error");
                return;
            }

            userCoins -= cost;
            document.getElementById('user-coins').textContent = userCoins.toLocaleString();
            document.getElementById('stat-coins').textContent = userCoins.toLocaleString();
            playInteractionSound('gift');

            const side = Math.random() > 0.5 ? 'left' : 'right';
            const battle = database.battles[activeBattleIndex];

            if (side === 'left') {
                battle.scoreLeft += points;
                triggerFloater(icon, 'left');
            } else {
                battle.scoreRight += points;
                triggerFloater(icon, 'right');
            }

            updateScoresUI();
            const recipient = side === 'left' ? battle.left.name : battle.right.name;
            appendChatMessage("Tu", `enviou um(a) ${icon} ${label} para ${recipient}! (+${points} pts) ✨`, true);
        }

        function triggerFloater(symbol, side) {
            const container = document.getElementById('gift-animation-container');
            const floater = document.createElement('div');
            
            floater.className = 'absolute bottom-20 text-3xl transition-all duration-1000 ease-out pointer-events-none opacity-100 z-30';
            floater.textContent = symbol;
            
            const randomX = Math.floor(Math.random() * 25) + 12;
            if (side === 'left') {
                floater.style.left = `${randomX}%`;
            } else {
                floater.style.right = `${randomX}%`;
            }

            container.appendChild(floater);

            setTimeout(() => {
                floater.style.transform = 'translateY(-180px) scale(1.6)';
                floater.style.opacity = '0';
            }, 40);

            setTimeout(() => floater.remove(), 1100);
        }

        function appendChatMessage(name, text, isSystem = false) {
            const container = document.getElementById('chat-messages-container');
            const msgEl = document.createElement('div');
            
            if (isSystem) {
                msgEl.className = 'chat-msg bg-gradient-to-r from-orange-500/10 to-transparent border-l-2 border-orange-500 p-2 rounded text-xs text-orange-200';
                msgEl.innerHTML = `<strong>${name}:</strong> ${text}`;
            } else {
                const colors = ['text-orange-400', 'text-yellow-400', 'text-red-400', 'text-amber-400'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                msgEl.className = 'chat-msg text-xs leading-relaxed';
                msgEl.innerHTML = `<span class="${randomColor} font-black mr-1">${name}:</span> <span class="text-orange-50/90">${text}</span>`;
            }

            container.appendChild(msgEl);
            container.scrollTop = container.scrollHeight;

            if (container.children.length > 40) {
                container.removeChild(container.firstChild);
            }
        }

        function handleSendComment(e) {
            e.preventDefault();
            const input = document.getElementById('chat-input');
            const text = input.value.trim();
            if (!text) return;

            appendChatMessage("Tu", text);
            input.value = '';

            setTimeout(() => {
                const reactions = [
                    "Que audácia ahahah!", "Grande argumento!", "Lindo 💩", "Reclama mais!", "Apoiado!", "Estou farto de rir!"
                ];
                const randomName = "user_shit_" + Math.floor(Math.random() * 9000 + 1000);
                appendChatMessage(randomName, reactions[Math.floor(Math.random() * reactions.length)]);
            }, 1000);
        }

        // Loop automático de simulação de torcida
        setInterval(() => {
            const isFeedActive = !document.getElementById('view-feed').classList.contains('hidden');
            if (isFeedActive && isBattleActive) {
                const commentPool = [
                    "Isso foi um crime gastronómico à séria!",
                    "O sofá é mesmo culpado do desaparecimento 🩴😂", "Abaixo as meias rebeldes!",
                    "Dá-lhe com o rolo de papel higiénico neles!", "O Wi-Fi odeia-nos mesmo...",
                    "A torrada está a ganhar de certeza!"
                ];
                const names = ["Humor_Tuga", "Reclama_PT", "Comédia99", "Improviso_Total", "Zezito_10"];
                
                const randomName = names[Math.floor(Math.random() * names.length)];
                const randomComment = commentPool[Math.floor(Math.random() * commentPool.length)];
                appendChatMessage(randomName, randomComment);

                const battle = database.battles[activeBattleIndex];
                if (Math.random() > 0.5) {
                    battle.scoreLeft += Math.floor(Math.random() * 150) + 10;
                } else {
                    battle.scoreRight += Math.floor(Math.random() * 150) + 10;
                }
                updateScoresUI();
            }
        }, 3500);

        function renderUpcomingBattlesList() {
            const container = document.getElementById('upcoming-battles-list');
            container.innerHTML = '';

            database.battles.slice(0, 4).forEach((battle, index) => {
                const activeBorder = index === activeBattleIndex ? 'border-orange-500 bg-orange-500/10' : 'border-orange-950 bg-[#160e0d] hover:bg-orange-950/40';
                
                container.innerHTML += `
                    <div onclick="loadBattle(${index})" class="p-2.5 rounded-2xl border ${activeBorder} transition-all cursor-pointer flex justify-between items-center group">
                        <div class="flex items-center space-x-3">
                            <span class="text-lg shrink-0">${battle.emoji || '💩'}</span>
                            <div>
                                <h5 class="text-xs font-extrabold text-white group-hover:text-orange-400 transition-colors">${battle.title}</h5>
                                <p class="text-[9px] text-orange-400">${battle.category}</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-chevron-right text-[10px] text-orange-700 group-hover:text-orange-400 transition-all"></i>
                    </div>
                `;
            });
        }

        // Pesquisa e Filtros de Temas Oficiais
        function filterThemes() {
            const query = document.getElementById('theme-search-input').value.toLowerCase().trim();
            const category = document.getElementById('theme-category-select').value;
            
            const filtered = absurdThemes.filter(t => {
                const matchesQuery = t.title.toLowerCase().includes(query) || t.mission.toLowerCase().includes(query);
                const matchesCategory = (category === 'ALL') || (t.category === category);
                return matchesQuery && matchesCategory;
            });

            document.getElementById('theme-count-indicator').textContent = filtered.length;
            renderThemesGrid(filtered);
        }

        // Renderização dos Temas Oficiais em Formato de Grade
        function renderThemesGrid(list = absurdThemes) {
            const container = document.getElementById('themes-grid-container');
            container.innerHTML = '';

            if (list.length === 0) {
                container.innerHTML = `
                    <div class="col-span-1 md:col-span-2 bg-[#140d0c] border border-orange-950 p-8 rounded-2xl text-center text-orange-300/40">
                        <i class="fa-solid fa-face-frown text-4xl mb-3"></i>
                        <p class="text-sm font-semibold">Nenhum tema absurdamente ridículo encontrado para a tua pesquisa!</p>
                    </div>
                `;
                return;
            }

            list.forEach((t) => {
                // Encontrar index original para lançar o duelo correto
                const indexInOriginal = absurdThemes.findIndex(orig => orig.id === t.id);

                container.innerHTML += `
                    <div class="bg-gradient-to-br from-[#18100e] to-[#0f0807] border border-orange-950 p-4 rounded-2xl flex flex-col justify-between hover:border-orange-500/50 transition-all group">
                        <div>
                            <div class="flex justify-between items-start">
                                <span class="text-3xl shrink-0">${t.emoji}</span>
                                <span class="text-[9px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">${t.category}</span>
                            </div>
                            <h4 class="text-sm font-black text-white mt-3 group-hover:text-orange-400 transition-all">${t.title}</h4>
                            <p class="text-xs text-orange-200/80 mt-1"><strong>Missão:</strong> ${t.mission}</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-orange-950 flex justify-between items-center">
                            <span class="text-[9px] text-amber-400 font-extrabold max-w-[70%] truncate" title="${t.bonus}">
                                <i class="fa-solid fa-star"></i> Bónus: ${t.bonus}
                            </span>
                            <button onclick="drawnThemeIndex = ${indexInOriginal}; launchSorteadoLive()" class="bg-orange-600 hover:bg-orange-500 text-black text-xs font-bold px-3 py-1.5 rounded-xl transition-all">
                                Jogar PK
                            </button>
                        </div>
                    </div>
                `;
            });
        }

        // Função de Recuo Exponencial (Retries) conforme as regras Gemini API
        async function fetchWithRetry(url, options, retries = 5, delay = 1000) {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response;
            } catch (error) {
                if (retries > 0) {
                    // Espera delay exponencial sem logs de consola
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return fetchWithRetry(url, options, retries - 1, delay * 2);
                } else {
                    throw error;
                }
            }
        }

        function showCustomNotification(title, message, type = "success") {
            const notification = document.createElement('div');
            notification.className = `fixed top-6 right-6 z-50 p-4 rounded-2xl border shadow-2xl flex items-start space-x-3 transition-all transform translate-y-[-20px] opacity-0 max-w-sm`;
            
            if (type === "success") {
                notification.className += ' bg-emerald-950/95 border-emerald-500/30 text-emerald-100';
            } else if (type === "info") {
                notification.className += ' bg-amber-950/95 border-amber-500/30 text-amber-100';
            } else {
                notification.className += ' bg-red-950/95 border-red-500/30 text-red-100';
            }

            const icon = type === "success" ? "fa-circle-check text-emerald-400" : type === "info" ? "fa-circle-info text-amber-400" : "fa-triangle-exclamation text-red-400";

            notification.innerHTML = `
                <i class="fa-solid ${icon} text-lg mt-0.5"></i>
                <div>
                    <h5 class="font-black text-sm">${title}</h5>
                    <p class="text-xs mt-0.5 text-gray-200">${message}</p>
                </div>
            `;

            document.body.appendChild(notification);
            setTimeout(() => notification.classList.remove('translate-y-[-20px]', 'opacity-0'), 50);
            setTimeout(() => {
                notification.classList.add('translate-y-[-20px]', 'opacity-0');
                setTimeout(() => notification.remove(), 400);
            }, 4000);
        }

        // Alterar avatar com rostos fotorrealistas ou divertidos aleatórios
        function changeCustomAvatar() {
            playInteractionSound('draw');
            const funnyAvatars = [
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=150"
            ];
            const chosen = funnyAvatars[Math.floor(Math.random() * funnyAvatars.length)];
            document.getElementById('my-profile-avatar').src = chosen;
            showCustomNotification("Foto de Perfil Atualizada", "Avatar trocado para nova expressão com sucesso.", "success");
        }

        function addBonusCoins() {
            userCoins += 500;
            document.getElementById('user-coins').textContent = userCoins.toLocaleString();
            document.getElementById('stat-coins').textContent = userCoins.toLocaleString();
            playInteractionSound('gift');
            showCustomNotification("Moedas de Bónus Adicionadas!", "+500 moedas virtuais concedidas.", "success");
        }

        // Geração com IA Gemini Integrada com Schema Estruturado
        async function generateAIBattle(event) {
            event.preventDefault();

            const theme = document.getElementById('ai-theme').value.trim();
            const sideAInput = document.getElementById('ai-side-a').value.trim();
            const sideBInput = document.getElementById('ai-side-b').value.trim();
            const generateImages = document.getElementById('ai-generate-images-cb').checked;

            if (!theme) return;

            document.getElementById('ai-btn-submit').classList.add('hidden');
            document.getElementById('ai-loader').classList.remove('hidden');

            const loaderText = document.getElementById('ai-loader-text');
            loaderText.textContent = "A IA está estudando o tema de queixa e gerando as personagens...";

            let imageA = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400";
            let imageB = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400";

            // Prompt do Gemini para formatar a batalha absurda de Reclamação
            const systemPrompt = `
                Você é o diretor criativo do SHITAGRAM™, uma rede social satírica de PK Lives de Batalhas de Reclamação Absurda™.
                Crie um duelo humorístico a partir da queixa do utilizador.
                Retorne apenas no formato estruturado especificado.
            `;

            const userPrompt = `Crie uma reclamação de PK Live baseada nisto:
            Queixa do utilizador: ${theme}
            Nome do Rival A (opcional): ${sideAInput || "Criar automaticamente"}
            Nome do Rival B (opcional): ${sideBInput || "Criar automaticamente"}`;

            let parsedData = null;

            try {
                const apiKey = ""; 
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

                const payload = {
                    contents: [{ parts: [{ text: userPrompt }] }],
                    generationConfig: { 
                        responseMimeType: "application/json",
                        responseSchema: {
                            type: "OBJECT",
                            properties: {
                                title: { type: "STRING" },
                                category: { type: "STRING" },
                                rival_a: {
                                    type: "OBJECT",
                                    properties: {
                                        name: { type: "STRING" },
                                        desc: { type: "STRING" },
                                        image_prompt: { type: "STRING" }
                                    },
                                    required: ["name", "desc", "image_prompt"]
                                },
                                rival_b: {
                                    type: "OBJECT",
                                    properties: {
                                        name: { type: "STRING" },
                                        desc: { type: "STRING" },
                                        image_prompt: { type: "STRING" }
                                    },
                                    required: ["name", "desc", "image_prompt"]
                                },
                                bonusTerm: { type: "STRING" },
                                bonusText: { type: "STRING" },
                                comments: {
                                    type: "ARRAY",
                                    items: {
                                        type: "OBJECT",
                                        properties: {
                                            name: { type: "STRING" },
                                            text: { type: "STRING" }
                                        },
                                        required: ["name", "text"]
                                    }
                                }
                            },
                            required: ["title", "category", "rival_a", "rival_b", "bonusTerm", "bonusText", "comments"]
                        }
                    },
                    systemInstruction: { parts: [{ text: systemPrompt }] }
                };

                const response = await fetchWithRetry(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();
                let jsonText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
                
                if (!jsonText) throw new Error("Resposta nula.");
                parsedData = JSON.parse(jsonText.trim());
            } catch (err) {
                // Procedimento de contingência local se a API estiver sem ligação ou falhar
                parsedData = generateProceduralFallback(theme, sideAInput, sideBInput);
            }

            // Geração de fotos via Imagen se VIP ativo
            if (generateImages && parsedData) {
                loaderText.textContent = "Invocando o Imagen 4.0 para pintar os reclamantes fotorrealistas...";
                try {
                    const promptA = `${parsedData.rival_a.image_prompt}. High detail funny custom character portrait photograph, neon glowing background.`;
                    const base64A = await generateAIImageWithImagen(promptA);
                    if (base64A) imageA = base64A;

                    const promptB = `${parsedData.rival_b.image_prompt}. High detail funny custom character portrait photograph, neon glowing background.`;
                    const base64B = await generateAIImageWithImagen(promptB);
                    if (base64B) imageB = base64B;
                } catch (imgErr) {
                    // Mantém imagens de fallback padrão
                }
            }

            const newBattle = {
                id: 'custom-' + Date.now(),
                title: parsedData.title,
                category: parsedData.category,
                scoreLeft: 1000,
                scoreRight: 1000,
                left: {
                    name: parsedData.rival_a.name,
                    desc: parsedData.rival_a.desc,
                    img: imageA
                },
                right: {
                    name: parsedData.rival_b.name,
                    desc: parsedData.rival_b.desc,
                    img: imageB
                },
                mission: theme,
                bonus: parsedData.bonusText || `+500 se disseres "${parsedData.bonusTerm}"`,
                bonusTerm: parsedData.bonusTerm,
                bonusVal: 500,
                emoji: '🤖',
                comments: parsedData.comments || [{name: "ShitagramBot", text: "Improviso gerado!"}]
            };

            database.battles.unshift(newBattle);
            myCreatedBattles.unshift(newBattle);
            updateProfileHistory();

            playInteractionSound('create');
            showCustomNotification("Reclamação Criada!", "A sua queixa absurda já está ativa na lista de lives!", "success");

            loadBattle(0);
            switchTab('feed');

            document.getElementById('ai-btn-submit').classList.remove('hidden');
            document.getElementById('ai-loader').classList.add('hidden');
        }

        async function generateAIImageWithImagen(prompt) {
            const apiKey = ""; 
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;
            const payload = {
                instances: { prompt: prompt },
                parameters: { "sampleCount": 1 }
            };

            const response = await fetchWithRetry(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            if (data.predictions && data.predictions.length > 0 && data.predictions[0].bytesBase64Encoded) {
                return `data:image/png;base64,${data.predictions[0].bytesBase64Encoded}`;
            }
            return null;
        }

        // Função de Contingência Local se API falhar
        function generateProceduralFallback(theme, sideA, sideB) {
            const finalA = sideA || "Reclamante Exasperado";
            const finalB = sideB || "Objeto da Queixa";
            return {
                title: "Reclamação Impetuosa",
                category: "Absurdo Geral",
                rival_a: {
                    name: finalA,
                    desc: "Cansado de ser vítima das leis fundamentais da física e da Lei de Murphy.",
                    image_prompt: "funny grumpy person face portrait"
                },
                rival_b: {
                    name: finalB,
                    desc: "Inocente até prova em contrário, defende-se com lógica duvidosa.",
                    image_prompt: "funny smug person face portrait"
                },
                bonusTerm: "absurdo",
                bonusText: "+500 por usar a palavra 'absurdo'",
                comments: [
                    { name: "SarcasmoAtivo", text: "Isto é arte pura!" },
                    { name: "TugaAnonimo", text: "Quem nunca se chateou com coisas inanimadas? kkkk" }
                ]
            };
        }

        function launchConfettiShower() {
            const colors = ['#ea580c', '#f97316', '#ef4444', '#facc15', '#84cc16'];
            const container = document.getElementById('gift-animation-container');
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.transform = `scale(${Math.random() * 0.7 + 0.4})`;
                confetti.style.animationDelay = `${Math.random() * 0.4}s`;
                confetti.style.animationDuration = `${Math.random() * 2 + 1.2}s`;

                container.appendChild(confetti);
                setTimeout(() => confetti.remove(), 2500);
            }
        }

        function updateProfileHistory() {
            const container = document.getElementById('my-past-battles');
            if (myCreatedBattles.length === 0) {
                container.innerHTML = `<p class="text-xs text-gray-500 text-center py-6">Nenhuma reclamação gerada por si ainda.</p>`;
                return;
            }

            container.innerHTML = '';
            myCreatedBattles.forEach(battle => {
                container.innerHTML += `
                    <div class="bg-[#18100e] border border-orange-950 p-4 rounded-2xl flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">🤖</span>
                            <div>
                                <h5 class="text-sm font-bold text-white">${battle.title}</h5>
                                <p class="text-[10px] text-orange-400">Criada por IA em seu perfil</p>
                            </div>
                        </div>
                        <span class="text-xs bg-orange-500/10 text-orange-400 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">${battle.category}</span>
                    </div>
                `;
            });
        }



        // Perfil editável em tempo real
        function getDefaultProfileName() {
            return `Reclamante_${userId.split('_')[2]}`;
        }

        function applyProfileRealtime(profile) {
            const name = profile.name || getDefaultProfileName();
            const avatar = profile.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150';
            const nameEl = document.getElementById('my-profile-name');
            const avatarEl = document.getElementById('my-profile-avatar');
            const authEl = document.getElementById('auth-status');
            const nameInput = document.getElementById('profile-name-input');
            const avatarInput = document.getElementById('profile-avatar-input');
            if (nameEl) nameEl.textContent = name;
            if (avatarEl) avatarEl.src = avatar;
            if (authEl) authEl.textContent = name;
            if (nameInput && document.activeElement !== nameInput) nameInput.value = name;
            if (avatarInput && document.activeElement !== avatarInput) avatarInput.value = profile.avatar || '';
        }

        function loadProfileRealtime() {
            const saved = JSON.parse(localStorage.getItem('shitagram_profile') || '{}');
            applyProfileRealtime(saved);
        }

        function saveProfileRealtime() {
            const nameInput = document.getElementById('profile-name-input');
            const avatarInput = document.getElementById('profile-avatar-input');
            const status = document.getElementById('profile-save-status');
            const profile = {
                name: (nameInput?.value || '').trim() || getDefaultProfileName(),
                avatar: (avatarInput?.value || '').trim()
            };
            localStorage.setItem('shitagram_profile', JSON.stringify(profile));
            applyProfileRealtime(profile);
            if (status) {
                status.textContent = 'Guardado automaticamente';
                status.className = 'text-[11px] text-emerald-400 font-bold flex items-center';
            }
        }

        function resetProfileRealtime() {
            localStorage.removeItem('shitagram_profile');
            applyProfileRealtime({ name: getDefaultProfileName(), avatar: '' });
            const status = document.getElementById('profile-save-status');
            if (status) status.textContent = 'Perfil reposto';
            showCustomNotification('Perfil reposto', 'O nome e avatar voltaram ao padrão.', 'info');
        }

        window.onload = function() {
            document.getElementById('my-profile-id').textContent = `ID: ${userId}`;
            loadProfileRealtime();

            loadBattle(0);
            renderThemesGrid();
        };
