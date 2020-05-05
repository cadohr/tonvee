import React from 'react';
import { Form } from '@unform/web';

import { Input } from '~/components/Form';

export default function MessageForm() {
  function handleSubmit() {}

  return (
    <Form className="MessageForm" onSubmit={handleSubmit}>
      {/* <div className="input-container"> */}
      <Input type="text" name="message" placeholder="Enter your message..." />
      {/* </div> */}
      <div className="button-container">
        <button type="submit">Send</button>
      </div>
    </Form>
  );
}

// class MessageForm extends Component {
//   static propTypes = {
//     onMessageSend: PropTypes.func.isRequired,
//   };

//   componentDidMount = () => {
//     this.input.focus();
//   };

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onMessageSend(this.input.value);
//     this.input.value = '';
//   };

//   render() {
//     return (
//       <form className="MessageForm" onSubmit={this.handleFormSubmit}>
//         <div className="input-container">
//           <input
//             type="text"
//             ref={(node) => (this.input = node)}
//             placeholder="Enter your message..."
//           />
//         </div>
//         <div className="button-container">
//           <button type="submit">Send</button>
//         </div>
//       </form>
//     );
//   }
// }

// export default MessageForm;
