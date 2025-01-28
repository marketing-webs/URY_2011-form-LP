const changeText = (className, newText) => {
  const nodeList = document.querySelectorAll(className);
  nodeList.forEach((item) => {
    item.innerText = newText;
  });
}

// NAZWA SPÓŁKI
changeText('.company-name', 'APP AND ROLL sp z o.o, Marszałkowska 58, 00-545 Warszawa, Polska , NIP: 7010348607');

// EMAIL
changeText('.company-email', 'contactpl@appandroll.com');

// DOMENA
changeText('.domain-name', 'energizevitality.org');

// CENA
changeText('.product-price', 'XXX');
