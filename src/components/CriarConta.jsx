import Header from './Header';
import Footer from './Footer';
import CriarForm from './CriarForm';
import '../styles/cadastro.css';

function CriarConta() {
    return (
        <div className="login-page-layout">
            <main className="login-main-content">
                <CriarForm />
            </main>
        </div>
    );
}

export default CriarConta;