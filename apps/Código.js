
const planId = '13zEoMKjxt-v3Dmugsx4IIC8OPHlilm1BmJ7K_IrTF6Y'

class SpreadsheetConfig {
  constructor(spreadsheetId, sheetMapping) {
    this.spreadsheetId = spreadsheetId
    this.sheetMapping = sheetMapping
  }

  getSheetId(sheetName) {
    const sheetId = this.sheetMapping[sheetName]
    return sheetId !== undefined && sheetId !== null ? sheetId : null
  }
}

const appsRegister = new SpreadsheetConfig(planId, {
  tester1: 0,
  tester2: 710084388,
  tester3:1147477483,
})


class SpreadsheetHelper {
  constructor(config) {
    this.config = config
    try {
        this.spreadsheet = SpreadsheetApp.openById(this.config.spreadsheetId)
    } catch (error) {
      console.log(`Erro ao abrir a planilha: ${error.message}`)
      throw new Error(`Não foi possível abrir a planilha com o ID: ${this.config.spreadsheetId}. Verifique o ID.`)
    }
  }

  // Função que busca a aba pelo ID, convertendo para número para evitar discrepâncias
  getSheetById(sheetId) {
    const sheets = this.spreadsheet.getSheets()
    for (let i = 0; i < sheets.length; i++) {
      const currentSheetId = sheets[i].getSheetId()
      if (Number(currentSheetId) === Number(sheetId)) {
        return sheets[i]
      }
    }
    return null
  }

  // Função que pega dados da aba e intervalo fornecidos
  getSheetData(sheetName, range) {
    const sheetId = this.config.getSheetId(sheetName)
    if (sheetId === null) throw new Error(`Aba não encontrada: ${sheetName}`)

    const sheet = this.getSheetById(sheetId)
    if (!sheet) throw new Error(`Aba não encontrada pelo ID: ${sheetId}`)

    // Se o intervalo for passado, usa ele, senão ajusta automaticamente
    if (!range) {
      const lastRow = sheet.getLastRow()
      const lastColumn = sheet.getLastColumn()
      range = `A1:${sheet.getRange(1, lastColumn).getA1Notation()}${lastRow}`
    }

    return sheet.getRange(range).getValues()
  }
}

const readSheetData = (sheetName, rowCol = null) => {
  try {
    const sheetService = new SpreadsheetHelper(appsRegister)
    const data = sheetService.getSheetData(sheetName, rowCol)
    
    console.log(`Dados da aba ${sheetName}:`)
    console.log(data)
  } catch (error) {
    console.log(`Erro ao ler a aba ${sheetName}: ${error.message}`)
  }
}


function testAllSheets() {
   readSheetData('tester1', 'A1:D')
   readSheetData('tester2', 'A1:D')
   readSheetData('tester1', 'A1:D')
}





































