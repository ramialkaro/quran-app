require('dotenv').config()
const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/sura', async (req, res )=>{
	try{
			const sura = await queries
							.quran
							.getAll()
		if(sura) {
			res.status(200).json(sura)
		} else {
			res.status(404).json({msg: "Sura not found"})
		}
	} catch(err){
			res.status(500).json({msg: err})
	}
})

router.get('/sura/:id', async(req, res)=>{
	try{
			const oneSura = await queries
										.quran
										.getOneSura(req.params.id)
		if(oneSura){
			res.status(200).json(oneSura)
		} else {
			res.status(404).json({msg: "Sura not found"})
		}
	} catch(err){
		res.status(500).json({msg: err})
	}
})


router.get('/juz/:id', async(req, res)=>{
	try{
			const oneJuz = await queries
										.quran
										.getOneJuz(req.params.id)
		if(oneJuz){
			res.status(200).json(oneJuz)
		} else {
			res.status(404).json({msg: "Juz not found"})
		}
	} catch(err){
		res.status(500).json({msg: err})
	}
})

module.exports = router
