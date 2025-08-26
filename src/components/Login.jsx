import Header from './Header';
import Footer from './Footer';
import LoginForm from './Login_form';
import '../styles/cadastro.css'; 

function Login() {
  return (
    <div className="login-page-layout">
      <Header />

      <main className="login-main-content">
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
}

export default Login;