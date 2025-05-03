import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { axios } from "axios";

const initialAddressValues = {
    street: '',
    neighborhood: '',
    city:'',
    state: '',
    country: '',
    zipcode: ''
}

const initialValues = {
    name: '',
    cpf: '',
    email: '',
    phone: '',
    birthdate: '',
    address: initialAddressValues,
    password: '',
}

function Register() {
    const navigate = useNavigate()

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    axios.post("http://localhost:3000/auth/register", values)
                    .then(() => {
                        navigate('/login')
                    })
                }}
                validate={(values) => {
                    const errors = {};

                    if (!values.name) {
                        errors.name = "Nome é obrigatório"
                    }

                    return errors;
                }}  
            >

            <Form className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-8">

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Digite seu nome completo"
                                required
                            />
                            <ErrorMessage name="name" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">CPF</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="cpf"
                                name="cpf"
                                placeholder="000.000.000-00"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">E-mail</label>
                            <Field
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="email@email.com"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Data de nascimento</label>
                            <Field
                                type="date"
                                className="form-control"
                                id="birthdate"
                                name="birthdate"
                                placeholder="dd/mm/aaaa"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Telefone</label>
                            <Field
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                placeholder="(00) 00000-0000"
                            />
                        </div>

                        
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Senha</label>
                            <Field
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha aqui"
                            />
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-primary" type="submit">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </Form>
            </Formik>
        </>
    )
}

export default Register;