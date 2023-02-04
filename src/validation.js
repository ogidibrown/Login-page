

const validation = (values)=>{
   let Errors = {}

if (!values.email) {
    Errors.email="Email is required"
}

if (!values.password) {
    Errors.password="Password is required"
}

return Errors;
    
}

export default validation;