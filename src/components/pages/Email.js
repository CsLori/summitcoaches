// import React from "react";
// import emailjs from "emailjs-com";

// export default function Email() {
//   function sendEmail(e) {
//     e.preventDefault();
//     console.log(e.target);
//     emailjs
//       .sendForm(
//         "summitcoaches",
//         "toCustomer",
//         e.target,
//         "user_FI4qd0TXlDNSpaY8rLLyQ"
//       )
//       .then(
//         result => {
//           console.log(result.text);
//         },
//         error => {
//           console.log(error.text);
//         }
//       );
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }
