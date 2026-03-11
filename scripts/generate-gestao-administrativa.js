const fs = require("node:fs");
const path = require("node:path");

const dataDir = path.join(process.cwd(), "data");

function question(id, statement, difficulty, options, correctOptionId) {
  return { id, statement, difficulty, options, correctOptionId };
}

function option(id, text) {
  return { id, text };
}

const lessons = [
  {
    number: 1,
    lesson: "Aula 1 - Administracao",
    shortTitle: "Administracao",
    banks: {
      Basico: [
        question("q1", "O que a administracao estuda como ciencia social?", "Facil", [option("a", "tecnicas de organizacao, analise, lideranca e controle"), option("b", "somente regras tributarias para empresas"), option("c", "apenas operacoes de compra e venda"), option("d", "exclusivamente calculos de folha de pagamento")], "a"),
        question("q2", "Segundo a apostila, a administracao deve ser relacionada apenas a empresas?", "Facil", [option("a", "sim, porque toda organizacao e uma empresa"), option("b", "nao, porque pode ser aplicada a qualquer organizacao"), option("c", "sim, desde que tenha fins lucrativos"), option("d", "nao, porque se limita ao setor publico")], "b"),
        question("q3", "Quem e apresentado como pai da Administracao Cientifica?", "Facil", [option("a", "Max Weber"), option("b", "Peter Drucker"), option("c", "Frederick Taylor"), option("d", "Henri Fayol")], "c"),
        question("q4", "Qual teoria administrativa tem Henri Fayol como principal referencia?", "Facil", [option("a", "Teoria Classica"), option("b", "Teoria da Contingencia"), option("c", "Teoria das Relacoes Humanas"), option("d", "Teoria do Desenvolvimento Organizacional")], "a"),
        question("q5", "Em que periodo a apostila destaca a grande expansao da administracao?", "Facil", [option("a", "Revolucao Industrial"), option("b", "Idade Media"), option("c", "Era Digital"), option("d", "Periodo Colonial")], "a"),
        question("q6", "Estrategia administrativa refere-se principalmente a:", "Facil", [option("a", "rotina de arquivo sem objetivos definidos"), option("b", "planos da alta administracao para alcancar resultados"), option("c", "apenas reducao imediata de custos"), option("d", "substituicao dos lideres da empresa")], "b"),
      ],
      Intermediario: [
        question("q1", "Uma ONG precisa organizar pessoas e recursos para atingir objetivos comuns. Qual conceito da apostila se aplica melhor?", "Medio", [option("a", "administracao como ciencia aplicavel a organizacoes em geral"), option("b", "contabilidade limitada ao controle fiscal"), option("c", "marketing focado em promocao"), option("d", "burocracia como ausencia de regras")], "a"),
        question("q2", "Ao padronizar tarefas para evitar desperdicio de tempo e esforco, a empresa se aproxima de qual ideia?", "Medio", [option("a", "teoria das relacoes humanas"), option("b", "administracao cientifica"), option("c", "teoria contingencial"), option("d", "arquivo permanente")], "b"),
        question("q3", "Qual principio de Fayol e respeitado quando cada funcionario recebe ordens de apenas um chefe?", "Medio", [option("a", "equidade"), option("b", "unidade de direcao"), option("c", "unidade de comando"), option("d", "centralizacao")], "c"),
        question("q4", "A teoria que destaca a organizacao como sistema aberto, em relacao com o ambiente externo, e a:", "Medio", [option("a", "teoria classica"), option("b", "teoria burocratica"), option("c", "teoria das relacoes humanas"), option("d", "teoria da contingencia")], "d"),
        question("q5", "Ao formular estrategia, a empresa deve analisar pontos fortes e fracos de qual ambiente?", "Medio", [option("a", "ambiente interno"), option("b", "somente ambiente juridico externo"), option("c", "mercado internacional exclusivamente"), option("d", "apenas setor de compras")], "a"),
        question("q6", "Depois de formular estrategias, qual etapa a apostila indica para assegurar os objetivos gerais?", "Medio", [option("a", "eliminar a hierarquia"), option("b", "controle estrategico"), option("c", "encerrar a analise interna"), option("d", "substituir o planejamento")], "b"),
      ],
      Avancado: [
        question("q1", "Uma organizacao quer combinar padronizacao do trabalho, divisao de responsabilidades e treinamento. Qual teoria melhor sustenta esse desenho?", "Dificil", [option("a", "administracao cientifica"), option("b", "teoria das relacoes humanas"), option("c", "teoria do desenvolvimento organizacional"), option("d", "teoria arquivistica")], "a"),
        question("q2", "Qual alternativa resume melhor a diferenca enfatizada pela apostila entre Fayol e Taylor?", "Dificil", [option("a", "Fayol negava a eficiencia e Taylor focava apenas em salarios"), option("b", "Fayol trabalhou principios gerais de organizacao e Taylor focou tarefas e tempos"), option("c", "Taylor estudou relacoes humanas e Fayol apenas marketing"), option("d", "Nao ha diferenca relevante entre os dois autores")], "b"),
        question("q3", "A ideia de que nao ha nada absoluto nas organizacoes e que a empresa deve adaptar-se ao ambiente pertence a qual teoria?", "Dificil", [option("a", "teoria classica"), option("b", "teoria da burocracia"), option("c", "teoria da contingencia"), option("d", "teoria cientifica")], "c"),
        question("q4", "Se a estrategia realizada quase nunca e identica a planejada, a conclusao mais alinhada ao texto e que a gestao deve:", "Dificil", [option("a", "abandonar o planejamento formal"), option("b", "eliminar controles para ganhar velocidade"), option("c", "ajustar a execucao com analise da realidade e controle estrategico"), option("d", "ignorar o ambiente externo")], "c"),
        question("q5", "Qual conjunto expressa corretamente a logica de formulacao estrategica descrita na apostila?", "Dificil", [option("a", "ameacas internas, custos fixos e folha salarial"), option("b", "pontos fortes e fracos internos combinados com oportunidades e ameacas externas"), option("c", "somente metas de vendas de curto prazo"), option("d", "substituicao da missao por rotinas operacionais")], "b"),
        question("q6", "Quando a apostila afirma que a administracao utiliza conhecimentos de contabilidade, direito, economia e psicologia, ela reforca principalmente o carater:", "Dificil", [option("a", "interdisciplinar da administracao"), option("b", "estritamente juridico da administracao"), option("c", "exclusivamente contabil da administracao"), option("d", "operacional sem base teorica")], "a"),
      ],
    },
  },
  {
    number: 2,
    lesson: "Aula 2 - Empresas e Recursos",
    shortTitle: "Empresas e Recursos",
    banks: {
      Basico: [
        question("q1", "Razao social e o registro usado para identificar formalmente:", "Facil", [option("a", "o estoque mensal da empresa"), option("b", "a empresa perante os orgaos publicos"), option("c", "apenas o setor comercial"), option("d", "somente o nome de um produto")], "b"),
        question("q2", "Nome fantasia corresponde a:", "Facil", [option("a", "nome comercial pelo qual a empresa e conhecida"), option("b", "codigo fiscal de importacao"), option("c", "registro de despesas internas"), option("d", "relatorio anual de vendas")], "a"),
        question("q3", "Segundo a apostila, quais tipos sao mais usados na pratica entre as classificacoes empresariais?", "Facil", [option("a", "sociedade limitada e sociedade anonima"), option("b", "MEI e cooperativa"), option("c", "empresa publica e autarquia"), option("d", "sociedade simples e holding")], "a"),
        question("q4", "O organograma representa principalmente:", "Facil", [option("a", "a estrutura dos setores e suas relacoes"), option("b", "os custos de producao da empresa"), option("c", "o calendario de ferias"), option("d", "o estoque diario da empresa")], "a"),
        question("q5", "O fluxograma serve para demonstrar:", "Facil", [option("a", "a divisao dos lucros entre socios"), option("b", "a sequencia de etapas de um processo"), option("c", "o patrimonio dos administradores"), option("d", "a tabela de cargos e salarios")], "b"),
        question("q6", "A administracao de recursos de materiais e voltada para:", "Facil", [option("a", "controlar e organizar materiais e suprimentos"), option("b", "realizar apenas selecao de pessoal"), option("c", "cuidar exclusivamente da propaganda"), option("d", "definir feriados internos")], "a"),
      ],
      Intermediario: [
        question("q1", "Uma empresa quer registrar oficialmente seu negocio no orgao publico. Qual elemento deve constar nessa identificacao formal?", "Medio", [option("a", "nome fantasia apenas"), option("b", "razao social"), option("c", "planejamento estrategico"), option("d", "fluxograma operacional")], "b"),
        question("q2", "Se um cliente conhece a loja por um apelido comercial registrado, ele esta se referindo a:", "Medio", [option("a", "sociedade anonima"), option("b", "nome fantasia"), option("c", "capital social"), option("d", "organograma")], "b"),
        question("q3", "Na sociedade em nome coletivo, a administracao e destinada principalmente a:", "Medio", [option("a", "consultores externos escolhidos pelo mercado"), option("b", "socios da propria sociedade"), option("c", "clientes com maior participacao de compra"), option("d", "qualquer funcionario operacional")], "b"),
        question("q4", "Qual ferramenta visual ajuda a entender a posicao de cada setor e suas subordinacoes dentro da empresa?", "Medio", [option("a", "tabela de temporalidade"), option("b", "organograma"), option("c", "protocolo de arquivo"), option("d", "cronograma de reunioes")], "b"),
        question("q5", "Ao mapear o caminho de atendimento de um pedido desde o recebimento ate a entrega, a empresa deve usar:", "Medio", [option("a", "fluxograma"), option("b", "balancete"), option("c", "ata de reuniao"), option("d", "manual de conduta")], "a"),
        question("q6", "A administracao de materiais ganha importancia porque precisa lidar com novas tecnicas, novos equipamentos e:", "Medio", [option("a", "ausencia total de controle"), option("b", "maior complexidade no uso de recursos"), option("c", "substituicao completa do planejamento"), option("d", "fim da necessidade de estoque")], "b"),
      ],
      Avancado: [
        question("q1", "Qual alternativa diferencia corretamente razao social de nome fantasia?", "Dificil", [option("a", "razao social e o nome comercial; nome fantasia e o registro juridico"), option("b", "razao social identifica formalmente a empresa; nome fantasia identifica comercialmente"), option("c", "ambos possuem exatamente a mesma funcao"), option("d", "nome fantasia substitui qualquer registro oficial")], "b"),
        question("q2", "Em uma sociedade em nome coletivo, o risco empresarial e descrito na apostila como:", "Dificil", [option("a", "restrito ao administrador provisiorio"), option("b", "preservado apenas para investidores externos"), option("c", "nao preserva nenhum dos socios dos riscos do investimento"), option("d", "integralmente transferido ao setor publico")], "c"),
        question("q3", "Quando a empresa usa organograma e fluxograma em conjunto, ela combina respectivamente:", "Dificil", [option("a", "estrutura hierarquica e fluxo de processos"), option("b", "custos fixos e despesas variaveis"), option("c", "marketing e arquivamento"), option("d", "controle fiscal e clima organizacional")], "a"),
        question("q4", "A administracao de recursos de materiais pode ser entendida como subsistema porque:", "Dificil", [option("a", "atua isoladamente e sem relacao com a empresa"), option("b", "integra o funcionamento da organizacao ao cuidar dos recursos materiais"), option("c", "substitui todos os demais setores"), option("d", "serve apenas para empresas industriais")], "b"),
        question("q5", "Se a empresa melhora o fluxo de suprimentos, reduz faltas e organiza estoques, ela esta aplicando objetivos ligados a:", "Dificil", [option("a", "gestao de documentos"), option("b", "administracao de recursos de materiais"), option("c", "arquivo intermediario"), option("d", "redacao comercial")], "b"),
        question("q6", "A afirmacao de que, na pratica, dois tipos societarios sao mais utilizados sugere para o estudante que a materia deve priorizar:", "Dificil", [option("a", "decoracao aleatoria de siglas"), option("b", "compreensao das formas empresariais mais recorrentes no mercado"), option("c", "abandono da classificacao das empresas"), option("d", "somente empresas sem registro")], "b"),
      ],
    },
  },
  {
    number: 3,
    lesson: "Aula 3 - Funcoes Administrativas",
    shortTitle: "Funcoes Administrativas",
    banks: {
      Basico: [
        question("q1", "Qual funcao administrativa define previamente objetivos e caminhos de acao?", "Facil", [option("a", "planejar"), option("b", "arquivar"), option("c", "protocolar"), option("d", "fidelizar")], "a"),
        question("q2", "Organizar significa principalmente:", "Facil", [option("a", "distribuir recursos e estruturar atividades"), option("b", "eliminar toda comunicacao formal"), option("c", "atuar apenas no setor comercial"), option("d", "substituir o planejamento")], "a"),
        question("q3", "Coordenar em uma empresa envolve:", "Facil", [option("a", "integrar esforcos e harmonizar atividades"), option("b", "arquivar documentos sigilosos"), option("c", "vender produtos ao consumidor final"), option("d", "definir o nome fantasia")], "a"),
        question("q4", "Controlar serve para:", "Facil", [option("a", "acompanhar resultados e corrigir desvios"), option("b", "registrar apenas entrada de materiais"), option("c", "substituir o lider da equipe"), option("d", "criar novos cargos sociais")], "a"),
        question("q5", "Projetos costumam ter como caracteristica principal:", "Facil", [option("a", "prazo e objetivo definidos"), option("b", "duracao infinita e sem meta"), option("c", "foco apenas em arquivos"), option("d", "ausencia de planejamento")], "a"),
        question("q6", "A organizacao estrutural esta ligada a:", "Facil", [option("a", "forma como a empresa distribui setores e responsabilidades"), option("b", "lista de produtos vendidos"), option("c", "regras de sigilo documental"), option("d", "higienizacao de arquivos")], "a"),
      ],
      Intermediario: [
        question("q1", "Antes de iniciar um novo servico, a equipe define metas, prazos e recursos. Essa pratica pertence a qual funcao?", "Medio", [option("a", "planejar"), option("b", "controlar"), option("c", "fidelizar"), option("d", "arquivar")], "a"),
        question("q2", "Uma empresa distribuiu tarefas, definiu setores e alocou pessoas conforme a estrutura. Qual funcao foi aplicada?", "Medio", [option("a", "organizar"), option("b", "motivar clientes"), option("c", "preservar documentos"), option("d", "eliminar indicadores")], "a"),
        question("q3", "Quando diferentes setores precisam atuar em sintonia para cumprir uma meta, o gestor deve enfatizar:", "Medio", [option("a", "coordenacao"), option("b", "sigilo ultrassecreto"), option("c", "arquivo setorial"), option("d", "nome fantasia")], "a"),
        question("q4", "Ao comparar o resultado real com o planejado para corrigir falhas, a empresa esta exercendo:", "Medio", [option("a", "controle"), option("b", "comercializacao"), option("c", "protocolo arquivistico"), option("d", "registro societario")], "a"),
        question("q5", "Qual alternativa representa um exemplo de projeto administrativo?", "Medio", [option("a", "implantacao de um novo sistema com prazo e equipe definidos"), option("b", "rotina permanente sem objetivo delimitado"), option("c", "guarda eterna de todo documento produzido"), option("d", "uso de apelido comercial da empresa")], "a"),
        question("q6", "O planejamento geral se diferencia do planejamento especial porque tende a abranger:", "Medio", [option("a", "a organizacao de forma mais ampla"), option("b", "somente um setor operativo isolado"), option("c", "apenas a etapa de arquivo"), option("d", "exclusivamente a area comercial")], "a"),
      ],
      Avancado: [
        question("q1", "Qual sequencia esta mais coerente com a logica das funcoes administrativas estudadas?", "Dificil", [option("a", "controlar, planejar, desorganizar, arquivar"), option("b", "planejar, organizar, coordenar e controlar"), option("c", "vender, arquivar, motivar e eliminar"), option("d", "registrar, sigilar, restaurar e comunicar")], "b"),
        question("q2", "Se a empresa planeja bem, mas nao distribui recursos e responsabilidades, qual funcao esta deficiente?", "Dificil", [option("a", "organizar"), option("b", "controlar"), option("c", "fidelizar"), option("d", "redigir")], "a"),
        question("q3", "Uma equipe tem boa estrutura e metas claras, mas os setores atuam de forma desconexa. O problema central aponta para falha de:", "Dificil", [option("a", "coordenacao"), option("b", "arquivo permanente"), option("c", "nome fantasia"), option("d", "razao social")], "a"),
        question("q4", "O controle administrativo so faz sentido pleno quando relacionado a:", "Dificil", [option("a", "padroes e objetivos previamente definidos"), option("b", "criticas publicas ao trabalhador"), option("c", "sigilo ultrassecreto de arquivos"), option("d", "ausencia de indicadores")], "a"),
        question("q5", "Projetos, na perspectiva administrativa, exigem acompanhamento porque:", "Dificil", [option("a", "sao sempre informais e sem risco"), option("b", "possuem objetivos delimitados, recursos e prazos que precisam ser controlados"), option("c", "dispensam organizacao estrutural"), option("d", "substituem toda a rotina da empresa")], "b"),
        question("q6", "A organizacao estrutural contribui para a eficiencia principalmente ao:", "Dificil", [option("a", "definir papeis, autoridade e relacoes entre setores"), option("b", "eliminar o planejamento"), option("c", "transformar todo documento em permanente"), option("d", "trocar a estrategia pela improvisacao")], "a"),
      ],
    },
  },
  {
    number: 4,
    lesson: "Aula 4 - Comunicacao",
    shortTitle: "Comunicacao",
    banks: {
      Basico: [
        question("q1", "A comunicacao intra-organizacional ocorre:", "Facil", [option("a", "dentro da propria organizacao"), option("b", "somente entre empresa e clientes"), option("c", "apenas com fornecedores externos"), option("d", "fora do ambiente de trabalho")], "a"),
        question("q2", "A comunicacao extra-organizacional acontece quando a empresa se comunica com:", "Facil", [option("a", "publicos externos"), option("b", "apenas seu arquivo interno"), option("c", "somente o organograma"), option("d", "exclusivamente o estoque")], "a"),
        question("q3", "Linguagem e expressao adequadas ajudam principalmente a:", "Facil", [option("a", "tornar a mensagem mais clara"), option("b", "aumentar a burocracia sem necessidade"), option("c", "eliminar o planejamento"), option("d", "substituir o controle")], "a"),
        question("q4", "Redacao comercial deve priorizar:", "Facil", [option("a", "clareza, objetividade e adequacao"), option("b", "giria e ambiguidade"), option("c", "frases sem nexo"), option("d", "uso de termos desconectados do contexto")], "a"),
        question("q5", "Regras de portugues na rotina administrativa sao importantes para:", "Facil", [option("a", "evitar erros e melhorar a compreensao"), option("b", "substituir a estrategia da empresa"), option("c", "definir capital social"), option("d", "classificar arquivos permanentes")], "a"),
        question("q6", "Uma mensagem administrativa precisa, antes de tudo, ser:", "Facil", [option("a", "compreensivel para o receptor"), option("b", "longa e rebuscada"), option("c", "cheia de termos tecnicos desnecessarios"), option("d", "ambigua para permitir varias leituras")], "a"),
      ],
      Intermediario: [
        question("q1", "Quando o RH divulga normas internas aos colaboradores, trata-se de comunicacao:", "Medio", [option("a", "intra-organizacional"), option("b", "extra-organizacional"), option("c", "sigilosa permanente"), option("d", "comercial externa")], "a"),
        question("q2", "Uma nota enviada a fornecedores e parceiros e exemplo de comunicacao:", "Medio", [option("a", "extra-organizacional"), option("b", "intra-organizacional"), option("c", "apenas arquivistica"), option("d", "estrutural")], "a"),
        question("q3", "Na gestao administrativa, a principal funcao de dominar linguagem e expressao e:", "Medio", [option("a", "reduzir ruidos e tornar a transmissao mais eficiente"), option("b", "gerar termos vagos para evitar responsabilidade"), option("c", "impedir a padronizacao documental"), option("d", "eliminar a necessidade de reunioes")], "a"),
        question("q4", "Se um comunicado comercial apresenta erros de portugues e ambiguidade, o risco mais direto e:", "Medio", [option("a", "falha de entendimento da mensagem"), option("b", "melhoria automatica da lideranca"), option("c", "aumento do controle de estoque"), option("d", "criacao de organograma mais claro")], "a"),
        question("q5", "Ao escrever um e-mail profissional ao cliente, a postura mais adequada segue qual principio?", "Medio", [option("a", "clareza e formalidade compativel com o contexto"), option("b", "uso excessivo de abreviacoes informais"), option("c", "frases confusas para parecer tecnico"), option("d", "ausencia de objetivo definido")], "a"),
        question("q6", "A comunicacao eficaz apoia o trabalho administrativo porque:", "Medio", [option("a", "alinha informacoes, orientacoes e relacoes de trabalho"), option("b", "dispensa o planejamento"), option("c", "torna desnecessario o controle"), option("d", "substitui a organizacao estrutural")], "a"),
      ],
      Avancado: [
        question("q1", "Qual situacao demonstra falha especifica de comunicacao intra-organizacional?", "Dificil", [option("a", "clientes nao entenderam uma promocao externa"), option("b", "setores internos receberam instrucoes contraditorias sobre o mesmo procedimento"), option("c", "fornecedor atrasou uma entrega por problemas logisticos"), option("d", "concorrente lancou campanha publicitaria")], "b"),
        question("q2", "A redacao comercial eficiente nao depende apenas de norma culta, mas tambem de:", "Dificil", [option("a", "adequacao ao objetivo e ao publico da mensagem"), option("b", "aumento do numero de paginas"), option("c", "uso de palavras raras e imprecisas"), option("d", "omissao de informacoes centrais")], "a"),
        question("q3", "Se a mensagem e tecnicamente correta, mas o receptor nao a compreende, o problema principal esta na:", "Dificil", [option("a", "eficacia comunicacional"), option("b", "classificacao societaria"), option("c", "tabela de temporalidade"), option("d", "gestao de materiais")], "a"),
        question("q4", "No contexto administrativo, regras de portugues contribuem para seguranca operacional porque:", "Dificil", [option("a", "reduzem interpretacoes equivocadas em ordens, registros e comunicados"), option("b", "substituem a lideranca da equipe"), option("c", "eliminam a necessidade de fluxogramas"), option("d", "dispensam a leitura do documento")], "a"),
        question("q5", "Entre comunicacao interna e externa, o ponto comum mais importante para a administracao e:", "Dificil", [option("a", "objetividade alinhada a finalidade da mensagem"), option("b", "uso obrigatorio de linguagem coloquial"), option("c", "ausencia de padrao textual"), option("d", "substituicao de registros formais por avisos verbais")], "a"),
        question("q6", "Uma empresa com boa estrategia, mas comunicacao deficiente, tende a sofrer porque:", "Dificil", [option("a", "os objetivos nao se convertem facilmente em acao coordenada"), option("b", "a estrategia deixa de existir juridicamente"), option("c", "o arquivo permanente vira corrente"), option("d", "o nome fantasia perde validade automatica")], "a"),
      ],
    },
  },
  {
    number: 5,
    lesson: "Aula 5 - Gerenciamento",
    shortTitle: "Gerenciamento",
    banks: {
      Basico: [
        question("q1", "Lideranca pode ser entendida como a capacidade de:", "Facil", [option("a", "influenciar pessoas em direcao a objetivos"), option("b", "arquivar documentos secretos"), option("c", "substituir toda a equipe"), option("d", "eliminar reunioes")], "a"),
        question("q2", "Para conduzir bem uma reuniao, a apostila indica a importancia de ter:", "Facil", [option("a", "pauta definida"), option("b", "improvisacao total"), option("c", "criticas publicas logo no inicio"), option("d", "ausencia de objetivo")], "a"),
        question("q3", "Em situacoes de crise, o gestor deve principalmente:", "Facil", [option("a", "agir com analise e planejamento"), option("b", "ignorar o problema"), option("c", "interromper toda comunicacao"), option("d", "retirar toda responsabilidade da equipe")], "a"),
        question("q4", "Segundo a apostila, elogios publicos podem contribuir para:", "Facil", [option("a", "motivacao e produtividade"), option("b", "desorganizacao permanente"), option("c", "eliminacao da lideranca"), option("d", "piora obrigatoria do clima")], "a"),
        question("q5", "Uma critica publica mal conduzida pode gerar:", "Facil", [option("a", "desinteresse e humilhacao"), option("b", "melhoria automatica da equipe"), option("c", "controle total do processo"), option("d", "aumento direto de vendas")], "a"),
        question("q6", "Oferecer cursos, parcerias e recompensas e uma forma de:", "Facil", [option("a", "motivar a equipe"), option("b", "extinguir o planejamento"), option("c", "classificar arquivos"), option("d", "definir razao social")], "a"),
      ],
      Intermediario: [
        question("q1", "Quando o gestor inspira a equipe e orienta comportamentos para atingir metas, ele esta exercendo:", "Medio", [option("a", "lideranca"), option("b", "arquivo setorial"), option("c", "controle fiscal"), option("d", "nome fantasia")], "a"),
        question("q2", "A pauta de reuniao e relevante porque:", "Medio", [option("a", "organiza os assuntos e evita dispersao"), option("b", "substitui a ata e o objetivo"), option("c", "dispensa preparacao previa"), option("d", "serve apenas para formalidade sem funcao")], "a"),
        question("q3", "Em uma crise administrativa, a atitude mais alinhada ao texto e:", "Medio", [option("a", "avaliar cenarios e adotar medidas para preservar a empresa"), option("b", "deixar que cada setor atue sem coordenacao"), option("c", "ocultar totalmente as informacoes da equipe"), option("d", "abandonar os clientes")], "a"),
        question("q4", "Por que a apostila desaconselha critica publica ao colaborador?", "Medio", [option("a", "porque pode gerar humilhacao e desinteresse"), option("b", "porque elimina a necessidade de feedback"), option("c", "porque toda critica deve ser proibida"), option("d", "porque reduz os documentos da empresa")], "a"),
        question("q5", "Comemorar resultados positivos com a equipe ajuda a:", "Medio", [option("a", "reforcar pertencimento e continuidade do bom desempenho"), option("b", "aumentar a burocracia"), option("c", "diminuir a criatividade"), option("d", "substituir o lider")], "a"),
        question("q6", "Incentivar ideias mesmo quando nao sao adotadas contribui para:", "Medio", [option("a", "criatividade e engajamento"), option("b", "perda total de autoridade"), option("c", "fim das metas"), option("d", "classificacao documental")], "a"),
      ],
      Avancado: [
        question("q1", "Qual postura melhor representa lideranca administrativa madura segundo a apostila?", "Dificil", [option("a", "delegar sem acompanhar e criticar em publico"), option("b", "inspirar, orientar, respeitar a equipe e acompanhar resultados"), option("c", "centralizar tudo e evitar ouvir ideias"), option("d", "manter reunioes sem pauta para estimular espontaneidade")], "b"),
        question("q2", "Uma reuniao produtiva depende menos de improviso e mais de:", "Dificil", [option("a", "objetivo, pauta e conducao disciplinada"), option("b", "fala extensa sem foco"), option("c", "ausencia de registro dos encaminhamentos"), option("d", "participacao apenas do lider")], "a"),
        question("q3", "Em cenarios de crise, a empresa que melhor reage e a que:", "Dificil", [option("a", "combina analise, decisao e capacidade de mobilizar pessoas"), option("b", "abandona o planejamento e espera a situacao passar"), option("c", "evita qualquer comunicacao com a equipe"), option("d", "trata toda critica como motivacao suficiente")], "a"),
        question("q4", "A diferenca central entre elogio publico e critica publica, no texto, esta no efeito sobre:", "Dificil", [option("a", "motivacao, orgulho e desinteresse do colaborador"), option("b", "validade da razao social"), option("c", "classificacao de arquivos"), option("d", "etapas do 5S")], "a"),
        question("q5", "Recompensas, cursos e reconhecimento funcionam como instrumentos gerenciais porque:", "Dificil", [option("a", "aumentam o engajamento e alinham esforco com resultado"), option("b", "substituem toda avaliacao de desempenho"), option("c", "eliminam a necessidade de lider"), option("d", "diminuem a importancia da comunicacao")], "a"),
        question("q6", "Quando o lider reforca que os resultados sao fruto do trabalho da equipe, ele fortalece principalmente:", "Dificil", [option("a", "sentido de pertencimento e compromisso coletivo"), option("b", "competicao destrutiva obrigatoria"), option("c", "isolamento entre setores"), option("d", "sigilo documental")], "a"),
      ],
    },
  },
  {
    number: 6,
    lesson: "Aula 6 - Qualidade",
    shortTitle: "Qualidade",
    banks: {
      Basico: [
        question("q1", "A ISO 9000 e apresentada na apostila como:", "Facil", [option("a", "grupo de normas tecnicas para gestao da qualidade"), option("b", "tipo societario empresarial"), option("c", "metodo de arquivamento permanente"), option("d", "modelo de campanha publicitaria")], "a"),
        question("q2", "O principio foco no cliente afirma que a empresa deve:", "Facil", [option("a", "atender necessidades e buscar superar expectativas"), option("b", "ignorar percepcoes do cliente"), option("c", "pensar apenas na producao interna"), option("d", "eliminar o monitoramento")], "a"),
        question("q3", "Melhoria continua deve ser:", "Facil", [option("a", "objetivo constante da organizacao"), option("b", "atividade eventual sem planejamento"), option("c", "funcao exclusiva do arquivo"), option("d", "pratica restrita ao setor financeiro")], "a"),
        question("q4", "O programa 5S surgiu no contexto de reconstrucao do:", "Facil", [option("a", "Japao"), option("b", "Brasil"), option("c", "Canada"), option("d", "Chile")], "a"),
        question("q5", "Seiri significa:", "Facil", [option("a", "senso de utilizacao"), option("b", "senso de limpeza"), option("c", "senso de saude"), option("d", "senso de autodisciplina")], "a"),
        question("q6", "Shitsuke corresponde ao senso de:", "Facil", [option("a", "autodisciplina"), option("b", "ordenacao"), option("c", "limpeza"), option("d", "utilizacao")], "a"),
      ],
      Intermediario: [
        question("q1", "Ao medir percepcoes do cliente para verificar se o servico ficou mais eficaz, a empresa esta aplicando qual logica da qualidade?", "Medio", [option("a", "monitoramento e analise do sistema de gestao da qualidade"), option("b", "arquivo corrente"), option("c", "classificacao societaria"), option("d", "critica publica da equipe")], "a"),
        question("q2", "Qual principio da ISO 9000 relaciona decisao eficiente ao uso de dados e informacoes?", "Medio", [option("a", "abordagem factual para tomada de decisoes"), option("b", "lideranca por improviso"), option("c", "foco apenas no lucro"), option("d", "sigilo ultrassecreto")], "a"),
        question("q3", "O planejamento da qualidade precisa assegurar estabelecimento, implementacao, manutencao e:", "Medio", [option("a", "melhoria continua do sistema"), option("b", "eliminacao do cliente"), option("c", "ausencia de processos"), option("d", "substituicao da lideranca")], "a"),
        question("q4", "Ao organizar materiais para acesso rapido e reduzir tempo de procura, qual senso do 5S esta em foco?", "Medio", [option("a", "Seiton, senso de ordenacao"), option("b", "Seiketsu, senso de saude"), option("c", "Shitsuke, senso de autodisciplina"), option("d", "Seiri, senso de utilizacao")], "a"),
        question("q5", "O senso de limpeza no 5S nao se limita a limpar, mas tambem envolve:", "Medio", [option("a", "capricho e execucao bem feita"), option("b", "somente descarte de documentos"), option("c", "reducao da comunicacao"), option("d", "troca de razao social")], "a"),
        question("q6", "Seiketsu esta ligado principalmente a:", "Medio", [option("a", "higiene, saude pessoal e seguranca do trabalho"), option("b", "publicidade e marketing"), option("c", "venda direta"), option("d", "sigilo documental")], "a"),
      ],
      Avancado: [
        question("q1", "Qual alternativa expressa melhor a visao sistemica da qualidade apresentada na apostila?", "Dificil", [option("a", "qualidade depende apenas da inspecao final do produto"), option("b", "qualidade envolve processos inter-relacionados, lideranca, pessoas e melhoria continua"), option("c", "qualidade e responsabilidade exclusiva do setor operacional"), option("d", "qualidade elimina a necessidade de dados")], "b"),
        question("q2", "O principio de relacionamento com fornecedores visando beneficio mutuo mostra que a qualidade:", "Dificil", [option("a", "e ampliada quando a cadeia de valor atua de forma interdependente"), option("b", "depende apenas do cliente final"), option("c", "dispensa acordos externos"), option("d", "nao se relaciona com processos")], "a"),
        question("q3", "Por que o 5S e tratado como base para a qualidade?", "Dificil", [option("a", "porque organiza ambiente, materiais, metodos e comportamento das pessoas"), option("b", "porque substitui todas as normas tecnicas"), option("c", "porque serve apenas para limpeza visual"), option("d", "porque elimina a necessidade de lideranca")], "a"),
        question("q4", "Se a empresa aplica os quatro primeiros sensos, mas nao mantem o habito ao longo do tempo, qual senso precisa ser fortalecido?", "Dificil", [option("a", "Shitsuke"), option("b", "Seiri"), option("c", "Seiton"), option("d", "Seisou")], "a"),
        question("q5", "A captacao das percepcoes do cliente, no sistema de qualidade, serve principalmente para:", "Dificil", [option("a", "verificar conformidade e eficacia do servico prestado"), option("b", "substituir toda medicao interna"), option("c", "definir o nome comercial da empresa"), option("d", "classificar arquivos permanentes")], "a"),
        question("q6", "Ao afirmar que o 5S pode virar estilo de vida e pratica empresarial, a apostila destaca seu potencial de:", "Dificil", [option("a", "mudanca cultural e comportamental"), option("b", "uso apenas decorativo"), option("c", "aplicacao restrita ao setor de limpeza"), option("d", "efeito temporario sem impacto em processos")], "a"),
      ],
    },
  },
  {
    number: 7,
    lesson: "Aula 7 - Area Comercial",
    shortTitle: "Area Comercial",
    banks: {
      Basico: [
        question("q1", "A tecnica 5W2H e usada para:", "Facil", [option("a", "planejar acoes e comercializacao"), option("b", "classificar arquivos sigilosos"), option("c", "definir tipos societarios"), option("d", "substituir o organograma")], "a"),
        question("q2", "No 5W2H, What significa:", "Facil", [option("a", "o que"), option("b", "quem"), option("c", "onde"), option("d", "quanto custara")], "a"),
        question("q3", "No 5W2H, Who corresponde a:", "Facil", [option("a", "quem"), option("b", "quando"), option("c", "como"), option("d", "por que")], "a"),
        question("q4", "Fidelizar clientes significa principalmente:", "Facil", [option("a", "construir relacao duradoura com o cliente"), option("b", "vender apenas uma vez"), option("c", "eliminar canais de atendimento"), option("d", "reduzir todo contato pos-venda")], "a"),
        question("q5", "Um dos passos para fidelizacao destacados na apostila e:", "Facil", [option("a", "ter canais de comunicacao eficazes"), option("b", "ignorar promessas feitas ao cliente"), option("c", "esconder diferenciais da empresa"), option("d", "evitar conhecer o cliente")], "a"),
        question("q6", "How Much no 5W2H pergunta:", "Facil", [option("a", "quanto custara"), option("b", "por que vender"), option("c", "onde vender"), option("d", "quem comprara")], "a"),
      ],
      Intermediario: [
        question("q1", "Ao decidir qual produto vender e se ele e comercializavel, a empresa esta respondendo qual item do 5W2H?", "Medio", [option("a", "What"), option("b", "Where"), option("c", "When"), option("d", "How Much")], "a"),
        question("q2", "Quando a empresa define o motivo pelo qual um produto deve entrar no comercio, ela responde:", "Medio", [option("a", "Why"), option("b", "Who"), option("c", "How"), option("d", "Where")], "a"),
        question("q3", "Escolher entre loja propria, representantes ou loja virtual corresponde a qual elemento do 5W2H?", "Medio", [option("a", "Where"), option("b", "What"), option("c", "Who"), option("d", "Why")], "a"),
        question("q4", "Definir publico-alvo por faixa etaria, genero ou perfil de consumo responde a:", "Medio", [option("a", "Who"), option("b", "When"), option("c", "How Much"), option("d", "What")], "a"),
        question("q5", "Pensar em como produzir e em reduzir custos antes de iniciar a producao responde ao item:", "Medio", [option("a", "How"), option("b", "Where"), option("c", "Why"), option("d", "Who")], "a"),
        question("q6", "Conhecer bem o cliente, honrar promessas e buscar diferenciais sao praticas ligadas a:", "Medio", [option("a", "fidelizacao de clientes"), option("b", "arquivo permanente"), option("c", "teoria burocratica"), option("d", "controle de sigilo")], "a"),
      ],
      Avancado: [
        question("q1", "Qual leitura gerencial do 5W2H esta mais alinhada a apostila?", "Dificil", [option("a", "e apenas uma lista de palavras em ingles sem funcao pratica"), option("b", "e uma ferramenta de planejamento comercial que ajuda a estruturar decisao e execucao"), option("c", "e um metodo exclusivo de controle financeiro"), option("d", "e um sistema de arquivo empresarial")], "b"),
        question("q2", "Se a empresa define produto, motivo, canal, momento, publico, forma de producao e custo, ela construiu principalmente:", "Dificil", [option("a", "um plano comercial mais consistente"), option("b", "uma classificacao documental"), option("c", "um processo de eliminacao de arquivos"), option("d", "um organograma automatico")], "a"),
        question("q3", "O texto sugere que o item Who ganhou ainda mais importancia com o crescimento de:", "Dificil", [option("a", "marketing digital"), option("b", "arquivo corrente"), option("c", "teoria classica"), option("d", "burocracia estatal")], "a"),
        question("q4", "Ter canais de comunicacao eficazes e honrar promessas fortalecem a fidelizacao porque:", "Dificil", [option("a", "constroem confianca e relacionamento duradouro"), option("b", "reduzem a necessidade de atender clientes"), option("c", "substituem a qualidade do produto"), option("d", "eliminam a concorrencia automaticamente")], "a"),
        question("q5", "Buscar diferenciais na area comercial significa:", "Dificil", [option("a", "destacar a empresa em mercado competitivo"), option("b", "copiar integralmente todos os concorrentes"), option("c", "ignorar o perfil do cliente"), option("d", "focar apenas em custo e nunca em valor")], "a"),
        question("q6", "A combinacao entre 5W2H e fidelizacao mostra que vender bem depende de planejamento e tambem de:", "Dificil", [option("a", "relacionamento continuo com o cliente"), option("b", "sigilo ultrassecreto"), option("c", "arquivo setorial"), option("d", "ausencia de estrategia")], "a"),
      ],
    },
  },
  {
    number: 8,
    lesson: "Aula 8 - Arquivo",
    shortTitle: "Arquivo",
    banks: {
      Basico: [
        question("q1", "Arquivo e o conjunto de:", "Facil", [option("a", "documentos criados ou recebidos pela empresa ou individuo"), option("b", "produtos vendidos no varejo"), option("c", "regras de marketing digital"), option("d", "tipos societarios do mercado")], "a"),
        question("q2", "Arquivo corrente corresponde a qual fase?", "Facil", [option("a", "primeira idade"), option("b", "segunda idade"), option("c", "terceira idade"), option("d", "idade permanente de sigilo")], "a"),
        question("q3", "Arquivo intermediario conserva documentos por razoes:", "Facil", [option("a", "administrativas, legais ou financeiras"), option("b", "somente esteticas"), option("c", "exclusivamente comerciais"), option("d", "apenas publicitarias")], "a"),
        question("q4", "Documento e qualquer registro de informacao:", "Facil", [option("a", "independentemente do formato ou suporte"), option("b", "somente em papel"), option("c", "apenas em meio digital"), option("d", "desde que tenha assinatura publica")], "a"),
        question("q5", "Gestao de documentos envolve:", "Facil", [option("a", "administracao, organizacao e controle dos documentos"), option("b", "somente guarda definitiva"), option("c", "apenas descarte imediato"), option("d", "somente digitalizacao")], "a"),
        question("q6", "A conservacao preventiva busca:", "Facil", [option("a", "interromper o processo de degradacao do documento"), option("b", "acelerar o desgaste do arquivo"), option("c", "eliminar todos os documentos antigos"), option("d", "substituir a classificacao")], "a"),
      ],
      Intermediario: [
        question("q1", "Um documento ainda em uso frequente e ligado a tramitacao do trabalho deve ficar preferencialmente em:", "Medio", [option("a", "arquivo corrente"), option("b", "arquivo permanente"), option("c", "arquivo historico externo"), option("d", "lixeira documental")], "a"),
        question("q2", "Documentos guardados temporariamente por precaucao, por razoes legais ou financeiras, pertencem ao:", "Medio", [option("a", "arquivo intermediario"), option("b", "arquivo corrente"), option("c", "fluxograma"), option("d", "organograma")], "a"),
        question("q3", "Os documentos produzidos ha mais de 25 anos e preservados pelo valor historico tendem a compor o:", "Medio", [option("a", "arquivo permanente"), option("b", "arquivo setorial"), option("c", "arquivo corrente"), option("d", "arquivo de apoio comercial")], "a"),
        question("q4", "Reservado, secreto e ultrassecreto sao classificacoes ligadas aos:", "Medio", [option("a", "niveis de sigilo dos documentos"), option("b", "tipos de sociedade empresarial"), option("c", "setores da area comercial"), option("d", "sensos do 5S")], "a"),
        question("q5", "Identificacao de documentos, plano de classificacao e controle de tramites sao etapas de:", "Medio", [option("a", "gestao de documentos"), option("b", "motivacao da equipe"), option("c", "comercializacao de produtos"), option("d", "teoria cientifica")], "a"),
        question("q6", "Arquivos perto de cozinha, banheiro ou instalacoes em mau estado representam:", "Medio", [option("a", "riscos de deterioracao documental"), option("b", "estrategias de fidelizacao"), option("c", "vantagens do 5S"), option("d", "tipos de lideranca")], "a"),
      ],
      Avancado: [
        question("q1", "Qual alternativa relaciona corretamente idade documental e finalidade?", "Dificil", [option("a", "corrente para tramitacao e uso inicial; intermediario para retencao; permanente para guarda historica"), option("b", "corrente para guarda historica; permanente para uso imediato"), option("c", "intermediario para venda ao cliente; corrente para descarte"), option("d", "todas as idades possuem a mesma finalidade")], "a"),
        question("q2", "O valor administrativo de um documento esta ligado principalmente a:", "Dificil", [option("a", "informar, fundamentar ou aprovar atos da administracao"), option("b", "apenas comprovar vendas ao consumidor"), option("c", "decorar ambientes de trabalho"), option("d", "substituir todo registro contabil")], "a"),
        question("q3", "A tabela de temporalidade e importante porque ajuda a:", "Dificil", [option("a", "definir prazos de guarda e destinacao dos documentos"), option("b", "estabelecer o nome fantasia da empresa"), option("c", "conduzir reunioes comerciais"), option("d", "criar principios da ISO 9000")], "a"),
        question("q4", "Ao dizer que a gestao de documentos busca racionalizacao e eficiencia, a apostila indica que arquivar bem significa:", "Dificil", [option("a", "controlar criacao, tramitacao, uso e avaliacao documental"), option("b", "guardar tudo sem criterio"), option("c", "eliminar documentos sem base legal"), option("d", "cuidar apenas da limpeza fisica do setor")], "a"),
        question("q5", "Qual situacao demonstra pratica correta de conservacao preventiva?", "Dificil", [option("a", "manter ambiente higienizado e controlar condicoes ambientais"), option("b", "armazenar documentos perto de cozinha e umidade"), option("c", "deixar instalacoes eletricas danificadas proximas ao arquivo"), option("d", "dispensar qualquer manutencao predial")], "a"),
        question("q6", "A gestao documental apoia diretamente a empresa porque:", "Dificil", [option("a", "assegura acesso, controle, prova e preservacao da informacao"), option("b", "substitui todas as demais areas administrativas"), option("c", "elimina a necessidade de classificacao"), option("d", "serve apenas a instituicoes publicas")], "a"),
      ],
    },
  },
];

for (const lesson of lessons) {
  for (const [level, questions] of Object.entries(lesson.banks)) {
    const payload = {
      title: `Quiz - ${lesson.shortTitle} - ${level}`,
      subject: "Gestao Administrativa",
      lesson: lesson.lesson,
      level,
      questions,
    };

    const fileName = `gestao-administrativa-aula${lesson.number}-${level.toLowerCase()}.json`;
    fs.writeFileSync(path.join(dataDir, fileName), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  }
}

console.log(`Arquivos gerados: ${lessons.length * 3}`);
