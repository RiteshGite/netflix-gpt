export const checkValidData = (email, password) => {

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValid) return "Please Enter a valid Email Address";
    if (!isPasswordValid) return "Please Enter a valid Password";

    return null;
}

