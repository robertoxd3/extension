document.addEventListener("DOMContentLoaded", function () {
  const setCookieButton = document.getElementById("setCookieButton");
  const cookieValueDiv = document.getElementById("cookieValue");

  // Función para establecer la cookie
  setCookieButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      fetch(chrome.extension.getURL("/ConfigTicketeroPADs.json"))
        .then((resp) => resp.json())
        .then(function (jsonData) {
          // console.log(jsonData);

          //localStorage.setItem("cookie2", JSON.stringify(jsonData));
          // chrome.storage.local.set("cookie2", JSON.stringify(jsonData));
          // chrome.storage.local.set({ key: value , value: JSON.stringify(jsonData),url:"http://localhost:4200/", }).then(() => {
          //   console.log("Value is set");
          // });
          // Establece la cookie después de obtener el JSON
          chrome.cookies.set(
            {
              name: "cookie_tickets",
              url: "http://localhost:4200/",
              value: JSON.stringify(jsonData),
              expirationDate: Date.now() + 3600*5,
            },
            function (cookie) {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
              } else {
                console.log("Cookie establecida:", cookie);
                // Actualiza la vista con el valor de la cookie
                cookieValueDiv.textContent = "Json establecida con exito";
              }
            }
          );
          chrome.cookies.set(
            {
              name: "cookie_tickets",
              url: "http://192.168.19.36/",
              value: JSON.stringify(jsonData),
             expirationDate: Date.now() + 3600*5,
            },
            function (cookie) {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
              } else {
                console.log("Cookie establecida:", cookie);
                // Actualiza la vista con el valor de la cookie
                cookieValueDiv.textContent = "Json establecida con exito";
              }
            }
          );

          chrome.cookies.set(
            {
              name: "cookie_tickets",
              url: "http://192.168.17.21/",
              value: JSON.stringify(jsonData),
             expirationDate: Date.now() + 3600*5,
            },
            function (cookie) {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
              } else {
                console.log("Cookie establecida:", cookie);
                // Actualiza la vista con el valor de la cookie
                cookieValueDiv.textContent = "Json establecida con exito";
              }
            }
          );

          chrome.cookies.set(
            {
              name: "cookie_tickets",
              url: "http://192.168.30.21/",
              value: JSON.stringify(jsonData),
             expirationDate: Date.now() + 3600*5,
            },
            function (cookie) {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
              } else {
                console.log("Cookie establecida:", cookie);
                // Actualiza la vista con el valor de la cookie
                cookieValueDiv.textContent = "Json establecida con exito";
              }
            }
          );
          chrome.cookies.set(
            {
              name: "cookie_tickets",
              url: "http://192.168.17.36/",
              value: JSON.stringify(jsonData),
             expirationDate: Date.now() + 3600*5,
            },
            function (cookie) {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
              } else {
                console.log("Cookie establecida:", cookie);
                // Actualiza la vista con el valor de la cookie
                cookieValueDiv.textContent = "Json establecida con exito";
              }
            }
          );

          
        });
    });
  });
});

