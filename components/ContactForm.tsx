"use client";
import { contact } from "@/lib/data";
export function ContactForm() {
  return (
    <form
      className="contact-form"
      action={`mailto:${contact.email}`}
      method="post"
      encType="text/plain"
      onSubmit={(event) => {
        event.preventDefault();
        const fields = new FormData(event.currentTarget);
        const name = String(fields.get("name") ?? "").trim();
        const email = String(fields.get("email") ?? "").trim();
        const message = String(fields.get("message") ?? "").trim();
        const subject = encodeURIComponent(`Portfolio inquiry — ${name}`);
        const body = encodeURIComponent(
          `From: ${name} <${email}>\n\n${message}`,
        );
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      }}
    >
      <h3>Tell me about it.</h3>
      <div>
        <label>
          Your name
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        What would you like to build?
        <textarea name="message" required rows={4} maxLength={3000} />
      </label>
      <button type="submit">Open an email draft ↗</button>
      <p>Opens your email app. Nothing is sent or stored by this website.</p>
    </form>
  );
}
