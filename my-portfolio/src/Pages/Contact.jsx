export default function Contact() {
    return (
      <div className="contact-page">
        <h2>Contact Me:</h2>
        <form action="https://formspree.io/f/xnnvzegr" method="post">
          <input
            type="text"
            placeholder="Your Name?"
            name="name"
            autoFocus
            required
          />
          <input type="email" placeholder="Your Email?" name="email" required />
          <input
            type="tel"
            placeholder="Your Number?"
            name="number"
            required
          />
          <textarea name="message" placeholder="your message"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
    
}