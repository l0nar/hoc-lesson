import React from "react";
import withData from "./hoc";

const Comments = ({ data }) => {
  return (
    <div className="comments_list">
      {data.map((el) => {
        return (
          <div className="comment" key={el.id}>
            <h4>{el.name}</h4>
            <h5>{el.email}</h5>
            <p>{el.body}</p>
            <span className="line"></span>
          </div>
        );
      })}
    </div>
  );
};

// class Comments extends Component {
//   render() {
//     return (
//       <div className="comments_list">
//         {this.props.data.map((el) => {
//           return (
//             <div className="comment" key={el.id}>
//               <h4>{el.name}</h4>
//               <h5>{el.email}</h5>
//               <p>{el.body}</p>
//               <span className="line"></span>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default withData(Comments, "https://gorest.co.in/public/v1/comments");
