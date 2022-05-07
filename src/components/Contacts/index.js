import { useEffect, useState } from "react";
import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Taylan",
      phoneNumber: "1234",
    },
    {
      fullName: "Nazli",
      phoneNumber: "456",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
