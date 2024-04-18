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
  fetchAndDisplayImage(imageUrl,'feat_card');
  //Card Name
fetch('product.json')
.then(response => response.json())
.then(data => {
    const gandalfProduct = data.find(product => product.name === "Gandalf of the Secret Fire");
    if (gandalfProduct) {
        const outputDiv = document.getElementById('feat_name');
        outputDiv.textContent = gandalfProduct.name;
    } else {
        console.log("Product not found");
    }
})
.catch(error => console.error('Error fetching data:', error));
//Card Ability
fetch('product.json')
            .then(response => response.json())
            .then(data => {
                const p1_ability = data.find(product => product.description ==="Whenever you cast an instant or sorcery spell from your hand during an opponent's turn, exile that card with three time counters on it instead of putting it into your graveyard as it resolves.");
                if (p1_ability) {
                    const outputDiv = document.getElementById('feat_words');
                    outputDiv.textContent = p1_ability.description;
                } else {
                    console.log("Product not found");
                }
            })
            .catch(error => console.error('Error fetching data:', error));