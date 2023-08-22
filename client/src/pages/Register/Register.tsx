import { RegisterBulletPoints } from "../../components/register-bullet-points/RegisterBulletPoints";
import { RegisterForm } from "../../components/register-form/RegisterForm";
import "./Register.scss";

function Register() {
  return (
    <div className="register">
      <RegisterForm />
      <RegisterBulletPoints />
    </div>
  );
}

export default Register;
