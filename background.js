

fetch(chrome.extension.getURL('/ConfigTicketeroPADs.json'))
  .then((resp) => resp.json())
  .then(function (jsonData) {
    console.log(jsonData);
   

    // Establece la cookie después de obtener el JSON
    chrome.cookies.set({
      "name": "cookie_tickets",
      "url": "http://localhost:4200/",
      "value": JSON.stringify(jsonData),
      expirationDate: Date.now() + 3600,
    });

      // Establece la cookie después de obtener el JSON
      chrome.cookies.set({
        "name": "cookie_tickets",
        "url": "http://192.168.19.37:4503/",
        "value": JSON.stringify(jsonData),
        expirationDate: Date.now() + 3600,
      });

  
    setTimeout(function () {
      chrome.cookies.set({
        "name": "cookie_tickets",
        "url": "http://localhost:4200/",
        "value": JSON.stringify(jsonData),
        expirationDate: Date.now() + 3600,
      });
    }, 1000*60*60);
  });
