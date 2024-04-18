//Image
function fetchAndDisplayImage(imageUrl, containerId) {
    fetch(imageUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const imgUrl = URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = imgUrl;
        const container = document.getElementById(containerId);
        if (container) {
          container.appendChild(img);
        } else {
          document.body.appendChild(img);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  const imageUrl = "https://cards.scryfall.io/large/front/8/e/8ecfcf99-be2b-4e5f-adef-1977ee5c6a0f.jpg?1595438035";
  fetchAndDisplayImage(imageUrl, 'card_img');
//Card Name
fetch('../JSON/product.json')
            .then(response => response.json())
            .then(data => {
                const gandalfProduct = data.find(product => product.name === "Gandalf of the Secret Fire");
                if (gandalfProduct) {
                    const outputDiv = document.getElementById('card_name');
                    outputDiv.textContent = gandalfProduct.name;
                } else {
                    console.log("Product not found");
                }
            })
            .catch(error => console.error('Error fetching data:', error));
//Card Ability
fetch('../JSON/product.json')
            .then(response => response.json())
            .then(data => {
                const p1_ability = data.find(product => product.description ==="Whenever you cast an instant or sorcery spell from your hand during an opponent's turn, exile that card with three time counters on it instead of putting it into your graveyard as it resolves.");
                if (p1_ability) {
                    const outputDiv = document.getElementById('ability_text');
                    outputDiv.textContent = p1_ability.description;
                } else {
                    console.log("Product not found");
                }
            })
            .catch(error => console.error('Error fetching data:', error));
//price
function convertPriceToDecimal(price) {
  return (price / 100).toFixed(2);
}
fetch('../JSON/product.json')
  .then(response => response.json())
  .then(data => {
      const product144 = data.find(product => product.price === 144);
      if (product144) {
          product144.price = convertPriceToDecimal(product144.price);
          const productElement = document.getElementById('price_reg');
          productElement.textContent = product144.price;
      } else {
          console.log("Product with price 144 not found.");
      }
  })
  .catch(error => console.error('Error fetching JSON:', error));