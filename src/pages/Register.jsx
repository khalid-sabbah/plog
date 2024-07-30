// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import '@fortawesome/fontawesome-free/css/all.min.css';

// // export default function Register() {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Perform registration logic here
// //     // For demonstration, let's assume registration is successful
// //     console.log('Registering user:', formData);
// //     // Redirect to home page after successful registration
// //     navigate('/home');
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
// //         <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4 relative">
// //             <input
// //               type="text"
// //               name="username"
// //               placeholder="Username"
// //               value={formData.username}
// //               onChange={handleChange}
// //               className="block w-full p-3 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
// //           </div>
// //           <div className="mb-4 relative">
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="block w-full p-3 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
// //           </div>
// //           <div className="mb-4 relative">
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               value={formData.password}
// //               onChange={handleChange
// //               }
// //               className="block w-full p-3 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
// //           </div>
// //           <div className="mb-6 relative">
// //             <input
// //               type="password"
// //               name="confirmPassword"
// //               placeholder="Confirm Password"
// //               value={formData.confirmPassword}
// //               onChange={handleChange}
// //               className="block w-full p-3 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-blue-500 text-white w-full p-3 rounded hover:bg-blue-700 transition duration-200"
// //           >
// //             Register
// //           </button>
// //         </form>
// //         <p className="mt-4 text-gray-600 text-center">
// //           Already have an account?{' '}
// //           <Link to="/" className="text-blue-500 hover:underline">
// //             Login
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };
// import React from 'react';
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  function add_user(){
    const userData = {
    username,
      email,
      password,
    };

    if (password === confirmPassword){
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        navigate("/");
    }

    
  }

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' value={username} onChange={(e) => setName(e.target.value)} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>

              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn onClick={add_user} className='mb-4' size='lg'>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;