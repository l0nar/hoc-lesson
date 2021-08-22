import React from "react";
import withData from "./hoc";

const Posts = ({ data }) => {
  return (
    <div className="posts_list">
      {data.map((el) => {
        return (
          <div className="post" key={el.id}>
            <h3>{el.title}</h3>
            <p>{el.body}</p>
            <span className="line"></span>
          </div>
        );
      })}
    </div>
  );
};

// class Temp extends Component {
//   render() {
//     return (
//       <div className="posts_list">
//         {this.props.data.map((el) => {
//           return (
//             <div className="post" key={el.id}>
//               <h3>{el.title}</h3>
//               <p>{el.body}</p>
//               <span className="line"></span>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default withData(Posts, "https://gorest.co.in/public/v1/posts");
