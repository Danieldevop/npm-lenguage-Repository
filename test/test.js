const expect = require('chai').expect
const kripton = require('..').default

describe('#kripton', function() {
	it('Si la palabra termina en "ar", se le quitan esos dos caractéres', function () {
		const translation = kripton('Programar')
		expect(translation).to.equal('Program')
	})
	it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
		const translation = kripton('zorro')
		expect(translation).to.equal('zorrope')
	})
	it('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guión en medio', function () {
		const translation = kripton('abecedario')
		expect(translation).to.equal('abece-dario')
	})
	it('Si la palabra original es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra pero intercambiando letras mayusculas y minusculas ', function () {
		const translation = kripton('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})
})