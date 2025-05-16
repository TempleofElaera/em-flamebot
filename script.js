async function sendMessage() {
  const message = document.getElementById("message").value;
  const replyDiv = document.getElementById("reply");

const response = await fetch("https://em-flamebot.onrender.com/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  replyDiv.innerText = data.reply || data.error;
}
async function sendMessage() {
  const message = document.getElementById("message").value;
  const replyDiv = document.getElementById("reply");

  const response = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  replyDiv.innerText = data.reply || data.error;
}
