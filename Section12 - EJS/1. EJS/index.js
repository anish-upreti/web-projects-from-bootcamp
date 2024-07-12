
import express from "express";

const app = express();
const port = 3000;


app.get("/", (req,res) =>{

    const today = new Date();
    const day = today.getDay();

    let type, adv;

    if(day === 0 || day ===6){
        type= "the weekend";
        adv = "it's time to have fun";
    }
    else{
        type = "a weekday";
        adv = "it's time to work"
    }
    res.render("index.ejs",{
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});