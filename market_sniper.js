const fs = require('fs');
const axios = require('axios')
const config = JSON.parse(fs.readFileSync('config.json'));
const config2 = JSON.parse(fs.readFileSync('config2.json'));
const config3 = JSON.parse(fs.readFileSync('config3.json'));
var priceArray = config.weapons;

var doneOffers = [];

function formatNumber(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function checkMarketplace() {
  var item = priceArray[~~(Math.random() * priceArray.length)];
  const item_name = item.sanitized_name;
  try {
    axios.get(`https://api.gtaliferp.fr:8443/v1/extinction/marketplace/sell/${item.name}`)
      .then(function (response) {
        const data = response.data;
        data.forEach((offer) => {
          if (offer.price < item.price && !(doneOffers.find(v => (offer.id.toString() === v)))) {
            axios.post(config.webhook_link, {content : `Un article a été mis en vente **${item_name}** au prix de ** ${formatNumber (offer.price)}$** par ** ${offer.seller}**!`})
            axios.post(config2.webhook_link, {content : `Un article a été mis en vente **${item_name}** au prix de ** ${formatNumber (offer.price)}$** par ** ${offer.seller}**!`})
            axios.post(config3.webhook_link, {content : `Un article a été mis en vente **${item_name}** au prix de ** ${formatNumber (offer.price)}$** par ** ${offer.seller}**!`})
            
            doneOffers.push(offer.id.toString());
            return;
          }
        })
      });
  }
  catch (err) {
    return console.log(err);
  }
}

setInterval(checkMarketplace, config.interval);