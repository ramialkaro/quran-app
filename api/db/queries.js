const knex = require('./knex')
const { update, first } = require('./knex')

module.exports = {
	quran: {
		getAll: function(){
			return knex('Quran')
		},
		getOneSura: function(id){
			return knex('Quran').where('SuraID', id)
		},
		getOneJuz: function(id){
			return knex('Quran').where('VerseID', id)
		}

	}
}
