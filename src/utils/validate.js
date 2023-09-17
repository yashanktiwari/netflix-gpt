export const checkValidData = (email, password, name) => {
  // Validating using regex
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(name !== undefined) name = /^[a-z ,.'-]+$/i.test(name);

  if(name !== undefined) if(!name) return "Name is not valid";
  if(!isEmailValid) return "Email id is not valid";
  if(!isPasswordValid) return "Password is not valid";

  return null;
}