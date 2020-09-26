const express = require('express');
const apiRouter = express.Router();

const allDevises = [];

allDevises.push({ code : 'EUR' , nom : 'Euro' , change : 1.0 });
allDevises.push({ code : 'USD' , nom : 'Dollar US' , change : 1.16 });
allDevises.push({ code : 'JPY' , nom : 'Yen' , change : 123 });
allDevises.push({ code : 'GBP' , nom : 'Livre' , change : 0.9 });
allDevises.push({ code : 'CAD' , nom : 'Dollar Canadien' , change : 0.67 });
allDevises.push({ code : 'CNY' , nom : 'Yuan' , change : 7.96 });
allDevises.push({ code : 'PLN' , nom : 'Złoty' , change : 4.55 });
allDevises.push({ code : 'RUB' , nom : 'Rouble russe' , change : 89.73 });
allDevises.push({ code : 'BRL' , nom : 'Réal Brésilien' , change : 6.43 });
allDevises.push({ code : 'INR' , nom : 'Roupie Indienne' , change : 85.87 });

function convertPrice(codeDevise, priceToConvert) {
	let conversionRate;
	for(const devise of allDevises) {
		if(devise.code === codeDevise) {
			conversionRate = devise.change;
		}
	}
	return priceToConvert * conversionRate;
}

//exemple URL: http://localhost:8282/devise-api/public/devise/USD/10
apiRouter.route('/devise-api/public/devise/:code/:price')
.get( function(req , res  , next ) {
	const codeDevise = req.params.code;
	const priceToConvert = req.params.price;
	const convertedPrice = convertPrice(codeDevise, priceToConvert);
	res.send(convertedPrice.toString());
});

exports.apiRouter = apiRouter;
