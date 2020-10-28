function chatBotUI(header, user) {
  return `
  <div class="chat">
  <div class="chat-title">
    <h1>${header}</h1>
    <h2>${user}</h2>
    <figure class="avatar">
      <img src="https://i.ibb.co/gFq3kDc/Capture-d-e-cran-2020-10-06-a-11-50-39.png" /></figure>
  </div>
  <div class="messages">
    <div class="messages-content"></div>
  </div>
  <div class="message-box">
    <textarea type="text" class="message-input" placeholder="Type message..."></textarea>
    <button type="submit" class="message-submit">Send</button>
  </div>

</div>`;
}
export default chatBotUI;
