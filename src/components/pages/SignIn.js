import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SignIn.module.css";
import { useFormik } from "formik";

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    let errors = {};

    if (!values.password) {
      errors.password = "Required";
    } else if (values.name.length < 6) {
      errors.password = "Pass cannot be less than 6";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    ) {
      errors.email = "Invalid email format";
    }
  };

  const onSubmit = (values) => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Fragment>
      <section className={classes.login}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.email}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={classes.error}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className={classes.name}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={classes.error}>{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit" className={classes.button}>
            Log In
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default SignIn;
