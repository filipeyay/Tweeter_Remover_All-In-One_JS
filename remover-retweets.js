//Instructions(En)
//Tweeter retweet remover
//Run the script on your web browser console by pressing Ctrl+Shift+I, make sure you run it on http://twitter.com/{username}/

//Instruções(Pt-Br)
//Removedor de retweets
//Rodar no console do navegador, no endereço http://twitter.com/{username}

setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="unretweet"]')) {
    d.click();
    const d2 = document.querySelector('div[data-testid="unretweetConfirm"]');
    d2.click();
  }
  window.scrollTo(0, document.body.scrollHeight);
}, 1000);
