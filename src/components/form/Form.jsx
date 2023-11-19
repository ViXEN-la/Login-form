import React from "react";
import {useState} from "react";
import "./Form.css";

function Form() {
    const [userEmailValue, setUserEmailValue] = useState("");
    const [userPasswordValue, setUserPasswordValue] = useState("");

    const userEmail = (e) => {
        setUserEmailValue(e.target.value);
        console.log(e.target.value)

    }

    const userPassword = (e) => {
        setUserPasswordValue(e.target.value);
        console.log(e.target.value)
    }

    const [data, setData] = useState({});

    const processSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch('', {
        method: 'POST',
        body: formData
        })
        .then((response) => {
            response.json();
        })
        .then((result) => {
            setData(result);
            alert('You are in!');
        })
        .catch(error => {
            alert('Error');
        });
    };

    return(
        <div>
            <form onSubmit={processSubmit}>
                <h1>Login form</h1>
                <label>
                    <input type="email" placeholder="email" onInput={userEmail} />
                </label>
                <label>
                    <input type="password" placeholder="password" onInput={userPassword} />
                </label>
                
                <label>
                    <input
                        disabled={
                            !(userEmailValue && userPasswordValue)
                        }
                        type="submit"
                        value="Log in"
                    />
                </label>
            </form>
        </div>
    )




}

export default Form;

// export default class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userEmailValue: "",
//       userPasswordValue: "",
//     };
//   }

//   userEmail = (e) => {
//     this.setState({
//         userEmailValue: e.target.value
//     });
//     console.log(e.target.value);
//   };

//   userPassword = (e) => {
//     this.setState({
//         userPasswordValue: e.target.value
//     });
//     console.log(e.target.value);
//   };

//   render() {
//     return (
//       <div>
//         <form>
//         <h1>Login form</h1>
//           <label>
//             <input type="email" placeholder="email" onInput={this.userEmail} />
//           </label>
//           <label>
//             <input type="password" placeholder="password" onInput={this.userPassword} />
//           </label>
//           <label>
//           <input
//             disabled={
//               this.state.userPasswordValue &&
//               this.state.userEmailValue
//                 ? false
//                 : true
//             }
//             type="submit"
//             value="Log in"
//           />
//           </label>

//         </form>
//       </div>
//     );
//   }
// }
