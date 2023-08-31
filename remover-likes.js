//Instructions(En)
//Tweeter like remover
//Run the script on your web browser console by pressing Ctrl+Shift+I, make sure you run it on http://twitter.com/{username}likes}

//Instruções(Pt-Br)
//Removedor de likes do tweeter,
//Rode o script no console do navegador pressionando Ctrl+Shift+I, no endereço http://twitter.com/{username}/likes

function nextUnlike() {
  return document.querySelector('[data-testid="unlike"]');
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function removeAll() {
  let count = 0;
  let next = nextUnlike();
  while (next) {
    next.focus();
    next.click();
    console.log(`Unliked ${++count} tweets`);
    await wait(count % 50 === 0 ? 30000 : 2000);
    next = nextUnlike();
  }
  console.log("Out of unlikes, count =", count);
}

removeAll();
