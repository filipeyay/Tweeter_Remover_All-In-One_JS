//Instructions(En)
//Tweeter tweet remover
//Run the script on your web browser console by pressing Ctrl+Shift+I, make sure you run it on http://twitter.com/{username}/with_replies

//Instruções(Pt-Br)
//Removedor de tweets
//Rodar no console do navegador, no endereço http://twitter.com/{username}/with_replies

var toDelete = window.prompt(
  "Enter your delete option text exactly as it's writen: "
);

setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="caret"]')) {
    d.click();
    const deleteButton = document
      .querySelector("div[role='menu']")
      .getElementsByTagName("div")[3];

    if (deleteButton.getElementsByTagName("span")[0].innerText == toDelete) {
      deleteButton.click();
      document
        .querySelector("div[data-testid='confirmationSheetConfirm']")
        .click();
    }
  }
  window.scrollTo(0, document.body.scrollHeight);
}, 1000);
