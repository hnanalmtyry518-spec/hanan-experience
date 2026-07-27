function ContactCard({ item }) {

  let link = item.value;

  if (item.title === "Email") {
    link = `mailto:${item.value}`;
  }

  return (

    <div className="contact-card">

      <span className="contact-icon">
        {item.icon}
      </span>

      <h3>{item.title}</h3>

      {item.value === "Coming Soon" ? (

        <p>{item.value}</p>

      ) : (

        <a
          href={link}
          target={item.title === "LinkedIn" ? "_blank" : "_self"}
          rel="noreferrer"
          className="contact-link"
        >
          {item.value}
        </a>

      )}

    </div>

  );

}

export default ContactCard;