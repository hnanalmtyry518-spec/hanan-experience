import "./Contact.css";
import Window from "../Common/Window";
import ContactCard from "./ContactCard";
import contacts from "./ContactData";

function Contact() {
  return (
    <section className="contact">

      <Window title="CONTACT.EXE">

        <h2 className="contact-title">
          لنتواصل
        </h2>

        <p className="contact-subtitle">
          يسعدني التواصل بخصوص فرص العمل أو المشاريع أو أي تعاون مهني.
        </p>

        <div className="contact-grid">

          {contacts.map((item, index) => (
            <ContactCard
              key={index}
              item={item}
            />
          ))}

        </div>

      </Window>

    </section>
  );
}

export default Contact;