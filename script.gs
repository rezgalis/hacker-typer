function doGet(e) {
  var html = HtmlService.createTemplateFromFile('index');
  html.codeFile = e.parameter.script;

  return html.evaluate();
}
