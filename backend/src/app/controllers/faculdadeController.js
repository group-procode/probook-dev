import express from "express";
import Faculdades from "../models/Faculdades.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get('/lista-faculdades', async(req,res)=>{
  const faculdade = new Faculdades();
  try{
    const faculdades = await faculdade.listaFaculdades();
    return res.status("200").json({faculdades})
  }catch(err){
    return res.status("500").json({erro:err})
  }
  
})


export default router;
