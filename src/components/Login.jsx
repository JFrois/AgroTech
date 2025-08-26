import Header from './Header';
import Footer from './Footer';
import LoginForm from './Login_form';
import '../styles/cadastro.css'; 

function Login() {
  return (
    <div className="login-page-layout">
      <main className="login-main-content">
        <LoginForm />
      </main>
    </div>
  );
}

export default Login;