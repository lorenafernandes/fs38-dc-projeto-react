import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {
  const navigate = useNavigate()

  function doLogin(values) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("token", response.token);
        navigate('/dashboard')
      });
  }
  
  return (
    <>
      <Formik
        initialValues={{ password: "", email: "" }}
        onSubmit={doLogin}
      >
        <Form className="container mt-5">
          <div className="row justify-content-center">
            <fieldset className="col-8">
              <legend>Login</legend>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Field
                  type="email"
                  placeholder="email@email.com"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
                <ErrorMessage name="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <Field
                  type="password"
                  placeholder="********"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
                <ErrorMessage name="password" />
              </div>

              <div>
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </div>
            </fieldset>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
