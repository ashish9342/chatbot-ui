import "./styles.css";
import chatbotUI from "./components/chatbotUI/chatbotUI";

const chatbot = {
  header: "Work in progressss......",
  user: "Ashish Rawat",
  getElbyID: (el) => {
    return document.getElementById(el);
  },
  getElbyClass: (el) => {
    return document.getElementsByClassName(el);
  },
  renderChatBot: () => {
    const { user, header } = chatbot;
    chatbot.getElbyID("app").innerHTML = chatbotUI(user, header);
    chatbot.addEventListener();
  },
  addEventListener: () => {
    const send = chatbot.getElbyClass("message-submit")[0];
    send.addEventListener("click", chatbot.appendMessage);
  },
  appendMessage: () => {
    const text = chatbot.getElbyClass("message-input")[0].value.trim();
    console.log("text", text);
    if (text === "") {
      return false;
    }

    $('<div class="message message-personal">' + text + "</div>")
      .appendTo($(".mCSB_container"))
      .addClass("new");
  },
  enterPressed: (e) => {
    if (e.which === 13) {
      chatbot.appendMessage();
      return false;
    }
  },
  updateScrollbar: () => {},
  render: () => {
    chatbot.renderChatBot();
  }
};
chatbot.render();
