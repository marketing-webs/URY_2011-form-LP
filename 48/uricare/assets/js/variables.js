const changeText = (className, newText) => {
  const nodeList = document.querySelectorAll(className);
  nodeList.forEach((item) => {
    item.innerText = newText;
  });
}

// NAZWA SPÓŁKI
changeText('.company-name', 'Globadvise Holding LTD, 590 Kingston Road, London, SW20 8DN, England');

// EMAIL
changeText('.company-email', 'contactpl@appandroll.com');

// DOMENA
changeText('.domain-name', 'energizevitality.org');

// CENA
changeText('.product-price', 'XXX');
