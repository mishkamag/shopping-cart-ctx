import { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useFormik } from "formik";
import AuthContext from "../../store/Auth-context";

const SignUp = () => {
  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    re_password: "",
  };

  const onSubmit = async (values) => {
    await ctx.createUserHandler(
      values.name,
      values.email,
      values.password,
      values.re_password
    );
    alert("succsefull");
    navigate("/signin");
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

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Fragment>
      <div className={classes.container}>
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

            <button type="submit" className={classes.button}>
              Register
            </button>
            <h4>
              You have Account? Please
              <Link to="/signin" className={classes.udenerline}>
                Sign In
              </Link>
            </h4>
          </form>
        </section>
      </div>
    </Fragment>
  );
};

export default SignUp;
