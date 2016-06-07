import React from 'react';

const Contact = ({contact, item}) =>
  <li>
      {contact.name} {contact.phone} {item}
  </li>

export default Contact;
