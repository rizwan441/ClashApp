import express ,{Application,Request,Response} from 'express'
import 'dotenv/config'

const app :Application=express()
const port = process.env.PORT || 7000
