
function doGet(e){
    var htmlTemplate = HtmlService.createTemplateFromFile('css')
    var htmlOutput = htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setTitle('CSS-Kirby')
    return htmlOutput
}

function include(filename) {  
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}