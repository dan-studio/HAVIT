const app = require("express")();

app.get("/", (req, res) => res.send());

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  send(res)
  //no end(), no send()
});

let i = 0
const send =(res)=>{
  res.write("data: " + `[운동하는 사람들] 챌린지에 참여해주세요!!!!${i++}\n\n`);
  setTimeout(() => {
    send(res)
  }, 1000);
}

app.listen(8080);
console.log("listening on 8080");
