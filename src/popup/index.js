import 'alpinejs'

const button = document.querySelector("button")

button.onclick = function(element) {
   chrome.tabs.query({"active": true, "currentWindow": true}, function(tabs) {
      chrome.tabs.executeScript(
         tabs[0].id,
         {code: 'document.body.style.backgroundColor = "#C1C1C1"'}
      )
   })
}
