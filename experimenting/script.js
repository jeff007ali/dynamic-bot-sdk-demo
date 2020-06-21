function handleSubmit(){
  var businessId = document.getElementById('businessId').value;
  var clientId = document.getElementById('clientId').value;
  var baseUrl = document.getElementById('baseUrl').value;

  var botUrl = "bot.html?business-id=" + businessId + "&client-id=" + clientId + "&base-url="+ baseUrl;
  // alert(botUrl);

  var iframeObj = document.getElementById("botIframe");
  iframeObj.setAttribute("src", botUrl);
}

function clearConfig(){
  document.getElementById('businessId').value = "";
  document.getElementById('clientId').value = "";
  document.getElementById('baseUrl').value = "";

}
