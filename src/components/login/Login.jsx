import React, { useState } from 'react';
import validation from './LoginValidation';
import { ToastContainer } from 'react-toastify';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInput = () => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  };
  return (
    <div className="h-screen w-screen bg-slate-800 -mt-20 pt-32">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto mt-20 py-10 px-10 rounded-3xl  bg-gray-900"
      >
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInput}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
          {errors.email && <span className="text-red-600">{errors.email}</span>}
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          {/* {errors.password && <span className="text-red-600">{errors.password}</span>} */}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Login
        </button>

        <div className="flex items-start mb-5 mt-10">
          <label for="terms" className="ms-2 text-sm font-medium text-white ">
            Forget Password?{' '}
            <span className="text-blue-700 border-b-blue-700 border-b-2 hover:text-blue-900 hover:font-bold">
              Yes ?
            </span>
          </label>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
