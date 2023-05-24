document.getElementById("submit-btn").addEventListener("click", function () {
    sendToChatGPT();
  });
  
  
  
  function sendToChatGPT() {
    let value = document.getElementById("word-input").value;
  
    let body = {
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: value }],
        temperature: 1
    };
  
    let headers = {
      Authorization: "Bearer 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",
    };
  
    axios
      .post("https://api.openai.com/v1/chat/completions", body, {
        headers: headers,
      })
      .then((response) => {
        let reply = response.data.choices[0].message.content;
        document.getElementById("reply-content").textContent = reply;
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("reply-content").textContent = "Error: Failed to get response from chatbot";
    });
  }
