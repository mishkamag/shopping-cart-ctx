import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useFormik } from "formik";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    date: "",
    password: "",
    re_password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    navigate("/login");
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 6) {
      errors.name = "Name cannot be less than 6";
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

    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
        values.password
      )
    ) {
      errors.password =
        "Password should contain atleast one number and one special character";
    }

    if (!values.re_password) {
      errors.re_password = "Required";
    } else if (values.password !== values.re_password) {
      errors.re_password = "Passwords aren't same";
    }

    if (!values.date) {
      errors.date = "Required";
    } else if (calcAge < 18) {
      errors.date = "you must be 18+";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const inputDate = new Date(formik.values.date);
  const realAge = new Date() - inputDate;
  const calcAge = Math.floor(realAge / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <Fragment>
      <section className={classes.login}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.name}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={classes.error}>{formik.errors.name}</div>
            ) : null}
          </div>

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

          <div className={classes.email}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
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

          <div className={classes.email}>
            <label htmlFor="re_password">Re-Password</label>
            <input
              type="password"
              id="re_password"
              name="re_password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.re_password}
            />
            {formik.touched.re_password && formik.errors.re_password ? (
              <div className={classes.error}>{formik.errors.re_password}</div>
            ) : null}
          </div>

          <div className={classes.date}>
            <label thmlfor="date">Birth Date </label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className={classes.error}>{formik.errors.date}</div>
            ) : null}
          </div>

          <div>
            <span>Alredy have account of MK Shop?</span>
            <Link to="/login"> Sign In</Link>
          </div>

          <button type="submit" className={classes.button}>
            Register
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default SignUp;
