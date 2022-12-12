import { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useFormik } from "formik";
import AuthContext from "../../store/Auth-context";

const SignIn = () => {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      await ctx.signInHandler(values.email, values.password);
      alert("You Sign in successfully");
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  const validate = (values) => {
    let errors = {};

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

            <button type="submit" className={classes.button}>
              Sign In
            </button>
            <h4>
              Don't have Account? Please
              <Link className={classes.udenerline} to="/signup">
                Sign Up
              </Link>
            </h4>
          </form>
        </section>
      </div>
    </Fragment>
  );
};

export default SignIn;
