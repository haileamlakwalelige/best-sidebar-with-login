import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function validation(values) {
  let errors = {};

  // Check if email is present
  if (!values.email) {
    errors.email = 'Email is required';
  } else {
    // Check if the email format is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email)) {
      errors.email = 'Invalid email format';
    }
  }

  // Check if password is present
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(values.password)) {
    errors.password =
    'Password must contain at least one uppercase letter, \none lowercase letter, one digit,\nand be at least 8 characters long';

  }

  // Display errors using react-toastify
  if (Object.keys(errors).length > 0) {
    const errorMessage = Object.values(errors).join('\n');
    toast.error(errorMessage);
  } else {
    toast.success('Form successfully submitted!');
  }

  // Return the errors object for further handling if needed
  return errors;
}

export default validation;