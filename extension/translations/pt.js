// https://github.com/ChristopherKlay/StadiaEnhanced/discussions/91

const TRANSLATION_PT = {
    default: 'Padrão',
    native: 'Nativo',
    hide: 'Esconder',
    show: 'Mostrar',
    total: 'Total',
    visible: 'Visível',
    hidden: 'Escondido',
    enabled: 'Ativado',
    disabled: 'Desativado',
    auto: 'Automático',
    manual: 'Manual',
    all: 'Todos',
    locked: 'Bloqueado',
    complete: 'Completo',
    incomplete: 'Incompleto',
    games: 'Jogos',
    allgames: 'Todos os Jogos',
    leavepro: 'A sair do PRO',
    bundles: 'Pacotes',
    addons: 'Suplementos',
    wishlist: 'Lista de Desejos',
    responsive: 'Responsivo',
    windowed: 'Modo Janela',
    fullscreen: 'Ecrã Completo',
    onsale: 'Em Promoção',
    prodeals: 'Promoções PRO',
    userprofile: 'Meu Perfil',
    usermedia: 'Capturas e Vídeos',
    searchbtnbase: 'Pesquisar em',
    avatarpopup: 'Novo URL para avatar (vazio para o padrão):',
    date: undefined,
    time: undefined,
    sessiontime: 'Tempo da Sessão',
    codec: 'Codec',
    resolution: 'Resolução',
    hardware: 'Hardware',
    software: 'Software',
    trafficsession: 'Tráfego da Sessão',
    trafficcurrent: 'Tráfego Atual',
    trafficaverage: 'Tráfego Médio',
    packetloss: 'Pacotes Perdidos',
    framedrop: 'Frames Perdidos',
    latency: 'Latência',
    jitter: 'Buffer de Jitter',
    decodetime: 'Tempo de Descodificação',
    compression: 'Compressão',
    bitrate: 'Bitrate',
    streammon: 'Monitor do Streaming',
    stream: 'Stream',
    network: 'Internet',
    session: 'Sessão',
    extdetail: 'Mais Detalhes',
    maxresolution: 'Resolução Máxima',
    fps: 'Fotogramas',
    testdiscl: undefined,
    datadiscl: 'Esta é a taxa máxima de fotogramas alcançada ao jogar um jogo em modo 4K (deve ser um subscritor PRO). \
                            Nos jogos com opções de resolução/taxa de fotogramas, a resolução foi escolhida. \
                            Estes dados são fornecidos por <a href="https://twitter.com/OriginaIPenguin" target="_blank">@OriginaIPenguin</a> \
                            e a base de dados completa pode ser encontrada <a href="https://linktr.ee/StadiaDatabase" target="_blank">aqui</a>.',
    noteOne: undefined,
    noteTwo: undefined,
    noteThree: '60FPS em 1080P',
    noteFour: '30FPS em 1080P',
    noteFive: 'Não é compatível com 4K',
    unsupported: undefined,
    crossfriends: undefined,
    filtersettings: undefined,
    saturation: undefined,
    contrast: undefined,
    brightness: undefined,
    sharpen: undefined,
    community: 'Comunidade',
    speedtest: 'Teste de Velocidade',
    quickaccess: 'Acesso Rápido',
    messages: 'Mensagens',
    comfeature: 'Ferramentas',
    avatar: 'Avatar',
    interface: 'Interface',
    shortcut: 'StadiaIcons',
    shortcuttitle: 'Instalar atalho para',
    shortcutdesc: 'Permite-te instalar um atalho para um jogo no teu dispositivo',
    stadiadatabase: undefined,
    stadiadatabasedesc: undefined,
    stadiahunters: undefined,
    stadiahuntersdesc: undefined,
    stadiahunterstitle: undefined,
    stadiahunterslogin: undefined,
    stadiahuntersnotfound: undefined,
    stadiahunterslevel: undefined,
    stadiahuntersworldrank: undefined,
    stadiahuntersxphover: undefined,
    gridsize: 'Tamanho da Grelha',
    griddesc: 'Muda a quantidade de jogos em cada linha na biblioteca',
    clock: 'Relógio',
    clockdesc: 'Mostra a hora atual na lista de amigos, em sobreposição no jogo, ou ambos.',
    friendslist: 'Lista de Amigos',
    igoverlay: 'Sobreposição no Jogo',
    listoverlay: 'Lista e Sobreposição',
    filter: 'Filtro de Jogos',
    filterdesc: 'Permite organizar a biblioteca de jogos, escondendo jogos. O filtro pode ser ativado/desativado através do símbolo, no canto superior direito acima dos jogos na biblioteca.',
    invitebase: 'Copiar ligação de Convite',
    inviteactive: 'Copiado!',
    gamelabel: 'Etiquetas de Jogos',
    gamelabeldesc: 'Remove as Etiquetas como por exemplo "Pro" dos jogos da página inicial.',
    dimoverlay: undefined,
    dimoverlaydesc: undefined,
    homegallery: 'Galeria do Utilizador',
    homegallerydesc: 'Esconde a área "Capturas" no fundo do ecrã inicial.',
    quickprev: 'Pré-visualização de Mensagens',
    quickprevdesc: 'Esconde a pré-visualização de mensagens na tua lista de amigos.',
    quickrep: 'Resposta Rápida',
    quickrepdesc: 'Esconde a opção de resposta rápida nas conversas.',
    offlinefriend: 'Amigos Offline',
    offlinefrienddesc: 'Esconde amigos offline na lista de amigos.',
    invisiblefriend: 'Amigos Invisíveis',
    invisiblefrienddesc: 'Esconde amigos com estado desconhecido na lista de amigos.',
    notification: 'Notificações',
    notificationdesc: 'Apresentar uma notificação quando o Stadia Enhanced é atualizado para uma nova versão ("Auto" esconde após 5 segundos, "Manual" permanece até à interação do utilizador).',
    streammode: 'Modo de Streaming',
    streammodedesc: 'Torna certos elementos (p.e. a lista de amigos) não legíveis enquanto estás a fazer streaming (via ferramentas como OBS ou Discord).',
    catprev: 'Pré-visualização da Categoria',
    catprevdesc: 'Esconde a etiqueta da categoria ao passar por cima de um jogo.',
    streammondesc: 'Ativa para iniciar o Monitor quando um jogo começa.',
    resolutiondesc: 'A resolução pretendida para stream de jogos. (1440p e 2160p utilizam o Codec VP9)',
    codecdesc: 'O Codec utilizado para stream de jogos.',
    confirmreset: 'De certeza que queres reiniciar as configurações?',
    statistics: 'Estatísticas',
    gamesfinished: 'Jogos Terminados',
    achievementsunlocked: 'Conquistas Desbloqueadas',
    totalPlayTime: 'Tempo Total de Jogo',
    splitstore: 'Dividir Listas da Loja',
    splitstoredesc: 'Divide as listas da loja em duas colunas para uma melhor visão geral.',
    inlineimage: 'Prévia de Imagem',
    inlinedesc: 'Substitui links de imagem para formatos comuns de ficheiros (jpg/gif/png) com uma prévia clicável.',
    familyelements: 'Opções de Partilha de Família',
    familyelementsdesc: 'Esconder a opção "Partilhar este jogo com a família."',
    donations: 'Doações',
    reportbug: 'Reportar problemas da extensão Stadia Enhanced',
    exportset: undefined,
    importset: undefined,
    importerror: undefined,
    resetsettings: 'Reiniciar Configurações',
}