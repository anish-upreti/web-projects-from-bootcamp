import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "manish987";
const yourPassword = "practice987";
const yourAPIKey = "924edea5-9e5b-4c23-99bd-cc95f9d89d03";
const yourBearerToken = "d18b61bb-b728-4416-a02c-c6017eb4a75f";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", {content: JSON.stringify(result.data)} );
  }catch(error){
    res.statusMessage(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
 try{
  const result = await axios.get(API_URL + "/all?page=2", {
  auth: {
    username: yourUsername,
    password: yourPassword,
  }

  });
  
 res.render("index.ejs",{content: JSON.stringify(result.data)});

 }catch(error){
  res.status(404).send(error.message);
 }
});

app.get("/apiKey", async(req, res) => {
try{
  const result = await axios.get(API_URL + "/filter" ,{
    params: {
      score: 5,
      apiKey: yourAPIKey,
    }
  });

  res.render("index.ejs", {content: JSON.stringify(result.data)});

}catch(error){
  res.status(404).send(error.message);
}
});

const config = {
  headers: {Authorization: `Bearer ${yourBearerToken}`}
};

app.get("/bearerToken", async (req, res) => {
  try{
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", {content: JSON.stringify(result.data)});

  }catch(error){
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
