function Contact() {
  return (
    <section id="contact" className="p-10">
      <h2 className="text-3xl font-bold mb-4">
        Contact
      </h2>

      <form
        action="mailto:danionline519@gmail.com"
        method="post"
        encType="text/plain"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          className="border p-2 w-full mb-3"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded cursor-pointer"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;