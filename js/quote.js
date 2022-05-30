

function generateQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let randNumber = Math.floor(Math.random() * 1643);
      
      let quote = data[randNumber].text;
      let author = data[randNumber].author;
  
      document.querySelector(".card").innerHTML = `
      <div class="card-header">
                ${quote}
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p></p>
                  <footer class="blockquote-footer"><cite title="Source Title">${author}</cite></footer>
                </blockquote>
              </div>
      `;
  
    });
}

document.querySelector("#btn").onclick = generateQuote;
