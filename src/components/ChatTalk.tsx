/** Decorative chat that plays on a loop: a message, a typing indicator, a reply, then "delivered". */
export function ChatTalk() {
  return (
    <div className="chat" aria-hidden="true">
      <div className="row them">
        <div className="msg m1">
          Hi Nirmal! Got a minute to talk about a Quality Engineering roles?
        </div>
      </div>
      <div className="row me">
        <div className="typing">
          <i />
          <i />
          <i />
        </div>
        <div className="msg m2">Always. Let’s talk quality.</div>
      </div>
      <div className="row them">
        <div className="msg m3">Perfect, sending you an email now.</div>
      </div>
      <div className="sent">✓✓ Delivered</div>
    </div>
  );
}
