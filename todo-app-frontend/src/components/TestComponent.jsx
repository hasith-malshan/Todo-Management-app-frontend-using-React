// import React, { useState } from 'react';
// // import TodoService from '../service/TodoService';

// const TestComponent = () => {
//   const [messege, setMessege] = useState([]);

//   function requesthandler() {
//     TodoService.retriveAllTodos('hasith').then((resp) => {
//       console.log(resp.data);
//       setMessege(resp.data);
//     });
//   }

//   return (
//     <div>
//       <h2>
//         {messege.map((item) => (
//           <p key={item.id}>{item.description}</p>
//         ))}
//       </h2>
//       <button onClick={() => requesthandler()}>click here</button>
//     </div>
//   );
// };

// export default TestComponent;
