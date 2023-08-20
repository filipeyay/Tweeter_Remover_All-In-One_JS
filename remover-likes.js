//Removedor de likes do tweeter
//Rodar no console do navegador, no endereço http://twitter.com/{username}/likes

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
