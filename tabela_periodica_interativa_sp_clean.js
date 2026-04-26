    const elements = [
      {n:1,s:'H',name:'Hidrogênio',en:'Hydrogen',group:1,period:1,block:'s',family:'especial',familyKey:'g1',classification:'ametal',state:'gás',importance:'alta',priority:3,valence:'1 (caso especial)',note:'Memorize forte. Ele aparece em água, ácidos, combustíveis e em quase toda introdução de química.',story:'Fica no alto do grupo 1, mas não é um metal alcalino comum. É o elemento mais abundante do universo e um caso especial de comportamento.',common:true},
      {n:2,s:'He',name:'Hélio',en:'Helium',group:18,period:1,block:'s',family:'gás nobre',familyKey:'g18',classification:'noble',state:'gás',importance:'alta',priority:3,valence:'2',note:'Memorize bem: ele está na coluna dos nobres, mas eletronicamente pertence ao bloco s.',story:'Foi identificado primeiro no espectro solar antes de ser isolado na Terra. O nome vem de Hélios, o Sol.',common:true},

      {n:3,s:'Li',name:'Lítio',en:'Lithium',group:1,period:2,block:'s',family:'metal alcalino',familyKey:'g1',classification:'metal',state:'sólido',importance:'alta',priority:3,valence:'1',note:'Importante memorizar. É o primeiro alcalino “normal” da coluna.',story:'Hoje é muito lembrado por baterias recarregáveis e por sua baixa densidade.',common:true},
      {n:4,s:'Be',name:'Berílio',en:'Beryllium',group:2,period:2,block:'s',family:'metal alcalino-terroso',familyKey:'g2',classification:'metal',state:'sólido',importance:'média',priority:2,valence:'2',note:'Vale saber a posição. Menos cobrado que Mg e Ca, mas importante para reconhecer a família 2A.',story:'É leve e rígido, mas seus compostos exigem cuidado por toxicidade.',common:false},
      {n:5,s:'B',name:'Boro',en:'Boron',group:13,period:2,block:'p',family:'grupo do boro',familyKey:'g13',classification:'semimetal',state:'sólido',importance:'média',priority:2,valence:'3',note:'Bom para marcar o começo do bloco p no período 2.',story:'Aparece em boratos e em materiais como vidro borossilicato.',common:false},
      {n:6,s:'C',name:'Carbono',en:'Carbon',group:14,period:2,block:'p',family:'grupo do carbono',familyKey:'g14',classification:'ametal',state:'sólido',importance:'alta',priority:3,valence:'4',note:'Prioridade máxima. Se você decorar poucos do grupo 14, o carbono precisa estar entre eles.',story:'É a base da química orgânica e aparece em grafite, diamante e em praticamente toda bioquímica.',common:true},
      {n:7,s:'N',name:'Nitrogênio',en:'Nitrogen',group:15,period:2,block:'p',family:'grupo do nitrogênio',familyKey:'g15',classification:'ametal',state:'gás',importance:'alta',priority:3,valence:'5',note:'Prioridade máxima. Lembre que o ar é majoritariamente N₂.',story:'Está presente em proteínas, DNA, fertilizantes e compõe a maior parte da atmosfera.',common:true},
      {n:8,s:'O',name:'Oxigênio',en:'Oxygen',group:16,period:2,block:'p',family:'calcogênio',familyKey:'g16',classification:'ametal',state:'gás',importance:'alta',priority:3,valence:'6',note:'Prioridade máxima. Oxigênio é um dos pilares para água, respiração e oxidação.',story:'É central na química inorgânica e orgânica e ajuda a visualizar bem o grupo 16.',common:true},
      {n:9,s:'F',name:'Flúor',en:'Fluorine',group:17,period:2,block:'p',family:'halogênio',familyKey:'g17',classification:'ametal',state:'gás',importance:'alta',priority:3,valence:'7',note:'Memorize forte: flúor costuma ser a referência de eletronegatividade alta.',story:'É o halogênio mais reativo do grupo clássico e forma compostos extremamente estáveis com muitos elementos.',common:true},
      {n:10,s:'Ne',name:'Neônio',en:'Neon',group:18,period:2,block:'p',family:'gás nobre',familyKey:'g18',classification:'noble',state:'gás',importance:'alta',priority:3,valence:'8',note:'Bom para fixar a família dos gases nobres.',story:'Ficou famoso pelos letreiros luminosos chamados “neon”, embora nem todo letreiro use neônio puro.',common:true},

      {n:11,s:'Na',name:'Sódio',en:'Sodium',group:1,period:3,block:'s',family:'metal alcalino',familyKey:'g1',classification:'metal',state:'sólido',importance:'alta',priority:3,valence:'1',note:'Prioridade máxima. Relacione com sal de cozinha: NaCl.',story:'É um alcalino clássico do ensino médio e ajuda a entender bem formação de íons +1.',common:true},
      {n:12,s:'Mg',name:'Magnésio',en:'Magnesium',group:2,period:3,block:'s',family:'metal alcalino-terroso',familyKey:'g2',classification:'metal',state:'sólido',importance:'alta',priority:3,valence:'2',note:'Muito importante para decorar. Fixa bem o comportamento do grupo 2.',story:'Queima com luz branca intensa e também aparece na clorofila.',common:true},
      {n:13,s:'Al',name:'Alumínio',en:'Aluminium',group:13,period:3,block:'p',family:'grupo do boro',familyKey:'g13',classification:'metal',state:'sólido',importance:'alta',priority:3,valence:'3',note:'Decore forte. É a prova viva de que nem todo elemento do bloco p é ametal.',story:'Metal leve e muito comum em embalagens, estruturas e ligas.',common:true},
      {n:14,s:'Si',name:'Silício',en:'Silicon',group:14,period:3,block:'p',family:'grupo do carbono',familyKey:'g14',classification:'semimetal',state:'sólido',importance:'alta',priority:3,valence:'4',note:'Prioridade máxima. Aparece em areia, quartzo, vidro e semicondutores.',story:'É um dos nomes mais úteis para ligar química, geologia e tecnologia.',common:true},
      {n:15,s:'P',name:'Fósforo',en:'Phosphorus',group:15,period:3,block:'p',family:'grupo do nitrogênio',familyKey:'g15',classification:'ametal',state:'sólido',importance:'alta',priority:3,valence:'5',note:'Importante. Ajuda em fertilizantes, biomoléculas e nomenclatura inorgânica.',story:'Seu nome significa “portador de luz” e ele aparece em ATP, DNA e fertilizantes.',common:true},
      {n:16,s:'S',name:'Enxofre',en:'Sulfur',group:16,period:3,block:'p',family:'calcogênio',familyKey:'g16',classification:'ametal',state:'sólido',importance:'alta',priority:3,valence:'6',note:'Memorize bem para não confundir com Sr, Si, Sn, Se etc.',story:'É muito ligado ao ácido sulfúrico e a compostos com cheiro marcante.',common:true},
      {n:17,s:'Cl',name:'Cloro',en:'Chlorine',group:17,period:3,block:'p',family:'halogênio',familyKey:'g17',classification:'ametal',state:'gás',importance:'alta',priority:3,valence:'7',note:'Prioridade máxima. Cloro é indispensável para entender halogênios e sais.',story:'Aparece em desinfecção, em compostos industriais e no sal de cozinha na forma de cloreto.',common:true},
      {n:18,s:'Ar',name:'Argônio',en:'Argon',group:18,period:3,block:'p',family:'gás nobre',familyKey:'g18',classification:'noble',state:'gás',importance:'alta',priority:3,valence:'8',note:'Decore bem. É um gás nobre abundante no ar.',story:'Muito usado para criar atmosferas inertes, por exemplo em soldagem e lâmpadas.',common:true},

      {n:19,s:'K',name:'Potássio',en:'Potassium',group:1,period:4,block:'s',family:'metal alcalino',familyKey:'g1',classification:'metal',state:'sólido',importance:'alta',priority:3,valence:'1',note:'Importante. Relacione com fertilizantes e fisiologia.',story:'É essencial em processos biológicos e ajuda a fixar a continuação dos alcalinos.',common:true},
      {n:20,s:'Ca',name:'Cálcio',en:'Calcium',group:2,period:4,block:'s',family:'metal alcalino-terroso',familyKey:'g2',classification:'metal',state:'sólido',importance:'alta',priority:3,valence:'2',note:'Prioridade alta. Muito cobrado por aparecer em ossos, calcário e cimento.',story:'É um dos nomes mais familiares da família 2A.',common:true},
      {n:31,s:'Ga',name:'Gálio',en:'Gallium',group:13,period:4,block:'p',family:'grupo do boro',familyKey:'g13',classification:'metal',state:'sólido',importance:'média',priority:2,valence:'3',note:'Saiba reconhecer. Menos central que Al, mas bom para fechar a coluna.',story:'Ficou famoso por derreter perto da temperatura da mão.',common:false},
      {n:32,s:'Ge',name:'Germânio',en:'Germanium',group:14,period:4,block:'p',family:'grupo do carbono',familyKey:'g14',classification:'semimetal',state:'sólido',importance:'média',priority:2,valence:'4',note:'Vale reconhecer como semimetal do grupo 14.',story:'Foi importante historicamente em eletrônica e semicondutores.',common:false},
      {n:33,s:'As',name:'Arsênio',en:'Arsenic',group:15,period:4,block:'p',family:'grupo do nitrogênio',familyKey:'g15',classification:'semimetal',state:'sólido',importance:'média',priority:2,valence:'5',note:'Bom saber a posição. Famoso pela associação histórica com toxicidade.',story:'É um metaloide conhecido há séculos e muito citado por seu caráter tóxico.',common:false},
      {n:34,s:'Se',name:'Selênio',en:'Selenium',group:16,period:4,block:'p',family:'calcogênio',familyKey:'g16',classification:'ametal',state:'sólido',importance:'média',priority:2,valence:'6',note:'Memorize o símbolo para não confundir com S, Sr e Si.',story:'É um micronutriente em pequenas quantidades e também aparece em aplicações eletrônicas.',common:false},
      {n:35,s:'Br',name:'Bromo',en:'Bromine',group:17,period:4,block:'p',family:'halogênio',familyKey:'g17',classification:'ametal',state:'líquido',importance:'alta',priority:3,valence:'7',note:'Importante. Um ótimo gancho é lembrar que o bromo é líquido à temperatura ambiente.',story:'Seu nome remete a odor forte, e ele é um dos poucos elementos líquidos em condições ambientes.',common:true},
      {n:36,s:'Kr',name:'Criptônio',en:'Krypton',group:18,period:4,block:'p',family:'gás nobre',familyKey:'g18',classification:'noble',state:'gás',importance:'média',priority:2,valence:'8',note:'Não é dos mais cobrados, mas ajuda a completar a música dos nobres.',story:'É um gás nobre usado em iluminação especial e em referências fotométricas históricas.',common:false},

      {n:37,s:'Rb',name:'Rubídio',en:'Rubidium',group:1,period:5,block:'s',family:'metal alcalino',familyKey:'g1',classification:'metal',state:'sólido',importance:'média',priority:2,valence:'1',note:'Saiba a posição; menos importante que Li, Na e K para começar.',story:'É um alcalino bastante reativo e muito mais raro no cotidiano escolar.',common:false},
      {n:38,s:'Sr',name:'Estrôncio',en:'Strontium',group:2,period:5,block:'s',family:'metal alcalino-terroso',familyKey:'g2',classification:'metal',state:'sólido',importance:'média',priority:2,valence:'2',note:'Memorize o símbolo Sr para não confundir com S, Se ou Si.',story:'É famoso por produzir cor vermelha intensa em fogos de artifício.',common:false},
      {n:49,s:'In',name:'Índio',en:'Indium',wikiTitle:'Índio (elemento químico)',group:13,period:5,block:'p',family:'grupo do boro',familyKey:'g13',classification:'metal',state:'sólido',importance:'média',priority:2,valence:'3',note:'Saiba a posição. Aparece em materiais usados em telas e eletrônica.',story:'O nome foi dado por causa de uma linha azul-anil observada em seu espectro.',common:false},
      {n:50,s:'Sn',name:'Estanho',en:'Tin',group:14,period:5,block:'p',family:'grupo do carbono',familyKey:'g14',classification:'metal',state:'sólido',importance:'alta',priority:3,valence:'4',note:'Importante. Símbolo costuma confundir: Sn = estanho.',story:'É tradicional em soldas e em ligas clássicas como o bronze.',common:true},
      {n:51,s:'Sb',name:'Antimônio',en:'Antimony',group:15,period:5,block:'p',family:'grupo do nitrogênio',familyKey:'g15',classification:'semimetal',state:'sólido',importance:'média',priority:2,valence:'5',note:'Bom para fixar a região dos semimetais do grupo 15.',story:'Seu símbolo vem de stibium, um daqueles casos em que o símbolo não acompanha o nome português.',common:false},
      {n:52,s:'Te',name:'Telúrio',en:'Tellurium',group:16,period:5,block:'p',family:'calcogênio',familyKey:'g16',classification:'semimetal',state:'sólido',importance:'média',priority:2,valence:'6',note:'Saiba a posição. Ajuda a perceber a transição de ametal para semimetal no grupo 16.',story:'O nome se relaciona à Terra, e ele é bem mais raro que enxofre e selênio.',common:false},
      {n:53,s:'I',name:'Iodo',en:'Iodine',group:17,period:5,block:'p',family:'halogênio',familyKey:'g17',classification:'ametal',state:'sólido',importance:'alta',priority:3,valence:'7',note:'Muito importante. Símbolo curtíssimo: I.',story:'Aparece em antissépticos, na tireoide e em vários contextos de saúde.',common:true},
      {n:54,s:'Xe',name:'Xenônio',en:'Xenon',group:18,period:5,block:'p',family:'gás nobre',familyKey:'g18',classification:'noble',state:'gás',importance:'média',priority:2,valence:'8',note:'Bom saber a posição; nome e símbolo costumam chamar atenção.',story:'É um gás nobre pesado usado em lâmpadas, flashes e em algumas aplicações médicas.',common:false},

      {n:55,s:'Cs',name:'Césio',en:'Caesium',group:1,period:6,block:'s',family:'metal alcalino',familyKey:'g1',classification:'metal',state:'sólido',importance:'média',priority:2,valence:'1',note:'Saiba a posição. Aparece bastante quando se fala em alcalinos muito reativos.',story:'É célebre em relógios atômicos e em medidas de tempo de alta precisão.',common:false},
      {n:56,s:'Ba',name:'Bário',en:'Barium',group:2,period:6,block:'s',family:'metal alcalino-terroso',familyKey:'g2',classification:'metal',state:'sólido',importance:'média',priority:2,valence:'2',note:'Vale reconhecer. Muito lembrado por contraste radiológico em forma de sulfato.',story:'Ajuda a fechar o grupo 2 antes de chegar ao rádio.',common:false},
      {n:81,s:'Tl',name:'Tálio',en:'Thallium',group:13,period:6,block:'p',family:'grupo do boro',familyKey:'g13',classification:'metal',state:'sólido',importance:'baixa',priority:1,valence:'3',note:'Basta saber a posição nesta fase.',story:'É um metal pesado tóxico e não costuma ser prioridade no começo da tabela.',common:false},
      {n:82,s:'Pb',name:'Chumbo',en:'Lead',group:14,period:6,block:'p',family:'grupo do carbono',familyKey:'g14',classification:'metal',state:'sólido',importance:'alta',priority:3,valence:'4',note:'Importante. O símbolo Pb costuma confundir, então vale decorar cedo.',story:'É conhecido por baterias e por questões de toxicidade ambiental.',common:true},
      {n:83,s:'Bi',name:'Bismuto',en:'Bismuth',group:15,period:6,block:'p',family:'grupo do nitrogênio',familyKey:'g15',classification:'metal',state:'sólido',importance:'média',priority:2,valence:'5',note:'Saiba a posição e o símbolo.',story:'É um metal pesado relativamente menos tóxico e aparece em alguns medicamentos e ligas.',common:false},
      {n:84,s:'Po',name:'Polônio',en:'Polonium',group:16,period:6,block:'p',family:'calcogênio',familyKey:'g16',classification:'metal',state:'sólido',importance:'baixa',priority:1,valence:'6',note:'Mais importante como cultura da tabela do que para decorar usos.',story:'Foi descoberto por Marie Curie e recebeu esse nome em homenagem à Polônia.',common:false},
      {n:85,s:'At',name:'Astato',en:'Astatine',group:17,period:6,block:'p',family:'halogênio',familyKey:'g17',classification:'synthetic',state:'radioativo',importance:'baixa',priority:1,valence:'7',note:'Basta reconhecer: halogênio raríssimo e radioativo.',story:'É tão raro e instável que quase não aparece fora de contextos muito especializados.',common:false},
      {n:86,s:'Rn',name:'Radônio',en:'Radon',group:18,period:6,block:'p',family:'gás nobre',familyKey:'g18',classification:'noble',state:'gás radioativo',importance:'média',priority:2,valence:'8',note:'Vale conhecer por radioatividade e por contexto ambiental.',story:'É um gás nobre radioativo formado em cadeias de decaimento natural de elementos pesados.',common:false},

      {n:87,s:'Fr',name:'Frâncio',en:'Francium',group:1,period:7,block:'s',family:'metal alcalino',familyKey:'g1',classification:'synthetic',state:'radioativo',importance:'baixa',priority:1,valence:'1',note:'Quase só curiosidade nesta fase. Saiba que é raríssimo e altamente radioativo.',story:'É um dos elementos naturais mais raros em quantidades detectáveis na Terra.',common:false},
      {n:88,s:'Ra',name:'Rádio',en:'Radium',wikiTitle:'Rádio (elemento químico)',group:2,period:7,block:'s',family:'metal alcalino-terroso',familyKey:'g2',classification:'synthetic',state:'radioativo',importance:'baixa',priority:1,valence:'2',note:'Mais importante por contexto histórico de radioatividade.',story:'Foi um nome emblemático no começo da pesquisa em radioatividade.',common:false},
      {n:113,s:'Nh',name:'Nihônio',en:'Nihonium',group:13,period:7,block:'p',family:'grupo do boro',familyKey:'g13',classification:'synthetic',state:'sintético',importance:'baixa',priority:1,valence:'3 (previsto)',note:'Saiba o nome e a posição. Não é prioridade alta para memorização inicial.',story:'Elemento superpesado sintético; o nome homenageia o Japão (Nihon).',common:false},
      {n:114,s:'Fl',name:'Fleróvio',en:'Flerovium',group:14,period:7,block:'p',family:'grupo do carbono',familyKey:'g14',classification:'synthetic',state:'sintético',importance:'baixa',priority:1,valence:'4 (previsto)',note:'Basta reconhecer o símbolo e a família.',story:'Superpesado sintético nomeado em homenagem ao laboratório Flerov.',common:false},
      {n:115,s:'Mc',name:'Moscóvio',en:'Moscovium',group:15,period:7,block:'p',family:'grupo do nitrogênio',familyKey:'g15',classification:'synthetic',state:'sintético',importance:'baixa',priority:1,valence:'5 (previsto)',note:'Saiba a posição. Química detalhada não é prioridade agora.',story:'Superpesado sintético nomeado em referência à região de Moscou.',common:false},
      {n:116,s:'Lv',name:'Livermório',en:'Livermorium',group:16,period:7,block:'p',family:'calcogênio',familyKey:'g16',classification:'synthetic',state:'sintético',importance:'baixa',priority:1,valence:'6 (previsto)',note:'Importa mais reconhecer a coluna do que decorar propriedades finas.',story:'Superpesado sintético ligado ao laboratório de Livermore.',common:false},
      {n:117,s:'Ts',name:'Tenessino',en:'Tennessine',group:17,period:7,block:'p',family:'halogênio',familyKey:'g17',classification:'synthetic',state:'sintético',importance:'baixa',priority:1,valence:'7 (previsto)',note:'Pense nele como o halogênio superpesado do fim da coluna.',story:'Superpesado sintético nomeado em homenagem ao Tennessee.',common:false},
      {n:118,s:'Og',name:'Oganessônio',en:'Oganesson',group:18,period:7,block:'p',family:'gás nobre',familyKey:'g18',classification:'synthetic',state:'sintético',importance:'baixa',priority:1,valence:'8? (grupo 18)',note:'Saiba só o básico: último da linha atual, superpesado e sintético.',story:'Elemento 118; completa a sétima linha da tabela moderna conhecida.',common:false},
    ];

    const fullElementData = `
1|H|Hidrogênio|1|1|1|s|ametal|g1|1s1|2.2
2|He|Hélio|1|18|1|s|noble|g18|1s2|
3|Li|Lítio|2|1|2|s|metal|g1|[He]2s1|0.98
4|Be|Berílio|2|2|2|s|metal|g2|[He]2s2|1.57
5|B|Boro|2|13|2|p|semimetal|g13|[He]2s2 2p1|2.04
6|C|Carbono|2|14|2|p|ametal|g14|[He]2s2 2p2|2.55
7|N|Nitrogênio|2|15|2|p|ametal|g15|[He] 2s2 2p3|3.04
8|O|Oxigênio|2|16|2|p|ametal|g16|[He]2s2 2p4|3.44
9|F|Flúor|2|17|2|p|ametal|g17|[He]2s2 2p5|3.98
10|Ne|Neônio|2|18|2|p|noble|g18|[He]2s2 2p6|
11|Na|Sódio|3|1|3|s|metal|g1|[Ne]3s1|0.93
12|Mg|Magnésio|3|2|3|s|metal|g2|[Ne]3s2|1.31
13|Al|Alumínio|3|13|3|p|metal|g13|[Ne]3s2 3p1|1.61
14|Si|Silício|3|14|3|p|semimetal|g14|[Ne]3s2 3p2|1.9
15|P|Fósforo|3|15|3|p|ametal|g15|[Ne]3s2 3p3|2.19
16|S|Enxofre|3|16|3|p|ametal|g16|[Ne]3s2 3p4|2.58
17|Cl|Cloro|3|17|3|p|ametal|g17|[Ne]3s2 3p5|3.16
18|Ar|Argônio|3|18|3|p|noble|g18|[Ne]3s2 3p6|
19|K|Potássio|4|1|4|s|metal|g1|[Ar]4s1|0.82
20|Ca|Cálcio|4|2|4|s|metal|g2|[Ar]4s2|1
21|Sc|Escândio|4|3|4|d|metal|d|[Ar]4s2 3d1|1.36
22|Ti|Titânio|4|4|4|d|metal|d|[Ar]4s2 3d2|1.54
23|V|Vanádio|4|5|4|d|metal|d|[Ar]4s2 3d3|1.63
24|Cr|Cromo|4|6|4|d|metal|d|[Ar]3d5 4s1|1.66
25|Mn|Manganês|4|7|4|d|metal|d|[Ar]4s2 3d5|1.55
26|Fe|Ferro|4|8|4|d|metal|d|[Ar]4s2 3d6|1.83
27|Co|Cobalto|4|9|4|d|metal|d|[Ar]4s2 3d7|1.88
28|Ni|Níquel|4|10|4|d|metal|d|[Ar]4s2 3d8|1.91
29|Cu|Cobre|4|11|4|d|metal|d|[Ar]4s1 3d10|1.9
30|Zn|Zinco|4|12|4|d|metal|d|[Ar]4s2 3d10|1.65
31|Ga|Gálio|4|13|4|p|metal|g13|[Ar]4s2 3d10 4p1|1.81
32|Ge|Germânio|4|14|4|p|semimetal|g14|[Ar]4s2 3d10 4p2|2.01
33|As|Arsênio|4|15|4|p|semimetal|g15|[Ar]4s2 3d10 4p3|2.18
34|Se|Selênio|4|16|4|p|ametal|g16|[Ar]4s2 3d10 4p4|2.55
35|Br|Bromo|4|17|4|p|ametal|g17|[Ar]4s2 3d10 4p5|2.96
36|Kr|Criptônio|4|18|4|p|noble|g18|[Ar]4s2 3d10 4p6|3
37|Rb|Rubídio|5|1|5|s|metal|g1|[Kr]5s1|0.82
38|Sr|Estrôncio|5|2|5|s|metal|g2|[Kr]5s2|0.95
39|Y|Ítrio|5|3|5|d|metal|d|[Kr]5s2 4d1|1.22
40|Zr|Zircônio|5|4|5|d|metal|d|[Kr]5s2 4d2|1.33
41|Nb|Nióbio|5|5|5|d|metal|d|[Kr]5s1 4d4|1.6
42|Mo|Molibdênio|5|6|5|d|metal|d|[Kr]5s1 4d5|2.16
43|Tc|Tecnécio|5|7|5|d|synthetic|d|[Kr]5s2 4d5|1.9
44|Ru|Rutênio|5|8|5|d|metal|d|[Kr]5s1 4d7|2.2
45|Rh|Ródio|5|9|5|d|metal|d|[Kr]5s1 4d8|2.28
46|Pd|Paládio|5|10|5|d|metal|d|[Kr]4d10|2.2
47|Ag|Prata|5|11|5|d|metal|d|[Kr]5s1 4d10|1.93
48|Cd|Cádmio|5|12|5|d|metal|d|[Kr]5s2 4d10|1.69
49|In|Índio|5|13|5|p|metal|g13|[Kr]5s2 4d10 5p1|1.78
50|Sn|Estanho|5|14|5|p|metal|g14|[Kr]5s2 4d10 5p2|1.96
51|Sb|Antimônio|5|15|5|p|semimetal|g15|[Kr]5s2 4d10 5p3|2.05
52|Te|Telúrio|5|16|5|p|semimetal|g16|[Kr]5s2 4d10 5p4|2.1
53|I|Iodo|5|17|5|p|ametal|g17|[Kr]5s2 4d10 5p5|2.66
54|Xe|Xenônio|5|18|5|p|noble|g18|[Kr]5s2 4d10 5p6|2.6
55|Cs|Césio|6|1|6|s|metal|g1|[Xe]6s1|0.79
56|Ba|Bário|6|2|6|s|metal|g2|[Xe]6s2|0.89
57|La|Lantânio|6|4|8|f|metal|f|[Xe]6s2 5d1|1.1
58|Ce|Cério|6|5|8|f|metal|f|[Xe]6s2 4f1 5d1|1.12
59|Pr|Praseodímio|6|6|8|f|metal|f|[Xe]6s2 4f3|1.13
60|Nd|Neodímio|6|7|8|f|metal|f|[Xe]6s2 4f4|1.14
61|Pm|Promécio|6|8|8|f|synthetic|f|[Xe]6s2 4f5|
62|Sm|Samário|6|9|8|f|metal|f|[Xe]6s2 4f6|1.17
63|Eu|Európio|6|10|8|f|metal|f|[Xe]6s2 4f7|
64|Gd|Gadolínio|6|11|8|f|metal|f|[Xe]6s2 4f7 5d1|1.2
65|Tb|Térbio|6|12|8|f|metal|f|[Xe]6s2 4f9|
66|Dy|Disprósio|6|13|8|f|metal|f|[Xe]6s2 4f10|1.22
67|Ho|Hólmio|6|14|8|f|metal|f|[Xe]6s2 4f11|1.23
68|Er|Érbio|6|15|8|f|metal|f|[Xe]6s2 4f12|1.24
69|Tm|Túlio|6|16|8|f|metal|f|[Xe]6s2 4f13|1.25
70|Yb|Itérbio|6|17|8|f|metal|f|[Xe]6s2 4f14|
71|Lu|Lutécio|6|18|8|f|metal|f|[Xe]6s2 4f14 5d1|1.27
72|Hf|Háfnio|6|4|6|d|metal|d|[Xe]6s2 4f14 5d2|1.3
73|Ta|Tântalo|6|5|6|d|metal|d|[Xe]6s2 4f14 5d3|1.5
74|W|Tungstênio|6|6|6|d|metal|d|[Xe]6s2 4f14 5d4|2.36
75|Re|Rênio|6|7|6|d|metal|d|[Xe]6s2 4f14 5d5|1.9
76|Os|Ósmio|6|8|6|d|metal|d|[Xe]6s2 4f14 5d6|2.2
77|Ir|Irídio|6|9|6|d|metal|d|[Xe]6s2 4f14 5d7|2.2
78|Pt|Platina|6|10|6|d|metal|d|[Xe]6s1 4f14 5d9|2.28
79|Au|Ouro|6|11|6|d|metal|d|[Xe]6s1 4f14 5d10|2.54
80|Hg|Mercúrio|6|12|6|d|metal|d|[Xe]6s2 4f14 5d10|2
81|Tl|Tálio|6|13|6|p|metal|g13|[Xe]6s2 4f14 5d10 6p1|1.62
82|Pb|Chumbo|6|14|6|p|metal|g14|[Xe]6s2 4f14 5d10 6p2|2.33
83|Bi|Bismuto|6|15|6|p|metal|g15|[Xe]6s2 4f14 5d10 6p3|2.02
84|Po|Polônio|6|16|6|p|semimetal|g16|[Xe]6s2 4f14 5d10 6p4|2
85|At|Astato|6|17|6|p|ametal|g17|[Xe]6s2 4f14 5d10 6p5|2.2
86|Rn|Radônio|6|18|6|p|noble|g18|[Xe]6s2 4f14 5d10 6p6|
87|Fr|Frâncio|7|1|7|s|synthetic|g1|[Rn]7s1|0.7
88|Ra|Rádio|7|2|7|s|synthetic|g2|[Rn]7s2|0.9
89|Ac|Actínio|7|4|9|f|metal|f|[Rn]7s2 6d1|1.1
90|Th|Tório|7|5|9|f|metal|f|[Rn]7s2 6d2|1.3
91|Pa|Protactínio|7|6|9|f|metal|f|[Rn]7s2 5f2 6d1|1.5
92|U|Urânio|7|7|9|f|metal|f|[Rn]7s2 5f3 6d1|1.38
93|Np|Netúnio|7|8|9|f|synthetic|f|[Rn]7s2 5f4 6d1|1.36
94|Pu|Plutônio|7|9|9|f|synthetic|f|[Rn]7s2 5f6|1.28
95|Am|Amerício|7|10|9|f|synthetic|f|[Rn]7s2 5f7|1.3
96|Cm|Cúrio|7|11|9|f|synthetic|f|[Rn]7s2 5f7 6d1|1.3
97|Bk|Berquélio|7|12|9|f|synthetic|f|[Rn]7s2 5f9|1.3
98|Cf|Califórnio|7|13|9|f|synthetic|f|[Rn]7s2 5f10|1.3
99|Es|Einstênio|7|14|9|f|synthetic|f|[Rn]7s2 5f11|1.3
100|Fm|Férmio|7|15|9|f|synthetic|f|[Rn] 5f12 7s2|1.3
101|Md|Mendelévio|7|16|9|f|synthetic|f|[Rn]7s2 5f13|1.3
102|No|Nobélio|7|17|9|f|synthetic|f|[Rn]7s2 5f14|1.3
103|Lr|Laurêncio|7|18|9|f|synthetic|f|[Rn]7s2 5f14 6d1|1.3
104|Rf|Rutherfórdio|7|4|7|d|synthetic|d|[Rn]7s2 5f14 6d2|
105|Db|Dúbnio|7|5|7|d|synthetic|d|[Rn]7s2 5f14 6d3|
106|Sg|Seabórgio|7|6|7|d|synthetic|d|[Rn]7s2 5f14 6d4|
107|Bh|Bóhrio|7|7|7|d|synthetic|d|[Rn]7s2 5f14 6d5|
108|Hs|Hássio|7|8|7|d|synthetic|d|[Rn]7s2 5f14 6d6|
109|Mt|Meitnério|7|9|7|d|synthetic|d|[Rn]7s2 5f14 6d7 (calculado)|
110|Ds|Darmstádio|7|10|7|d|synthetic|d|[Rn]7s2 5f14 6d8 (previsto)|
111|Rg|Roentgênio|7|11|7|d|synthetic|d|[Rn]7s2 5f14 6d9 (previsto)|
112|Cn|Copernício|7|12|7|d|synthetic|d|[Rn]7s2 5f14 6d10 (previsto)|
113|Nh|Nihônio|7|13|7|p|synthetic|g13|[Rn]5f14 6d10 7s2 7p1 (previsto)|
114|Fl|Fleróvio|7|14|7|p|synthetic|g14|[Rn]7s2 7p2 5f14 6d10 (previsto)|
115|Mc|Moscóvio|7|15|7|p|synthetic|g15|[Rn]7s2 7p3 5f14 6d10 (previsto)|
116|Lv|Livermório|7|16|7|p|synthetic|g16|[Rn]7s2 7p4 5f14 6d10 (previsto)|
117|Ts|Tenessino|7|17|7|p|synthetic|g17|[Rn]7s2 7p5 5f14 6d10 (previsto)|
118|Og|Oganessônio|7|18|7|p|synthetic|g18|[Rn]7s2 7p6 5f14 6d10 (previsto)|
    `;

    const nobleGasConfig = {
      He:'1s2',
      Ne:'1s2 2s2 2p6',
      Ar:'1s2 2s2 2p6 3s2 3p6',
      Kr:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6',
      Xe:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6',
      Rn:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6'
    };

    const radioactiveAtomicNumbers = new Set([43, 61, ...Array.from({length: 35}, (_, i) => i + 84)]);
    const ambientStateOverrides = {
      H:'gás',
      He:'gás',
      N:'gás',
      O:'gás',
      F:'gás',
      Ne:'gás',
      Cl:'gás',
      Ar:'gás',
      Kr:'gás',
      Xe:'gás',
      Rn:'gás radioativo',
      Br:'líquido',
      Hg:'líquido'
    };

    const familyNames = {
      g1:'Metais alcalinos + H',
      g2:'Metais alcalino-terrosos',
      g13:'Grupo do boro',
      g14:'Grupo do carbono',
      g15:'Grupo do nitrogênio',
      g16:'Calcogênios',
      g17:'Halogênios',
      g18:'Gases nobres',
      d:'Metais de transição',
      f:'Transição interna'
    };
    const baseElementBySymbol = Object.fromEntries(elements.map(el => [el.s, el]));
    const allElements = fullElementData.trim().split('\n').map(row => {
      const [nRaw, s, name, periodRaw, colRaw, rowRaw, block, classification, familyKey, electronConfig, electronegativity] = row.split('|');
      const known = baseElementBySymbol[s] || {};
      const n = Number(nRaw);
      const period = Number(periodRaw);
      const group = Number(colRaw);
      const resolvedState = known.state || ambientStateOverrides[s] || (classification === 'synthetic' ? 'sintético/radioativo' : 'sólido');
      return {
        n,
        s,
        name,
        en:known.en || name,
        wikiTitle:known.wikiTitle,
        group,
        period,
        block,
        family:known.family || familyNames[familyKey] || familyNames[block] || '',
        familyKey,
        classification:known.classification || classification,
        state:resolvedState,
        physicalState:detectPhysicalState(resolvedState),
        radioactive:isRadioactiveAtomicNumber(n),
        importance:known.importance || 'baixa',
        priority:known.priority || 1,
        valence:known.valence || '-',
        note:known.note || `Configuração eletrônica: ${electronConfig || 'sem dado local'}.`,
        story:known.story || `${name} aparece no bloco ${block.toUpperCase()} da tabela completa, período ${period}.`,
        common:known.common || false,
        col:group,
        row:Number(rowRaw),
        electronConfig,
        shellDistribution:getShellDistribution(electronConfig),
        electronegativity
      };
    });
    const spElementSymbols = new Set(elements.map(el => el.s));
    const allElementBySymbol = Object.fromEntries(allElements.map(el => [el.s, el]));
    const usageNotes = Object.fromEntries(`
H|gás explosivo, elemento mais leve|90% dos átomos do universo, Sol e estrelas, H2O, moléculas orgânicas da vida
He|gás inerte, segundo elemento mais leve|fusão nuclear no Sol e nas estrelas, balões, lasers, refrigerante superfrio
Li|metal mais leve, macio e reativo|ligas leves de alumínio, baterias, panelas cerâmicas resistentes a impacto (Corningware©), estabilizador de humor
Be|metal leve|ferramentas de liga de cobre que não produzem faíscas, aeroespacial, janelas de raios X, gemas de berilo: esmeraldas e águas-marinhas
B|sólido preto e duro|sabão de bórax, fertilizante, fibras rígidas, equipamentos esportivos (tacos de golfe, raquetes de tênis, esquis), vidro borossilicato resistente ao calor (Pyrex©), semicondutores
C|diamante duro, grafite macio|base das moléculas orgânicas da vida, animais, plantas, CO2, madeira, papel, tecido, plástico, carvão mineral, petróleo
N|gás incolor|78% do ar, moléculas orgânicas, proteínas, músculos, DNA, amônia, fertilizante, explosivos (TNT), refrigerantes
O|gás incolor|21% do ar, H2O, 65% do corpo humano, moléculas orgânicas, sangue, respiração, fogo, metade da crosta terrestre, minerais, óxidos
F|gás amarelado venenoso, elemento mais reativo|fluorita fluorescente, pasta de dente, panelas antiaderentes (Teflon©), refrigerantes CFC (Freon©)
Ne|gás inerte|tubos de neônio vermelho-alaranjados para letreiros, lasers, refrigerante superfrio
Na|metal macio e reativo|sal (NaCl), nervos, bicarbonato de sódio, antiácidos, soda cáustica, sabão, barrilha, vidro, fabricação de papel, lâmpadas de rua
Mg|metal leve|clorofila em plantas verdes, talco, basalto, ligas de alumínio, carros, aviões, bicicletas, sinalizadores, estrelinhas, antiácidos
Al|metal leve que não corrói facilmente|metal comum, utensílios de cozinha, latas, papel-alumínio, máquinas, carros, aviões, bicicletas, feldspato, granito, argila, cerâmicas, coríndon, gemas
Si|metaloide duro|quartzo, granito, areia, solo, argila, cerâmicas, vidro, algas, diatomáceas, semicondutores, chips de computador, borracha de silicone
P|sólido branco ceroso que brilha (também formas vermelha e preta)|ossos, DNA, fosfatos armazenadores de energia (ATP), fertilizante, ácidos, detergentes, fósforos
S|sólido amarelo quebradiço|pele, cabelo, ovos, cebola, alho, fontes termais, vulcões, gesso, borracha, ácidos, fabricação de papel
Cl|gás esverdeado venenoso|sal (NaCl), água sanitária, ácido estomacal, desinfetante, água potável, piscinas, tubos e garrafas de plástico PVC
Ar|gás inerte|1% do ar, gás inerte mais abundante na Terra, lâmpadas, tubos de "neon", lasers, gás de soldagem
K|metal macio e reativo|sais, nervos, nutriente em frutas e vegetais, sabão, fertilizante, potassa, fósforos, pólvora
Ca|metal macio|ossos, dentes, leite, folhas, vegetais, conchas, coral, calcário, giz, gesso, argamassa, cimento, mármore, antiácidos
Ga|metal macio, derrete em um dia quente|semicondutores, diodos emissores de luz (LEDs) (GaAs), luzes de sinalização, lasers minúsculos
Ge|metaloide quebradiço|semicondutores, transistores, retificadores, diodos, fotocélulas, lentes, janelas infravermelhas
As|metaloide quebradiço|venenos, semicondutores, diodos emissores de luz (LEDs) (GaAs), luzes de sinalização, lasers minúsculos
Se|sólido cinza quebradiço|semicondutores, copiadoras, impressoras a laser, fotocélulas, vidro vermelho, xampu anticaspa, borracha
Br|líquido vermelho-escuro|desinfetante, piscinas e spas, filme fotográfico, retardante de chama, gasolina com chumbo, sedativos
Kr|gás inerte|lâmpadas de alta intensidade, faróis, lanternas, lampiões, tubos de "neon", lasers
Rb|metal macio e reativo|relógios atômicos, navegação global (GPS), removedor de gases em válvulas a vácuo
Sr|metal macio|fogos de artifício vermelhos, sinalizadores, fósforos luminosos, baterias nucleares, traçador médico diagnóstico, precipitação nuclear
In|metal macio|soldas, vedações de vidro, revestimentos de vidro, telas de cristal líquido (LCD), semicondutores, diodos, fotocélulas
Sn|metal macio que não corrói facilmente|soldas, latas de alimentos revestidas, bronze (Cu-Sn), copos de estanho, fabricação de vidro, sprinklers de incêndio
Sb|metaloide quebradiço|soldas, endurecedor de chumbo, baterias, balas, semicondutores, fotocélulas, fósforos, retardante de chama
Te|metaloide quebradiço|ligas, semicondutores, copiadoras, discos de computador, resfriadores e geradores termoelétricos
I|sólido violeta-preto|desinfetante para feridas e água potável, adicionado ao sal para prevenir doenças da tireoide, filme fotográfico
Xe|gás inerte|lâmpadas de alta intensidade, faróis, refletores de estádios, projetores, luzes estroboscópicas, lasers, motores iônicos de espaçonaves
Cs|metal macio, derrete em um dia quente, reativo, maiores átomos estáveis|relógios atômicos, navegação global (GPS), removedor de gases em válvulas a vácuo
Ba|metal macio, absorve raios X|realce de contraste em raios X do estômago, fogos de artifício verdes, branqueador e carga para papel
Tl|metal macio, tóxico|ligas de mercúrio de baixo ponto de fusão, termômetros de baixa temperatura, lâmpadas submarinas, fotocélulas
Pb|metal denso, macio, resistente à corrosão, tóxico|pesos, soldas, baterias, balas, vidro cristal, encanamento antigo, blindagem contra radiação
Bi|metal quebradiço de baixo ponto de fusão|soldas, fusíveis, sprinklers de incêndio (tampões derretem com calor), pigmento para cosméticos
Po|radioativo, de vida longa|primeiro elemento radioativo descoberto, pequenos traços na natureza, escovas antiestáticas, tabaco
At|radioativo, de vida curta|pequenos traços na natureza, medicina contra câncer
Rn|gás radioativo, de vida curta|risco ambiental, implantes cirúrgicos para tratamento de câncer
Fr|radioativo, de vida curta, átomos maiores que os de césio|pequenos traços na natureza, estudado em armadilhas atômicas a laser
Ra|radioativo, de vida longa|relógios luminosos (hoje proibidos), produção médica de radônio, radiografia, resíduos radioativos
Nh|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Fl|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Mc|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Lv|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Ts|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Og|radioativo, de vida curta|nunca encontrado na natureza, sem usos
`.trim().split('\n').map(row => {
      const [symbol, desc, uses] = row.split('|');
      return [symbol, {desc, uses}];
    }));

    Object.assign(usageNotes, Object.fromEntries(`
Sc|metal macio e leve|ligas de alumínio, bicicletas de corrida, lâmpadas de estádio, tijolos refratários, águas-marinhas
Ti|metal leve muito resistente e resistente ao calor|aeroespacial, bicicletas de corrida, juntas artificiais, tinta branca, safiras azuis
V|metal duro|aço duro, resistente e elástico, estruturas, veículos, molas, eixos de transmissão, ferramentas, aeroespacial, safiras violetas
Cr|metal duro e brilhante|aço inoxidável (Fe-Cr-Ni), utensílios de cozinha, aquecedores de nicromo, acabamento automotivo, tintas, fita magnética, esmeraldas e rubis
Mn|metal duro|aço duro e tenaz, máquinas de terraplenagem, britadores, trilhos, arados, machados, baterias, fertilizante, ametistas
Fe|metal de dureza média, magnético|ligas de aço são principalmente ferro, estruturas, veículos, ímãs, núcleo da Terra, rochas vermelhas, sangue
Co|metal duro, magnético|aço duro e resistente, ferramentas de corte, turbinas, ímãs (Al-Ni-Co), vidro e cerâmica azuis, vitamina B-12
Ni|metal de dureza média, magnético|aço inoxidável (Fe-Cr-Ni), utensílios de cozinha, aquecedores de nicromo, moedas, baterias níquel-cádmio, núcleo da Terra
Cu|metal colorido, bom condutor de calor e eletricidade|fios, panelas, latão (Cu-Zn), bronze (Cu-Sn), moedas, canos, sangue azul de caranguejo
Zn|metal resistente à corrosão|aço galvanizado, latão (Cu-Zn), baterias, tinta branca, fósforos de TVs e lâmpadas, fertilizante
Y|metal macio|fósforos em TVs coloridas, lasers (YAG, YLF), tijolos refratários, supercondutores de alta temperatura
Zr|metal resistente à corrosão e a nêutrons|tubulações químicas, reatores nucleares, tijolos refratários, abrasivos, gemas de zircão
Nb|metal de alto ponto de fusão e resistente à corrosão|tubulações químicas, supercondutores, trens de levitação magnética, ímãs de ressonância magnética
Mo|metal de alto ponto de fusão|aço duro, ferramentas de corte, brocas, blindagem, canos de armas, fertilizante
Tc|radioativo, de vida longa|primeiro elemento produzido por humanos, apenas traços na Terra mas encontrado em estrelas, traçador médico diagnóstico
Ru|metal duro e resistente à corrosão|contatos elétricos, chaves de lâmina, pontas de caneta, catalisador, produção de hidrogênio
Rh|metal duro, brilhante e resistente à corrosão|vidraria de laboratório, refletores, contatos elétricos, termopares, catalisador, controle de poluição
Pd|metal duro e resistente à corrosão, absorve hidrogênio|vidraria de laboratório, contatos elétricos, odontologia, catalisador, controle de poluição
Ag|metal macio e brilhante, melhor condutor elétrico entre os elementos|joias, prataria, moedas, odontologia, filme fotográfico
Cd|metal macio e resistente à corrosão, tóxico|aço eletrogalvanizado, baterias níquel-cádmio, tintas vermelhas e amarelas, sprinklers de incêndio
La|metal macio|vidro óptico, oculares de telescópio, lentes de câmera, pedras de isqueiro, lâmpadas de arco
Ce|metal macio|terra rara mais abundante, pedras de isqueiro, lâmpadas de arco, camisas de lampião a gás, fornos autolimpantes, polimento de vidro
Pr|metal macio|óculos de didímio para trabalho com maçarico, pedras de isqueiro, lâmpadas de arco, ímãs, vidro amarelo
Nd|metal macio|ímãs fortes (Nd-Fe-B), motores elétricos, alto-falantes e fones, lasers, pedras de isqueiro
Pm|radioativo, de vida longa|produzido por humanos, pequenos traços na natureza, mostradores luminosos, medidores de espessura de chapas
Sm|metal macio|ímãs (Sm-Co), motores elétricos, alto-falantes e fones, sensores infravermelhos, vidro absorvedor de infravermelho
Eu|metal macio|fósforos em TVs coloridas e lâmpadas fluorescentes tricromáticas, tinta luminosa, lasers
Gd|metal macio, melhor absorvedor de nêutrons, magnético|realce de contraste em ressonância magnética, fósforos, radiografia de nêutrons
Tb|metal macio|fósforos em TVs coloridas e lâmpadas fluorescentes tricromáticas, discos de computador, materiais magnetostritivos inteligentes (Fe-Dy-Tb)
Dy|metal macio|barras de controle nuclear, fósforos para ressonância magnética, discos de computador, materiais magnetostritivos inteligentes (Fe-Dy-Tb)
Ho|metal macio|lasers infravermelhos, cirurgia a laser, telêmetros a laser seguros para os olhos, discos de computador, filtros de vidro amarelo
Er|metal macio|amplificadores de sinal em fibra óptica, lasers infravermelhos, cirurgia a laser, vidro rosa, óculos de sol, ligas de vanádio
Tm|metal macio|terra rara estável mais rara, lasers infravermelhos, cirurgia a laser, fósforos
Yb|metal macio|amplificadores de sinal em fibra óptica, lasers infravermelhos de fibra, ligas de aço inoxidável
Lu|metal macio, terra rara mais densa e dura|medicina fotodinâmica contra câncer ativada por luz
Hf|metal resistente à corrosão, absorve nêutrons|barras de controle de reatores nucleares em submarinos, eletrodos de tochas de plasma
Ta|metal de alto ponto de fusão e resistente à corrosão|vidraria de laboratório, ferramentas cirúrgicas, juntas artificiais, capacitores, telefones celulares
W|metal mais refratário, denso|filamentos em lâmpadas e TVs, ferramentas de corte, abrasivos, termopares
Re|metal denso de alto ponto de fusão|motores de foguete, bobinas de aquecimento, filamentos de laboratório, contatos elétricos, termopares, catalisador
Os|metal duro, de alto ponto de fusão e resistente à corrosão, elemento mais denso junto com Ir|contatos elétricos, pontas de caneta, agulhas, pó para impressões digitais
Ir|metal duro e resistente à corrosão, elemento mais denso junto com Os|vidraria de laboratório, velas de ignição, pontas de caneta, agulhas
Pt|metal denso e resistente à corrosão|vidraria de laboratório, velas de ignição, catalisador, controle de poluição, craqueamento de petróleo, processamento de gorduras
Au|elemento mais maleável, metal colorido denso que não mancha|joias, moedas, folha de ouro ultrafina, contatos elétricos
Hg|metal líquido, tóxico|termômetros, barômetros, termostatos, lâmpadas de rua, lâmpadas fluorescentes, odontologia
Ac|radioativo, de vida longa|pequenos traços na natureza, medicina contra câncer, fonte de nêutrons, resíduos radioativos
Th|radioativo, de vida longa|elemento radioativo mais abundante, combustível de reator nuclear, camisas de lampião a gás, filamentos de tungstênio, resíduos radioativos
Pa|radioativo, de vida longa|pequenos traços na natureza, sem usos, resíduos radioativos
U|radioativo, de vida longa, denso|combustível de reator nuclear, armas nucleares, contrapesos, munições perfurantes
Np|radioativo, de vida longa|pequenos traços na natureza, detectores de nêutrons, dosímetros, possível uso em armas nucleares, resíduos radioativos
Pu|radioativo, de vida longa|pequenos traços na natureza, combustível de reator nuclear, energia para espaçonaves, armas nucleares
Am|radioativo, de vida longa|nunca encontrado na natureza, detectores de fumaça, medidores de espessura de chapas, resíduos radioativos
Cm|radioativo, de vida longa|nunca encontrado na natureza, instrumentos científicos, analisadores de minerais, resíduos radioativos
Bk|radioativo, de vida longa|nunca encontrado na natureza, sem usos, resíduos radioativos
Cf|radioativo, de vida longa|nunca encontrado na natureza, instrumentos científicos, analisadores de minerais, resíduos radioativos
Es|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Fm|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Md|radioativo, de vida curta|nunca encontrado na natureza, sem usos
No|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Lr|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Rf|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Db|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Sg|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Bh|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Hs|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Mt|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Ds|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Rg|radioativo, de vida curta|nunca encontrado na natureza, sem usos
Cn|radioativo, de vida curta|nunca encontrado na natureza, sem usos
`.trim().split('\n').map(row => {
      const [symbol, desc, uses] = row.split('|');
      return [symbol, {desc, uses}];
    })));

    const familyMeta = {
      all: {label:'Todas as famílias', color:'#39476d'},
      g1:{label:'Grupo 1 / 1A', name:'Metais alcalinos + H', color:getCss('--family-g1')},
      g2:{label:'Grupo 2 / 2A', name:'Metais alcalino-terrosos', color:getCss('--family-g2')},
      g13:{label:'Grupo 13 / 3A', name:'Grupo do boro', color:getCss('--family-g13')},
      g14:{label:'Grupo 14 / 4A', name:'Grupo do carbono', color:getCss('--family-g14')},
      g15:{label:'Grupo 15 / 5A', name:'Grupo do nitrogênio', color:getCss('--family-g15')},
      g16:{label:'Grupo 16 / 6A', name:'Calcogênios', color:getCss('--family-g16')},
      g17:{label:'Grupo 17 / 7A', name:'Halogênios', color:getCss('--family-g17')},
      g18:{label:'Grupo 18 / 8A', name:'Gases nobres', color:getCss('--family-g18')},
      d:{label:'Bloco d', name:'Metais de transição', color:getCss('--family-d')},
      f:{label:'Bloco f', name:'Transição interna', color:getCss('--family-f')},
    };

    const typeMeta = {
      metal:{label:'Metal', color:getCss('--type-metal')},
      ametal:{label:'Ametal', color:getCss('--type-ametal')},
      semimetal:{label:'Semimetal', color:getCss('--type-semimetal')},
      noble:{label:'Gás nobre', color:getCss('--type-noble')},
      synthetic:{label:'Sintético/superpesado', color:getCss('--type-synthetic')}
    };

    const importanceMeta = {
      alta:{label:'Prioridade alta', color:getCss('--hi')},
      média:{label:'Prioridade média', color:getCss('--med')},
      baixa:{label:'Prioridade baixa', color:getCss('--low')}
    };

    const electronMeta = {
      s:{label:'Bloco s', color:getCss('--electron-s')},
      p:{label:'Bloco p', color:getCss('--electron-p')},
      d:{label:'Bloco d', color:getCss('--electron-d')},
      f:{label:'Bloco f', color:getCss('--electron-f')}
    };

    const categoryMeta = {
      alkali:{label:'Metais alcalinos', short:'Alcalino', compact:'Alcalinos', color:getCss('--cat-alkali')},
      alkaline:{label:'Metais alcalinoterrosos', short:'Alcalino-terroso', compact:'Alcalino-ter.', color:getCss('--cat-alkaline')},
      transition:{label:'Metais de transição', short:'Transição', compact:'Transição', color:getCss('--cat-transition')},
      postTransition:{label:'Metais pós-transição', short:'Pós-transição', compact:'Pós-trans.', color:getCss('--cat-post-transition')},
      metalloid:{label:'Semimetais', short:'Semimetal', compact:'Semimetais', color:getCss('--cat-metalloid')},
      polyNonmetal:{label:'Não metais poliatômicos', short:'Ametal poliatômico', compact:'Ametais poli.', color:getCss('--cat-poly-nonmetal')},
      diatomicNonmetal:{label:'Não metais diatômicos', short:'Ametal diatômico', compact:'Ametais diat.', color:getCss('--cat-diatomic')},
      nobleGas:{label:'Gases nobres', short:'Gás nobre', compact:'Nobres', color:getCss('--cat-noble')},
      lanthanide:{label:'Lantanídeos', short:'Lantanídeo', compact:'Lantanídeos', color:getCss('--cat-lanthanide')},
      actinide:{label:'Actinídeos', short:'Actinídeo', compact:'Actinídeos', color:getCss('--cat-actinide')},
      unknown:{label:'Propriedades químicas desconhecidas', short:'Desconhecidas', compact:'Desconhec.', color:getCss('--cat-unknown')},
    };
    const categoryGuideMeta = {
      alkali:{title:'Metais alcalinos', text:'Grupo 1 sem contar o hidrogênio como metal típico. Muito reativos, formam íons +1 com facilidade e reagem fortemente com água.'},
      alkaline:{title:'Metais alcalinoterrosos', text:'Grupo 2. Menos reativos que os alcalinos, mas ainda bem metálicos. Em geral formam íons +2 e aparecem bastante em minerais e estruturas biológicas.'},
      transition:{title:'Metais de transição', text:'Bloco d. Costumam ter vários estados de oxidação, formar complexos coloridos e aparecer em ligas, catálise e condução elétrica.'},
      postTransition:{title:'Metais pós-transição', text:'Metais do bloco p com comportamento mais “mole” e menos típico que o bloco d. Muitos são densos, maleáveis e importantes em ligas e aplicações industriais.'},
      metalloid:{title:'Semimetais', text:'Ficam na faixa de transição entre metais e ametais. Têm propriedades intermediárias e são muito relevantes em semicondutores e materiais eletrônicos.'},
      polyNonmetal:{title:'Não metais poliatômicos', text:'Ametais que não aparecem como moléculas diatômicas simples em sua forma elementar mais comum. São centrais em química orgânica, biológica e ambiental.'},
      diatomicNonmetal:{title:'Não metais diatômicos', text:'Elementos que costumam aparecer como X₂ na forma simples: H₂, N₂, O₂ e os halogênios clássicos. São muito cobrados em reatividade e ligações.'},
      nobleGas:{title:'Gases nobres', text:'Grupo 18. Têm baixa reatividade em condições usuais e completam bem a ideia de camada de valência estável.'},
      lanthanide:{title:'Lantanídeos', text:'Série do bloco f do período 6. São terras raras importantes em ímãs, fósforos, lasers e materiais avançados.'},
      actinide:{title:'Actinídeos', text:'Série do bloco f do período 7. Muitos são radioativos e aparecem em energia nuclear, pesquisa e aplicações altamente especializadas.'},
      unknown:{title:'Propriedades químicas desconhecidas', text:'Elementos superpesados em que os dados experimentais ainda são muito limitados. A posição sugere comportamento aproximado, mas a química observada ainda é restrita.'}
    };

    const groupOrder = [1,2,13,14,15,16,17,18];
    const fullGroupOrder = Array.from({length:18}, (_,i)=>i+1);
    const periodOrder = [1,2,3,4,5,6,7];
    const fullRowOrder = [1,2,3,4,5,6,7,8,9];
    const legacyGroupLabels = {
      1:'IA',2:'IIA',3:'IIIB',4:'IVB',5:'VB',6:'VIB',7:'VIIB',8:'VIIIB',9:'VIIIB',10:'VIIIB',11:'IB',12:'IIB',13:'IIIA',14:'IVA',15:'VA',16:'VIA',17:'VIIA',18:'VIIIA'
    };
    const shellLabels = {1:'K',2:'L',3:'M',4:'N',5:'O',6:'P',7:'Q',8:'Lant.',9:'Act.'};
    const dockLayout = {
      minWidth:1140,
      preview:{column:4, span:4, row:2, rowSpan:3},
      legend:{column:9, span:4, row:2, rowSpan:3},
      stateLegend:{column:14, span:5, row:2, rowSpan:1},
      guideColumn:4
    };

    const state = {
      tableScope:'full',
      colorMode:'category',
      familyFilter:'all',
      categoryFilter:'all',
      typeFilter:'all',
      blockFilter:'all',
      zoom:1,
      showNames:true,
      favoritesOnly:false,
      search:'',
      previewSymbol:'H',
      selected:null,
      compare:[],
      favorites:JSON.parse(localStorage.getItem('ptable-favorites') || '[]'),
      quiz:{answer:null,hits:0,misses:0}
    };

    const periodicGrid = document.getElementById('periodicGrid');
    const quizGrid = document.getElementById('quizGrid');
    const familyFilters = document.getElementById('familyFilters');
    const legend = document.getElementById('legend');
    const visibleCount = document.getElementById('visibleCount');
    const favoriteCount = document.getElementById('favoriteCount');
    const compareCount = document.getElementById('compareCount');
    const modeLabel = document.getElementById('modeLabel');
    const tableWrap = document.querySelector('#tab-explorer .table-wrap');
    const quizWrap = document.querySelector('.quiz-wrap');
    const tablePreviewMobile = document.getElementById('tablePreviewMobile');

    function getCss(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

    function isRadioactiveAtomicNumber(n){
      return radioactiveAtomicNumbers.has(n);
    }

    function detectPhysicalState(value){
      const state = String(value || '').toLowerCase();
      if(state.includes('líqu')) return 'liquid';
      if(state.includes('gás')) return 'gas';
      if(state.includes('sólid')) return 'solid';
      return 'unknown';
    }

    function expandElectronConfig(config){
      if(!config) return '';
      let expanded = String(config)
        .replace(/\([^)]*\)/g, '')
        .replace(/\?/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      let previous = '';
      while(expanded !== previous){
        previous = expanded;
        expanded = expanded.replace(/\[([A-Za-z]{1,2})\]/g, (_, symbol) => `${nobleGasConfig[symbol] || ''} `);
        expanded = expanded.replace(/\s+/g, ' ').trim();
      }
      return expanded;
    }

    function getShellDistribution(config){
      const expanded = expandElectronConfig(config);
      if(!expanded) return '';
      const shells = new Map();
      (expanded.match(/\d+[spdf]\d+/g) || []).forEach(token => {
        const match = token.match(/^(\d+)[spdf](\d+)$/);
        if(!match) return;
        const shell = Number(match[1]);
        const electrons = Number(match[2]);
        shells.set(shell, (shells.get(shell) || 0) + electrons);
      });
      return Array.from(shells.entries())
        .sort((a,b) => a[0] - b[0])
        .map(([, count]) => count)
        .join(' ');
    }

    function physicalStateLabel(el){
      return ({
        solid:'sólido',
        liquid:'líquido',
        gas:'gasoso',
        unknown:'estado não definido'
      })[el.physicalState] || 'estado não definido';
    }

    function physicalStateIconClass(el){
      return `state-${el.physicalState || 'unknown'}`;
    }

    function radioactivityLabel(el){
      return el.radioactive ? 'radioativo' : 'não radioativo';
    }

    function shellValues(el){
      return (el.shellDistribution || '').split(' ').filter(Boolean);
    }

    function stateIconSvg(stateKey){
      if(stateKey === 'solid'){
        return `
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M5.2 2.3 10.4 2.3 13.3 5.1 13.3 10.5 8.1 13.6 2.8 10.5 2.8 5.1Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"></path>
            <path d="M8.1 13.6 8.1 8.2 13.3 5.1M8.1 8.2 2.8 5.1M8.1 8.2 10.9 6.5" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"></path>
          </svg>
        `;
      }
      if(stateKey === 'liquid'){
        return `
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 1.7c1.9 2.4 4.6 5.6 4.6 8.3a4.6 4.6 0 0 1-9.2 0c0-2.7 2.7-5.9 4.6-8.3Z" fill="currentColor"></path>
            <path d="M6.6 5.2c-.8 1.1-1.8 2.7-1.8 4 0 .4.1.8.2 1.1" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.1" stroke-linecap="round"></path>
          </svg>
        `;
      }
      if(stateKey === 'gas'){
        return `
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 2.2c1.5 1.5 1.5 3.3 0 4.8s-1.5 3.3 0 4.8M8 2.2c1.5 1.5 1.5 3.3 0 4.8S6.5 10.3 8 11.8M13 2.2c1.5 1.5 1.5 3.3 0 4.8s-1.5 3.3 0 4.8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>
          </svg>
        `;
      }
      return `
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 2.4 13.6 8 8 13.6 2.4 8Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"></path>
        </svg>
      `;
    }

    function radioactivityIconSvg(isRadioactive){
      if(!isRadioactive){
        return `
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="4.3" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".68"></circle>
          </svg>
        `;
      }
      return `
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="1.2" fill="currentColor"></circle>
          <path d="M8 3.1a3.2 3.2 0 0 1 2.8 1.7L8.9 6A1.4 1.4 0 0 0 8 5.7Zm-4.1 6A3.2 3.2 0 0 1 4.3 6l2.1.2a1.4 1.4 0 0 0 .5 1Zm8.2 0A3.2 3.2 0 0 1 7.2 11l1-1.9a1.4 1.4 0 0 0 1.4 0Z" fill="currentColor"></path>
          <circle cx="8" cy="8" r="4.6" fill="none" stroke="currentColor" stroke-width="1"></circle>
        </svg>
      `;
    }

    function gridMetrics(scope, forQuiz=false){
      const wrap = (forQuiz ? quizGrid : periodicGrid).parentElement;
      const availableWidth = Math.max(260, Math.floor(wrap.clientWidth || wrap.getBoundingClientRect().width || 0));
      const groups = forQuiz ? 8 : (scope === 'full' ? 18 : 8);
      const axis = clamp(Math.round(scope === 'full' ? 42 : 46), 34, 46);
      const gap = availableWidth < 520 ? 4 : 6;
      const maxTile = forQuiz ? 78 : (scope === 'full' ? 72 : 84);
      const minTile = forQuiz ? 54 : (scope === 'full' ? 44 : 72);
      const fitted = Math.floor((availableWidth - axis - (groups * gap)) / groups);
      const tile = Math.round(clamp(fitted, minTile, maxTile) * (forQuiz ? 1 : state.zoom));
      const pool = (forQuiz ? elements : currentElements()).filter(el => scope === 'full' || spElementSymbols.has(el.s));
      const maxShellLines = Math.max(1, ...pool.map(el => shellValues(el).length));
      const shellFont = Math.max(5, Math.floor(Math.min(tile * 0.16, ((tile - 18) / maxShellLines) * 0.9)));
      return {
        axis,
        gap,
        tile,
        shellFont,
        numberFont: Math.max(7, Math.floor(tile * 0.1)),
        symbolFont: Math.max(15, Math.floor(tile * 0.39)),
        nameFont: Math.max(7, Math.floor(tile * 0.105)),
        iconSize: Math.max(9, Math.floor(tile * 0.12))
      };
    }

    function applyGridMetrics(target, scope, forQuiz=false){
      const metrics = gridMetrics(scope, forQuiz);
      const groups = forQuiz ? 8 : (scope === 'full' ? 18 : 8);
      const rows = scope === 'full' ? 9 : 7;
      const fBlockSpacer = scope === 'full' && !forQuiz ? Math.max(metrics.gap * 3, Math.floor(metrics.tile * 0.26)) : 0;
      target.style.gap = `${metrics.gap}px`;
      target.style.gridTemplateColumns = `${metrics.axis}px repeat(${groups}, ${metrics.tile}px)`;
      target.style.gridTemplateRows = scope === 'full' && !forQuiz
        ? `36px repeat(7, ${metrics.tile}px) ${fBlockSpacer}px repeat(2, ${metrics.tile}px)`
        : `36px repeat(${rows}, ${metrics.tile}px)`;
      target.style.gridAutoRows = `${metrics.tile}px`;
      target.style.setProperty('--f-block-spacer', `${fBlockSpacer}px`);
      target.style.setProperty('--shell-font-size', `${metrics.shellFont}px`);
      target.style.setProperty('--tile-symbol-font-size', `${metrics.symbolFont}px`);
      target.style.setProperty('--tile-name-font-size', `${metrics.nameFont}px`);
      target.style.setProperty('--tile-num-font-size', `${metrics.numberFont}px`);
      target.style.setProperty('--tile-icon-size', `${metrics.iconSize}px`);
    }

    function gridRowPosition(scope, rowValue){
      if(scope === 'full'){
        if(rowValue === 8) return 10;
        if(rowValue === 9) return 11;
      }
      return rowValue + 1;
    }

    function saveFavorites(){ localStorage.setItem('ptable-favorites', JSON.stringify(state.favorites)); }

    function currentElements(){
      return state.tableScope === 'full'
        ? allElements
        : allElements.filter(el => spElementSymbols.has(el.s));
    }

    function familyLabel(el){
      return familyMeta[el.familyKey]?.name || familyNames[el.familyKey] || familyNames[el.block] || el.family || 'Família';
    }

    function electronegativityColor(value){
      const n = Number(value);
      if(!Number.isFinite(n)) return '#cbd5e1';
      if(n >= 3.2) return '#2563eb';
      if(n >= 2.4) return '#16a34a';
      if(n >= 1.6) return '#f59e0b';
      return '#ef4444';
    }

    function visualCategory(el){
      if(el.n >= 109) return 'unknown';
      if(el.n >= 89 && el.n <= 103) return 'actinide';
      if(el.n >= 57 && el.n <= 71) return 'lanthanide';
      if(['H','N','O','F','Cl','Br','I'].includes(el.s)) return 'diatomicNonmetal';
      if(['C','P','S','Se'].includes(el.s)) return 'polyNonmetal';
      if(['He','Ne','Ar','Kr','Xe','Rn'].includes(el.s)) return 'nobleGas';
      if(['B','Si','Ge','As','Sb','Te','At'].includes(el.s)) return 'metalloid';
      if(['Al','Ga','In','Sn','Tl','Pb','Bi','Po'].includes(el.s)) return 'postTransition';
      if(el.familyKey === 'g1') return 'alkali';
      if(el.familyKey === 'g2') return 'alkaline';
      if(el.block === 'd') return 'transition';
      return 'postTransition';
    }

    function categoryLabel(el){
      return categoryMeta[visualCategory(el)]?.label || familyLabel(el);
    }

    function colorFor(el){
      if(state.colorMode === 'category') return categoryMeta[visualCategory(el)]?.color || electronMeta[el.block].color;
      if(state.colorMode === 'family') return familyMeta[el.familyKey]?.color || electronMeta[el.block].color;
      if(state.colorMode === 'classification') return typeMeta[el.classification]?.color || typeMeta.metal.color;
      if(state.colorMode === 'electron') return electronMeta[el.block].color;
      if(state.colorMode === 'electronegativity') return electronegativityColor(el.electronegativity);
      return importanceMeta[el.importance].color;
    }

    function familyMatches(el){
      return state.familyFilter === 'all' || el.familyKey === state.familyFilter;
    }

    function categoryMatches(el){
      return state.categoryFilter === 'all' || visualCategory(el) === state.categoryFilter;
    }

    function typeMatches(el){
      if(state.typeFilter === 'all') return true;
      if(state.typeFilter === 'important') return el.priority === 3;
      return el.classification === state.typeFilter;
    }

    function blockMatches(el){
      return state.blockFilter === 'all' || el.block === state.blockFilter;
    }

    function searchMatches(el){
      const q = state.search.trim().toLowerCase();
      if(!q) return true;
      const hay = [
        el.s, el.name, el.en, el.family, familyLabel(el), categoryLabel(el), el.group, el.period, el.classification, el.block, el.n, el.electronConfig, el.shellDistribution, physicalStateLabel(el), radioactivityLabel(el)
      ].join(' ').toLowerCase();
      return hay.includes(q);
    }

    function favoriteMatches(el){
      return !state.favoritesOnly || state.favorites.includes(el.s);
    }

    function isVisible(el){
      return familyMatches(el) && categoryMatches(el) && typeMatches(el) && blockMatches(el) && searchMatches(el) && favoriteMatches(el);
    }

    function buildFamilyFilters(){
      const items = [
        {key:'all', label:'Todas'},
        {key:'g1', label:'1A'},
        {key:'g2', label:'2A'},
        {key:'d', label:'d'},
        {key:'g13', label:'13'},
        {key:'g14', label:'14'},
        {key:'g15', label:'15'},
        {key:'g16', label:'16'},
        {key:'g17', label:'17'},
        {key:'g18', label:'18'},
        {key:'f', label:'f'},
      ];
      familyFilters.innerHTML = items.map(it =>
        `<button class="small ${state.familyFilter===it.key?'active':''}" data-family="${it.key}">${it.label}</button>`
      ).join('');
      familyFilters.querySelectorAll('button').forEach(btn=>{
        btn.onclick=()=>{state.familyFilter=btn.dataset.family; render();};
      });
    }

    function shouldUseGridDocks(scope=state.tableScope){
      return scope === 'full' && (tableWrap.clientWidth || 0) >= dockLayout.minWidth;
    }

    function previewElement(){
      return allElementBySymbol[state.previewSymbol] || allElementBySymbol.H || allElements[0];
    }

    function renderPreviewDock(){
      const html = elementPreviewHtml(previewElement());
      const gridDock = document.getElementById('gridHoverDock');
      if(gridDock) gridDock.innerHTML = html;
      if(tablePreviewMobile){
        tablePreviewMobile.innerHTML = shouldUseGridDocks() ? '' : `<div class="hover-dock hover-dock-mobile">${html}</div>`;
      }
    }

    function legendDockHtml(compact=false){
      return Object.entries(categoryMeta).map(([key, meta]) => `
        <div class="${compact ? 'legend-dock-item' : 'legend-item'}" data-category-item="${key}" title="${meta.label}" ${compact ? `style="--legend-dock-color:${meta.color}"` : ''}>
          <input type="checkbox" ${state.categoryFilter === key ? 'checked' : ''} data-category-toggle="${key}" aria-label="Filtrar ${meta.label}">
          <span class="swatch" style="background:${meta.color}"></span>
          <a href="#category-${key}" data-category-link="${key}" title="${meta.label}">${compact ? (meta.compact || meta.short || meta.label) : meta.label}</a>
        </div>
      `).join('');
    }

    function bindCategoryLegend(root){
      if(!root) return;
      root.querySelectorAll('[data-category-toggle]').forEach(input => {
        input.onchange = (e) => {
          const key = e.currentTarget.dataset.categoryToggle;
          state.categoryFilter = e.currentTarget.checked ? key : 'all';
          render();
        };
      });
      root.querySelectorAll('[data-category-link]').forEach(link => {
        link.onclick = (e) => {
          e.preventDefault();
          state.categoryFilter = link.dataset.categoryLink;
          render();
          setTab('families');
          document.getElementById(`category-${link.dataset.categoryLink}`)?.scrollIntoView({behavior:'smooth', block:'start'});
        };
      });
    }

    function renderLegend(){
      if(state.colorMode==='category'){
        modeLabel.textContent = 'Classes';
      }else if(state.colorMode==='family'){
        modeLabel.textContent = 'Famílias';
      }else if(state.colorMode==='classification'){
        modeLabel.textContent = 'Classificação';
      }else if(state.colorMode==='electron'){
        modeLabel.textContent = 'Distribuição';
      }else if(state.colorMode==='electronegativity'){
        modeLabel.textContent = 'Eletroneg.';
      }else{
        modeLabel.textContent = 'Prioridade';
      }
      if(state.colorMode === 'category'){
        legend.innerHTML = legendDockHtml(false);
        bindCategoryLegend(legend);
      }else{
        let items;
        if(state.colorMode==='family'){
          items = Object.entries(familyMeta).filter(([k])=>k!=='all').map(([,v])=>({label:v.name, color:v.color}));
        }else if(state.colorMode==='classification'){
          items = Object.values(typeMeta).map(v=>({label:v.label,color:v.color}));
        }else if(state.colorMode==='electron'){
          items = Object.values(electronMeta).map(v=>({label:v.label,color:v.color}));
        }else if(state.colorMode==='electronegativity'){
          items = [
            {label:'Muito alta (≥ 3,2)', color:'#2563eb'},
            {label:'Alta (2,4-3,19)', color:'#16a34a'},
            {label:'Média (1,6-2,39)', color:'#f59e0b'},
            {label:'Baixa (< 1,6)', color:'#ef4444'},
            {label:'Sem valor local', color:'#cbd5e1'}
          ];
        }else{
          items = Object.values(importanceMeta).map(v=>({label:v.label,color:v.color}));
        }
        legend.innerHTML = items.map(it=>`<div class="legend-item"><span class="swatch" style="background:${it.color}"></span>${it.label}</div>`).join('');
      }
      legend.style.display = shouldUseGridDocks() && state.colorMode === 'category' ? 'none' : '';
    }

    function tileContent(el){
      const shells = shellValues(el);
      const stateTitle = physicalStateLabel(el);
      const radioTitle = radioactivityLabel(el);
      return `
        <div>
          <div class="topline">
            <span class="num">${el.n}</span>
            <span class="flags">
              <span class="flag ${physicalStateIconClass(el)}" title="${stateTitle}" aria-label="${stateTitle}">${stateIconSvg(el.physicalState)}</span>
              <span class="flag ${el.radioactive ? 'radio-on' : 'radio-off'}" title="${radioTitle}" aria-label="${radioTitle}">${radioactivityIconSvg(el.radioactive)}</span>
            </span>
          </div>
          <div class="main">
            <div class="text">
              <div class="symbol">${el.s}</div>
              ${state.showNames ? `<div class="name" title="${escapeHtml(el.name)}">${el.name}</div>` : ''}
            </div>
            <div class="shells" aria-label="Elétrons por camada">
              ${shells.map(value => `<span>${value}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function createTile(el, {forQuiz=false}={}){
      const btn = document.createElement('button');
      btn.className = 'el';
      const accent = colorFor(el);
      btn.style.setProperty('--tile-accent', accent);
      btn.style.setProperty('--tile-bg', accent);
      btn.style.borderColor = `color-mix(in srgb, ${accent} 62%, rgba(255,255,255,.34))`;
      btn.innerHTML = tileContent(el);
      if(state.selected === el.s && !forQuiz) btn.classList.add('selected');
      if(state.compare.includes(el.s)) btn.classList.add('compare');
      if(state.favorites.includes(el.s)) btn.classList.add('favorite');
      btn.dataset.symbol = el.s;
      btn.dataset.preview = 'element';
      btn.dataset.tip = `${el.name} (${el.s}) • grupo ${el.group} • período ${el.period} • ${categoryLabel(el)}`;
      btn.onmouseenter = showTooltip;
      btn.onmouseleave = hideTooltip;
      btn.onmousemove = moveTooltip;
      btn.onclick = () => {
        if(forQuiz){
          handleQuizPick(el);
        }else{
          selectElement(el.s);
        }
      };
      return btn;
    }

    function rangeMatches(symbols, searchLabels){
      if(state.blockFilter !== 'all' && state.blockFilter !== 'f') return false;
      if(state.familyFilter !== 'all' && state.familyFilter !== 'f') return false;
      const rangeElements = symbols.map(s => allElementBySymbol[s]).filter(Boolean);
      if(state.favoritesOnly && !rangeElements.some(el => state.favorites.includes(el.s))) return false;
      if(state.typeFilter !== 'all' && state.typeFilter !== 'important' && !rangeElements.some(typeMatches)) return false;
      if(state.typeFilter === 'important' && !rangeElements.some(el => el.priority === 3)) return false;
      const q = state.search.trim().toLowerCase();
      if(!q) return true;
      return searchLabels.join(' ').toLowerCase().includes(q) || rangeElements.some(searchMatches);
    }

    function createRangeTile(config){
      const btn = document.createElement('button');
      btn.className = 'el range-tile';
      const accent = categoryMeta[config.category].color;
      btn.style.setProperty('--tile-accent', accent);
      btn.style.setProperty('--tile-bg', accent);
      btn.style.borderColor = `color-mix(in srgb, ${accent} 62%, rgba(255,255,255,.34))`;
      btn.innerHTML = `
        <div>
          <div class="main">
            <div class="text">
              <div class="symbol">${config.symbol}</div>
              ${state.showNames ? `<div class="name">${config.name}</div>` : ''}
            </div>
            <div class="shells"></div>
          </div>
        </div>
        <div class="meta">
          <span class="num">* ${config.range}</span>
        </div>
      `;
      btn.dataset.preview = 'range';
      btn.dataset.rangeSymbol = config.symbol;
      btn.dataset.rangeName = config.name;
      btn.dataset.rangeValue = config.range;
      btn.dataset.rangeCategory = config.category;
      btn.dataset.rangeTarget = config.target;
      btn.dataset.tip = `${config.name} • ${config.range} • clique para abrir ${config.targetName}`;
      btn.onmouseenter = showTooltip;
      btn.onmouseleave = hideTooltip;
      btn.onmousemove = moveTooltip;
      btn.onclick = () => selectElement(config.target);
      return btn;
    }

    function createSeriesGuide(config){
      const guide = document.createElement('div');
      guide.className = 'series-guide';
      guide.innerHTML = `
        <svg class="series-guide-art" viewBox="0 0 100 100" aria-hidden="true">
          <circle class="series-guide-start" cx="24" cy="18" r="4"></circle>
          <path class="series-guide-line" d="M24 24 V68 Q24 80 36 80 H74"></path>
          <path class="series-guide-arrow" d="M66 72 74 80 66 88"></path>
        </svg>
        <div class="series-guide-label">${config.range}</div>
      `;
      guide.onmouseenter = () => {
        state.previewSymbol = config.target;
        renderPreviewDock();
      };
      guide.onmouseleave = () => {
        state.previewSymbol = 'H';
        renderPreviewDock();
      };
      return guide;
    }

    function createLegendDock(){
      const div = document.createElement('div');
      div.className = 'grid-dock legend-dock';
      div.id = 'gridLegendDock';
      div.innerHTML = `<div class="legend-dock-panel">${legendDockHtml(true)}</div>`;
      bindCategoryLegend(div);
      return div;
    }

    function createHoverDock(){
      const div = document.createElement('div');
      div.className = 'grid-dock hover-dock';
      div.id = 'gridHoverDock';
      return div;
    }

    function createStateLegendDock(){
      const div = document.createElement('div');
      div.className = 'grid-dock state-dock';
      div.innerHTML = `
        <div class="state-dock-item">
          <span class="state-dock-icon">${stateIconSvg('solid')}</span>
          <span>Sólido</span>
        </div>
        <div class="state-dock-item">
          <span class="state-dock-icon">${stateIconSvg('liquid')}</span>
          <span>Líquido</span>
        </div>
        <div class="state-dock-item">
          <span class="state-dock-icon">${stateIconSvg('gas')}</span>
          <span>Gasoso</span>
        </div>
        <div class="state-dock-item">
          <span class="state-dock-icon">${radioactivityIconSvg(true)}</span>
          <span>Radioativo</span>
        </div>
      `;
      return div;
    }

    function placeCell(cell, column, row){
      cell.style.gridColumn = column;
      cell.style.gridRow = row;
      return cell;
    }

    function renderGrid(target, forQuiz=false){
      target.innerHTML = '';
      const scope = forQuiz ? 'sp' : state.tableScope;
      target.classList.toggle('scope-sp', scope === 'sp');
      target.classList.toggle('scope-full', scope === 'full');
      applyGridMetrics(target, scope, forQuiz);
      const groups = scope === 'full' ? fullGroupOrder : groupOrder;
      const rows = scope === 'full' ? fullRowOrder : periodOrder;
      target.appendChild(placeCell(axisCell('', true), 1, 1));
      groups.forEach((g, index)=>{
        const title = `${g}`;
        const subtitle = legacyGroupLabels[g] || (scope === 'full' ? '' : (familyMeta['g'+g]?.name || ''));
        target.appendChild(placeCell(axisCell(title, false, subtitle), index + 2, 1));
      });

      rows.forEach(p=>{
        const label = p === 8 ? 'Ln' : p === 9 ? 'An' : `${p}`;
        const subtitle = shellLabels[p] || '';
        target.appendChild(placeCell(periodCell(label, subtitle), 1, gridRowPosition(scope, p)));
      });

      if(scope === 'full' && !forQuiz){
        if(shouldUseGridDocks(scope)){
          const hoverDock = placeCell(createHoverDock(), dockLayout.preview.column, dockLayout.preview.row);
          hoverDock.style.gridColumn = `${dockLayout.preview.column} / span ${dockLayout.preview.span}`;
          hoverDock.style.gridRow = `${dockLayout.preview.row} / span ${dockLayout.preview.rowSpan}`;
          target.appendChild(hoverDock);

          const legendDock = placeCell(createLegendDock(), dockLayout.legend.column, dockLayout.legend.row);
          legendDock.style.gridColumn = `${dockLayout.legend.column} / span ${dockLayout.legend.span}`;
          legendDock.style.gridRow = `${dockLayout.legend.row} / span ${dockLayout.legend.rowSpan}`;
          target.appendChild(legendDock);

          const stateDock = placeCell(createStateLegendDock(), dockLayout.stateLegend.column, dockLayout.stateLegend.row);
          stateDock.style.gridColumn = `${dockLayout.stateLegend.column} / span ${dockLayout.stateLegend.span}`;
          stateDock.style.gridRow = `${dockLayout.stateLegend.row} / span ${dockLayout.stateLegend.rowSpan}`;
          target.appendChild(stateDock);
        }
        target.appendChild(placeCell(createSeriesGuide({range:'57-71', target:'La'}), dockLayout.guideColumn, gridRowPosition(scope, 6)));
        target.appendChild(placeCell(createSeriesGuide({range:'89-103', target:'Ac'}), dockLayout.guideColumn, gridRowPosition(scope, 7)));
      }

      const pool = forQuiz ? allElements.filter(el => spElementSymbols.has(el.s)) : currentElements().filter(isVisible);
      pool.forEach(el=>{
        const column = scope === 'full' ? el.col + 1 : groupOrder.indexOf(el.group) + 2;
        const rowIndex = scope === 'full' ? rows.indexOf(el.row) : rows.indexOf(el.period);
        if(column < 2 || rowIndex < 0) return;
        target.appendChild(placeCell(createTile(el, {forQuiz}), column, gridRowPosition(scope, scope === 'full' ? el.row : el.period)));
      });
    }

    function axisCell(label, isPeriod=false, subtitle=''){
      const div = document.createElement('div');
      div.className = isPeriod ? 'axis-period' : 'axis';
      div.innerHTML = subtitle ? `<div><div>${label}</div><small>${subtitle}</small></div>` : `<div>${label}</div>`;
      return div;
    }

    function periodCell(label, subtitle=''){
      const div = document.createElement('div');
      div.className = 'axis-period';
      div.innerHTML = subtitle ? `<div><div>${label}</div><small>${subtitle}</small></div>` : `<div>${label}</div>`;
      return div;
    }

    function selectElement(symbol){
      hideTooltip();
      state.selected = symbol;
      const el = allElementBySymbol[symbol];
      render();
      renderDrawer(el);
    }

    function renderDrawer(el){
      const popover = document.getElementById('elementPopover');
      const empty = document.getElementById('drawerEmpty');
      const content = document.getElementById('drawerContent');
      if(!el){
        popover.classList.remove('open');
        empty.style.display='block';
        content.classList.remove('active');
        return;
      }
      popover.classList.add('open');
      empty.style.display='none';
      content.classList.add('active');

      document.getElementById('drawerTag1').textContent = `${el.s} • ${el.n}`;
      document.getElementById('drawerTag2').textContent = `${el.block.toUpperCase()} • grupo ${el.group}`;
      document.getElementById('drawerTag3').textContent = familyLabel(el);
      document.getElementById('drawerTitle').textContent = `${el.name} (${el.s})`;
      document.getElementById('drawerSubtitle').textContent = `${describeClassification(el)} • período ${el.period} • ${el.state}`;
      document.getElementById('memoryNote').textContent = el.note;
      document.getElementById('storyText').textContent = el.story;

      document.getElementById('favoriteBtn').textContent = state.favorites.includes(el.s) ? '★ Favorito' : '☆ Favoritar';
      document.getElementById('compareBtn').textContent = state.compare.includes(el.s) ? '⇄ Na comparação' : '⇄ Comparar';
      document.getElementById('copyBtn').onclick = () => {
        navigator.clipboard.writeText(el.s).then(()=>toast('Símbolo copiado', `${el.s} foi copiado para a área de transferência.`));
      };
      document.getElementById('favoriteBtn').onclick = () => toggleFavorite(el.s);
      document.getElementById('compareBtn').onclick = () => toggleCompare(el.s);

      const info = [
        ['Número atômico', el.n],
        ['Família', familyLabel(el)],
        ['Classificação', describeClassification(el)],
        ['Bloco', el.block.toUpperCase()],
        ['Grupo', el.group],
        ['Período', el.period],
        ['Configuração eletrônica', el.electronConfig || 'Sem dado local'],
        ['Elétrons por camada', el.shellDistribution || 'Sem dado local'],
        ['Eletronegatividade', el.electronegativity || 'Sem valor local'],
        ['Estado físico', physicalStateLabel(el)],
        ['Radioatividade', radioactivityLabel(el)],
        ['Valência (regra escolar)', el.valence],
        ['Prioridade de estudo', importanceMeta[el.importance].label],
      ];
      document.getElementById('infoGrid').innerHTML = info.map(([k,v]) => `
        <div class="info-card">
          <div class="k">${k}</div>
          <div class="v">${v}</div>
        </div>
      `).join('');

      const pt = el.wikiTitle || el.name;
      document.getElementById('wikiLink').href = `https://pt.wikipedia.org/wiki/${encodeURIComponent(pt)}`;
      document.getElementById('youtubeLink').href = `https://www.youtube.com/results?search_query=${encodeURIComponent(el.name + ' química elemento')}`;

      renderUsageSummary(el);
      renderCompare();
    }

    function describeClassification(el){
      if(el.classification==='noble') return 'gás nobre';
      if(el.classification==='synthetic') return 'superpesado / muito raro';
      return el.classification;
    }

    function renderElementCard(el){
      const mediaBox = document.getElementById('mediaBox');
      mediaBox.style.setProperty('--tile-accent', colorFor(el));
      const shells = shellValues(el);
      mediaBox.innerHTML = `
        <div class="symbol-mark">
          <div class="symbol-top">
            <div class="atomic-number">${el.n}</div>
            <div class="symbol-icons">
              <span class="flag">${stateIconSvg(el.physicalState)}</span>
              <span class="flag">${radioactivityIconSvg(el.radioactive)}</span>
            </div>
          </div>
          <div class="symbol-main">
            <div>
              <div class="symbol">${el.s}</div>
              <div class="element-name">${el.name}</div>
            </div>
            <div class="symbol-shells">${shells.map(v=>`<span>${v}</span>`).join('')}</div>
          </div>
        </div>
        <div class="symbol-card-details">
          <div class="headline">${familyLabel(el)}</div>
          <div class="line">${describeClassification(el)} • bloco ${el.block.toUpperCase()} • período ${el.period} • grupo ${el.group}</div>
          <div class="line">Configuração: ${el.electronConfig || 'sem dado local'}</div>
          <div class="line">Camadas: ${el.shellDistribution || 'sem dado local'} • ${physicalStateLabel(el)} • ${radioactivityLabel(el)}</div>
          <div class="line">Eletronegatividade: ${el.electronegativity || 'sem valor local'}</div>
        </div>
      `;
    }

    function renderUsageSummary(el){
      const summary = document.getElementById('usageSummary');
      const note = usageNotes[el.s];
      renderElementCard(el);
      if(!note){
        summary.innerHTML = `
          <p><strong>Descrição:</strong> ${describeClassification(el)} do bloco ${el.block.toUpperCase()}, período ${el.period}, grupo ${el.group}.</p>
          <p><strong>Usos e ocorrências:</strong> descrição local indisponível para este elemento. A configuração eletrônica é ${el.electronConfig || 'indisponível'}.</p>
        `;
        return;
      }
      summary.innerHTML = `
        <p><strong>Descrição:</strong> ${note.desc}</p>
        <p><strong>Usos e ocorrências:</strong> ${note.uses}</p>
      `;
    }

    function toggleFavorite(symbol){
      if(state.favorites.includes(symbol)){
        state.favorites = state.favorites.filter(s=>s!==symbol);
      }else{
        state.favorites.push(symbol);
      }
      saveFavorites();
      render();
      renderDrawer(allElementBySymbol[state.selected]);
    }

    function toggleCompare(symbol){
      if(state.compare.includes(symbol)){
        state.compare = state.compare.filter(s=>s!==symbol);
      }else{
        if(state.compare.length >= 2) state.compare.shift();
        state.compare.push(symbol);
      }
      render();
      renderCompare();
    }

    function renderCompare(){
      compareCount.textContent = state.compare.length;
      const box = document.getElementById('compareBox');
      const grid = document.getElementById('compareGrid');
      if(state.compare.length < 2){
        box.classList.remove('active');
        grid.innerHTML = '';
        return;
      }
      const [a,b] = state.compare.map(s=>allElementBySymbol[s]);
      box.classList.add('active');
      const rows = [
        ['Elemento', `${a.name} (${a.s})`, `${b.name} (${b.s})`],
        ['Número atômico', a.n, b.n],
        ['Família', familyLabel(a), familyLabel(b)],
        ['Classificação', describeClassification(a), describeClassification(b)],
        ['Bloco', a.block.toUpperCase(), b.block.toUpperCase()],
        ['Grupo', a.group, b.group],
        ['Período', a.period, b.period],
        ['Configuração', a.electronConfig || '-', b.electronConfig || '-'],
        ['Camadas', a.shellDistribution || '-', b.shellDistribution || '-'],
        ['Eletronegatividade', a.electronegativity || '-', b.electronegativity || '-'],
        ['Estado', a.state, b.state],
        ['Radioatividade', radioactivityLabel(a), radioactivityLabel(b)],
        ['Prioridade', importanceMeta[a.importance].label, importanceMeta[b.importance].label],
      ];
      grid.innerHTML = rows.flatMap((row, idx)=> row.map((cell, i)=> `<div ${idx===0 && i>0 ? `style="font-weight:800"`:''}>${cell}</div>`)).join('');
    }

    function clamp(n, min=0, max=1){
      return Math.max(min, Math.min(max, n));
    }

    function hexToRgb(hex){
      const value = hex.replace('#','');
      return [
        parseInt(value.slice(0,2), 16),
        parseInt(value.slice(2,4), 16),
        parseInt(value.slice(4,6), 16)
      ];
    }

    function rgbToHex(rgb){
      return `#${rgb.map(v => Math.round(v).toString(16).padStart(2, '0')).join('')}`;
    }

    function mixHex(a, b, t){
      const ca = hexToRgb(a);
      const cb = hexToRgb(b);
      return rgbToHex(ca.map((v, i) => v + (cb[i] - v) * t));
    }

    function rampColor(score, stops){
      const t = clamp(score);
      const scaled = t * (stops.length - 1);
      const index = Math.min(Math.floor(scaled), stops.length - 2);
      return mixHex(stops[index], stops[index + 1], scaled - index);
    }

    function trendScore(el, kind){
      const row = (el.row - 1) / 8;
      const col = (el.col - 1) / 17;
      if(kind === 'radius' || kind === 'metallic') return clamp((row + (1 - col)) / 2);
      if(kind === 'ionization') return clamp(((1 - row) + col) / 2);
      if(kind === 'electronegativity'){
        if(el.electronegativity === '') return null;
        const value = Number(el.electronegativity);
        return Number.isFinite(value) ? clamp((value - 0.7) / (3.98 - 0.7)) : null;
      }
      return 0;
    }

    function trendArrowSvg(direction, id, color){
      const marker = `trendArrow-${id}`;
      const main = direction === 'upRight' ? 'M16 82 L84 18' : 'M84 18 L16 82';
      const helperA = direction === 'upRight' ? 'M16 82 L76 82' : 'M84 18 L24 18';
      const helperB = direction === 'upRight' ? 'M16 82 L16 24' : 'M84 18 L84 76';
      return `
        <svg class="trend-arrows" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="${marker}" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 Z" fill="${color}"></path>
            </marker>
          </defs>
          <path d="${helperA}" stroke="${color}" stroke-width="3" stroke-linecap="round" opacity=".38" fill="none" marker-end="url(#${marker})"></path>
          <path d="${helperB}" stroke="${color}" stroke-width="3" stroke-linecap="round" opacity=".38" fill="none" marker-end="url(#${marker})"></path>
          <path d="${main}" stroke="${color}" stroke-width="4.5" stroke-linecap="round" opacity=".74" fill="none" marker-end="url(#${marker})"></path>
        </svg>
      `;
    }

    function renderTrendMap(config){
      const target = document.getElementById(config.id);
      if(!target) return;
      target.innerHTML = '';
      allElements.forEach(el => {
        const score = trendScore(el, config.kind);
        const cell = document.createElement('div');
        cell.className = `trend-cell${score === null ? ' no-value' : ''}`;
        cell.style.gridColumn = el.col;
        cell.style.gridRow = el.row;
        if(score !== null) cell.style.background = rampColor(score, config.colors);
        cell.textContent = el.s;
        cell.title = score === null
          ? `${el.name} (${el.s}) - sem valor local`
          : `${el.name} (${el.s})`;
        target.appendChild(cell);
      });
      target.insertAdjacentHTML('beforeend', trendArrowSvg(config.direction, config.id, config.arrow));
    }

    function renderTrendMaps(){
      [
        {id:'trendRadius', kind:'radius', direction:'downLeft', arrow:'#f97316', colors:['#edf2f7', '#8bd3dd', '#f97316']},
        {id:'trendElectro', kind:'electronegativity', direction:'upRight', arrow:'#2563eb', colors:['#f8fafc', '#a7f3d0', '#2563eb']},
        {id:'trendIonization', kind:'ionization', direction:'upRight', arrow:'#7c3aed', colors:['#f8fafc', '#fde68a', '#7c3aed']},
        {id:'trendMetallic', kind:'metallic', direction:'downLeft', arrow:'#f97316', colors:['#edf2f7', '#8bd3dd', '#f97316']}
      ].forEach(renderTrendMap);
    }

    function renderFamiliesTab(){
      const familyList = document.getElementById('familyList');
      const periodList = document.getElementById('periodList');
      const categoryGuideList = document.getElementById('categoryGuideList');
      const families = [
        {key:'g1', title:'Grupo 1 / 1A', note:'H é um caso especial. Do Li para baixo, pense em metais alcalinos.'},
        {key:'g2', title:'Grupo 2 / 2A', note:'Família dos alcalino-terrosos, com tendência a formar íons +2.'},
        {key:'g13', title:'Grupo 13 / 3A', note:'Começa no semimetal boro, mas inclui metais como alumínio.'},
        {key:'g14', title:'Grupo 14 / 4A', note:'Mistura forte: carbono ametal, silício/germânio semimetais, estanho/chumbo metais.'},
        {key:'g15', title:'Grupo 15 / 5A', note:'Vai de ametais como N e P até metal como Bi.'},
        {key:'g16', title:'Grupo 16 / 6A', note:'Os calcogênios trazem O e S como referências fortes para memorizar.'},
        {key:'g17', title:'Grupo 17 / 7A', note:'Halogênios: ótima coluna para decorar em sequência.'},
        {key:'g18', title:'Grupo 18 / 8A', note:'Gases nobres; He é especial por ficar aqui, apesar da configuração 1s².'},
      ];
      familyList.innerHTML = families.map(f=>{
        const seq = elements.filter(e=>e.familyKey===f.key).sort((a,b)=>a.period-b.period);
        return `
          <div class="family" data-color-swatch style="border-left-color:${familyMeta[f.key].color}">
            <h3>
              <span>${f.title}</span>
              <span class="mini-badge">${familyMeta[f.key].name}</span>
            </h3>
            <div class="muted">${f.note}</div>
            <div class="elements-inline">
              ${seq.map(e=>`<span class="pill">${e.s} — ${e.name}</span>`).join('')}
            </div>
          </div>
        `;
      }).join('');

      const periods = periodOrder.map(p=>({
        p,
        list: elements.filter(e=>e.period===p).sort((a,b)=>groupOrder.indexOf(a.group)-groupOrder.indexOf(b.group))
      }));

      periodList.innerHTML = periods.map(item=>`
        <div class="family">
          <h3><span>Período ${item.p}</span><span class="mini-badge">${item.list.length} elemento(s)</span></h3>
          <div class="elements-inline">
            ${item.list.map(e=>`<span class="pill">${e.s} — ${e.name}</span>`).join('')}
          </div>
        </div>
      `).join('');

      categoryGuideList.innerHTML = Object.entries(categoryGuideMeta).map(([key, item])=>`
        <div class="family" id="category-${key}" data-color-swatch style="border-left-color:${categoryMeta[key].color}">
          <h3>
            <span>${item.title}</span>
            <label class="mini-badge" style="cursor:pointer">
              <input type="checkbox" data-category-guide-toggle="${key}" ${state.categoryFilter === key ? 'checked' : ''} style="margin:0 6px 0 0;accent-color:#1d4ed8">
              filtrar
            </label>
          </h3>
          <div class="muted">${item.text}</div>
        </div>
      `).join('');
      categoryGuideList.querySelectorAll('[data-category-guide-toggle]').forEach(input => {
        input.onchange = (e) => {
          const key = e.currentTarget.dataset.categoryGuideToggle;
          state.categoryFilter = e.currentTarget.checked ? key : 'all';
          render();
          setTab('families');
        };
      });
    }

    function renderQuizQuestion(){
      const q = buildQuizQuestion();
      state.quiz.answer = q.answer.s;
      document.getElementById('quizPrompt').textContent = q.prompt;
      document.getElementById('quizHint').textContent = q.hint;
      renderQuizGrid();
    }

    function buildQuizQuestion(){
      const pool = elements.filter(e=>e.priority >= 2);
      const answer = pool[Math.floor(Math.random()*pool.length)];
      const type = Math.floor(Math.random()*5);

      switch(type){
        case 0:
          return {answer, prompt:`Clique em ${answer.name}`, hint:`Símbolo: ${answer.s} • família: ${familyMeta[answer.familyKey].name}`};
        case 1:
          return {answer, prompt:`Qual elemento tem símbolo ${answer.s}?`, hint:`Grupo ${answer.group} • período ${answer.period}`};
        case 2:
          return {answer, prompt:`Encontre o elemento do grupo ${answer.group} no período ${answer.period}`, hint:`Família: ${familyMeta[answer.familyKey].name}`};
        case 3:
          return {answer, prompt:`Clique no ${answer.family} do período ${answer.period}`, hint:`Símbolo inicial: ${answer.s[0]}`};
        default:
          return {answer, prompt:`Quem é o elemento de número atômico ${answer.n}?`, hint:`Está no bloco ${answer.block.toUpperCase()} e se chama... pense na sequência.`};
      }
    }

    function handleQuizPick(el){
      if(!state.quiz.answer){
        toast('Quiz sem pergunta', 'Clique em “Nova pergunta” primeiro.');
        return;
      }
      if(el.s === state.quiz.answer){
        state.quiz.hits++;
        document.getElementById('quizHits').textContent = state.quiz.hits;
        toast('Acertou!', `${el.name} (${el.s}) é a resposta correta.`);
        renderQuizQuestion();
      }else{
        state.quiz.misses++;
        document.getElementById('quizMisses').textContent = state.quiz.misses;
        const ans = elements.find(e=>e.s===state.quiz.answer);
        toast('Não foi dessa vez', `Você clicou em ${el.name}. A resposta correta era ${ans.name} (${ans.s}).`);
      }
    }

    function renderQuizGrid(){
      renderGrid(quizGrid, true);
    }

    function revealQuizAnswer(){
      if(!state.quiz.answer){ toast('Nada para revelar', 'Comece uma pergunta primeiro.'); return; }
      const ans = elements.find(e=>e.s===state.quiz.answer);
      toast('Resposta', `${ans.name} (${ans.s}) — grupo ${ans.group}, período ${ans.period}.`);
    }

    function randomVisibleElement(){
      const scoped = currentElements();
      const pool = scoped.filter(isVisible);
      return pool[Math.floor(Math.random()*pool.length)] || scoped[Math.floor(Math.random()*scoped.length)];
    }

    function render(){
      buildFamilyFilters();
      renderLegend();
      renderGrid(periodicGrid, false);
      renderPreviewDock();
      renderFamiliesTab();
      renderTrendMaps();
      favoriteCount.textContent = state.favorites.length;
      visibleCount.textContent = currentElements().filter(isVisible).length;
      compareCount.textContent = state.compare.length;

      document.getElementById('toggleNamesBtn').textContent = state.showNames ? 'Ocultar nomes' : 'Mostrar nomes';
      const toggleNamesHeroBtn = document.getElementById('toggleNamesHero');
      if(toggleNamesHeroBtn){
        toggleNamesHeroBtn.textContent = state.showNames ? 'Ocultar nomes para treinar' : 'Mostrar nomes';
      }
      document.getElementById('toggleFavoritesBtn').textContent = state.favoritesOnly ? 'Mostrar todos' : 'Só favoritos';
      document.getElementById('zoomResetBtn').textContent = `${Math.round(state.zoom * 100)}%`;
      document.getElementById('tableScope').value = state.tableScope;
      tablePreviewMobile.style.display = shouldUseGridDocks() ? 'none' : 'block';
    }

    function escapeHtml(value){
      return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        "'":'&#39;'
      }[char]));
    }

    function tooltipFact(label, value){
      return `
        <div class="tooltip-fact">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value || '-')}</strong>
        </div>
      `;
    }

    function previewTileHtml(el, footerText){
      const shells = shellValues(el);
      const stateTitle = physicalStateLabel(el);
      const radioTitle = radioactivityLabel(el);
      return `
        <div class="tooltip-element">
          <div class="preview-topline">
            <div class="preview-number">${escapeHtml(el.n)}</div>
            <div class="preview-icons">
              <span class="flag" title="${stateTitle}" aria-label="${stateTitle}">${stateIconSvg(el.physicalState)}</span>
              <span class="flag" title="${radioTitle}" aria-label="${radioTitle}">${radioactivityIconSvg(el.radioactive)}</span>
            </div>
          </div>
          <div class="preview-main">
            <div class="preview-text">
              <div class="preview-symbol">${escapeHtml(el.s)}</div>
              <div class="preview-name">${escapeHtml(el.name)}</div>
            </div>
            <div class="preview-shells" aria-label="Elétrons por camada">
              ${(shells.length ? shells : ['-']).map(value => `<span>${escapeHtml(value)}</span>`).join('')}
            </div>
          </div>
          <div class="preview-footer">${escapeHtml(footerText)}</div>
        </div>
      `;
    }

    function elementPreviewHtml(el){
      const color = colorFor(el);
      const usage = usageNotes[el.s];
      const note = usage?.desc || el.note || `${familyLabel(el)} do bloco ${el.block.toUpperCase()}.`;
      return `
        <div class="tooltip-preview" style="--preview-color:${color}">
          ${previewTileHtml(el, categoryLabel(el))}
          <div class="tooltip-body">
            <div>
              <div class="tooltip-title">${escapeHtml(el.name)} (${escapeHtml(el.s)})</div>
              <div class="tooltip-subtitle">${escapeHtml(familyLabel(el))}</div>
            </div>
            <div class="tooltip-facts">
              ${tooltipFact('Grupo', `${el.group} ${legacyGroupLabels[el.group] ? `• ${legacyGroupLabels[el.group]}` : ''}`)}
              ${tooltipFact('Período', `${el.period} ${shellLabels[el.period] ? `• ${shellLabels[el.period]}` : ''}`)}
              ${tooltipFact('Bloco', el.block.toUpperCase())}
              ${tooltipFact('Camadas', el.shellDistribution || 'sem dado')}
              ${tooltipFact('Estado', physicalStateLabel(el))}
              ${tooltipFact('Radioatividade', radioactivityLabel(el))}
              ${tooltipFact('Eletroneg.', el.electronegativity || 'sem valor')}
              ${tooltipFact('Valência', el.valence || '-')}
              <div class="tooltip-note">${escapeHtml(note)}</div>
            </div>
          </div>
        </div>
      `;
    }

    function showTooltip(ev){
      const target = ev.currentTarget;
      if(target.dataset.preview === 'range' && target.dataset.rangeTarget){
        state.previewSymbol = target.dataset.rangeTarget;
      }else if(target.dataset.symbol && allElementBySymbol[target.dataset.symbol]){
        state.previewSymbol = target.dataset.symbol;
      }else{
        return;
      }
      renderPreviewDock();
    }
    function moveTooltip(){}
    function hideTooltip(){
      state.previewSymbol = 'H';
      renderPreviewDock();
    }

    let toastTimer;
    function toast(title, msg){
      const box = document.getElementById('toast');
      box.innerHTML = `<strong>${title}</strong><div>${msg}</div>`;
      box.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(()=>box.classList.remove('show'), 2800);
    }

    document.getElementById('searchInput').addEventListener('input', e => {
      state.search = e.target.value;
      render();
    });
    document.getElementById('tableScope').addEventListener('change', e => {
      state.tableScope = e.target.value;
      if(state.tableScope === 'sp' && !['all','s','p'].includes(state.blockFilter)){
        state.blockFilter = 'all';
        document.getElementById('filterBlock').value = 'all';
      }
      render();
    });
    document.getElementById('colorMode').addEventListener('change', e => {
      state.colorMode = e.target.value;
      render();
    });
    document.getElementById('filterType').addEventListener('change', e => {
      state.typeFilter = e.target.value;
      render();
    });
    document.getElementById('filterBlock').addEventListener('change', e => {
      state.blockFilter = e.target.value;
      render();
    });
    document.getElementById('toggleNamesBtn').onclick = () => { state.showNames = !state.showNames; render(); };
    document.getElementById('toggleFavoritesBtn').onclick = () => { state.favoritesOnly = !state.favoritesOnly; render(); };
    document.getElementById('zoomOutBtn').onclick = () => { state.zoom = clamp(Number((state.zoom * 0.92).toFixed(2)), 0.72, 1.45); render(); };
    document.getElementById('zoomResetBtn').onclick = () => { state.zoom = 1; render(); };
    document.getElementById('zoomInBtn').onclick = () => { state.zoom = clamp(Number((state.zoom * 1.08).toFixed(2)), 0.72, 1.45); render(); };
    document.getElementById('clearFiltersBtn').onclick = () => {
      state.familyFilter='all'; state.categoryFilter='all'; state.typeFilter='all'; state.blockFilter='all'; state.search=''; state.favoritesOnly=false;
      document.getElementById('searchInput').value='';
      document.getElementById('filterType').value='all';
      document.getElementById('filterBlock').value='all';
      render();
    };
    document.getElementById('randomElementBtn').onclick = () => {
      const el = randomVisibleElement();
      selectElement(el.s);
      toast('Elemento aleatório', `${el.name} (${el.s}) foi aberto na ficha.`);
    };
    document.getElementById('closeDrawerBtn').onclick = () => renderDrawer(null);
    document.getElementById('elementPopover').addEventListener('click', e => {
      if(e.target.id === 'elementPopover') renderDrawer(null);
    });
    document.getElementById('clearCompareBtn').onclick = () => {
      state.compare = [];
      render();
      renderCompare();
    };

    const toggleNamesHeroBtn = document.getElementById('toggleNamesHero');
    if(toggleNamesHeroBtn){
      toggleNamesHeroBtn.onclick = () => { state.showNames = !state.showNames; render(); };
    }

    const jumpExplorerBtn = document.getElementById('jumpExplorer');
    if(jumpExplorerBtn){
      jumpExplorerBtn.onclick = () => setTab('explorer');
    }

    const startQuizQuickBtn = document.getElementById('startQuizQuick');
    if(startQuizQuickBtn){
      startQuizQuickBtn.onclick = () => { setTab('quiz'); renderQuizQuestion(); };
    }

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.onclick = () => setTab(btn.dataset.tab);
    });

    function setTab(tab){
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
      document.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active', p.id===`tab-${tab}`));
      if(tab==='quiz' && !state.quiz.answer){
        renderQuizQuestion();
      }
    }

    document.getElementById('newQuizBtn').onclick = renderQuizQuestion;
    document.getElementById('showAnswerBtn').onclick = revealQuizAnswer;
    document.getElementById('resetQuizBtn').onclick = () => {
      state.quiz.hits = 0; state.quiz.misses = 0; state.quiz.answer = null;
      document.getElementById('quizHits').textContent = '0';
      document.getElementById('quizMisses').textContent = '0';
      document.getElementById('quizPrompt').textContent = 'Clique em “Nova pergunta”';
      document.getElementById('quizHint').textContent = 'Placar zerado. Gere uma nova pergunta.';
      renderQuizGrid();
    };

    function handleGridZoom(e){
      if(!e.ctrlKey) return;
      e.preventDefault();
      state.zoom = clamp(Number((state.zoom * (e.deltaY < 0 ? 1.06 : 0.94)).toFixed(2)), 0.72, 1.45);
      render();
      if(document.getElementById('tab-quiz').classList.contains('active')) renderQuizGrid();
    }

    tableWrap.addEventListener('wheel', handleGridZoom, {passive:false});
    quizWrap.addEventListener('wheel', handleGridZoom, {passive:false});

    window.addEventListener('keydown', (e) => {
      if(e.key === '/'){
        e.preventDefault();
        document.getElementById('searchInput').focus();
      }
      if(e.key.toLowerCase() === 'q'){
        setTab('quiz');
        if(!state.quiz.answer) renderQuizQuestion();
      }
      if(e.key.toLowerCase() === 'e'){
        setTab('explorer');
      }
      if(e.key === 'Escape'){
        renderDrawer(null);
      }
    });

    let resizeRaf = 0;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        render();
        renderQuizGrid();
      });
    });

    render();
    renderQuizGrid();
