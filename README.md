## Integração com Google Sheets usando ID das Abas
Este projeto utiliza Google Apps Script para acessar dados específicos dentro de uma planilha do Google Sheets. O diferencial do código é que ele utiliza o ID exclusivo de cada aba, em vez de seus nomes, para garantir que a leitura dos dados continue funcionando mesmo que os nomes das abas sejam alterados.

## Funcionalidades do Código
Acesso às abas por ID: O código foi projetado para buscar e ler dados de cada aba usando seu ID exclusivo. Isso proporciona maior estabilidade e evita problemas comuns caso os nomes das abas sejam alterados.
Leitura de Dados Dinâmica: A função principal do código lê os dados de uma faixa (range) específica dentro de cada aba, ajustando-se automaticamente para captar todos os dados preenchidos até a última linha e coluna.
## Estrutura Principal
SpreadsheetConfig: Classe responsável por armazenar o ID da planilha e mapear o nome das abas com seus respectivos IDs.
SpreadsheetHelper: Classe que abre a planilha, identifica a aba correta pelo ID e realiza a leitura dos dados no intervalo especificado.
#### Este projeto é ideal para situações em que os nomes das abas podem mudar, mas você ainda precisa garantir o acesso consistente aos dados específicos dentro de cada uma delas.

# apps-script-spreadsheet-by-tab-id
