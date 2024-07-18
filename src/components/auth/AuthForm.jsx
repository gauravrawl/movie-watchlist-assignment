/* eslint-disable react/prop-types */
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom"

const AuthForm = ({email, onChange, authType, handleSubmit, isLoading}) => {
  //isLoading we can use when actual api calls to enhance UX
  return (
    <div className="auth-container-main d-flex flex-column align-items-center justify-content-center">
    <div className="auth-container d-flex flex-column align-items-center justify-content-center rounded">
        <h2 className="pb-4">{`${authType} here`}</h2>
      <form onSubmit={handleSubmit} className="w-100">
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            value={email}
            onChange={onChange}
          />
          <div className="invalid-feedback">
            Please enter a valid email.
          </div>
        </div>
        <button 
          type="submit" 
          className="btn btn-danger w-100" 
          disabled={!email || isLoading}
        >
          {isLoading ? <Spinner animation="border" size="sm" /> : `${authType}`}
        </button>
      </form>
      <div className="mt-3">
        {authType === 'Login' ? (
          <span>
            Don&apos;t have an account? <Link to="/register"><span>Register</span></Link>
          </span>
        ) : (
          <span>
            Already have an account? <Link to="/"><span>Login</span></Link>
          </span>
        )}
      </div>
    </div>
     
    </div>
  );
}

export default AuthForm
