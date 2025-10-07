import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import '../styles/perfil.css';


function Perfil({ user, onLogout }) {
    const navigate = useNavigate();

    // Função de logout com SweetAlert
    const handleLogoutClick = () => {
        Swal.fire({
            title: 'Você tem certeza?',
            text: "Sua sessão será encerrada.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sim, sair!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                onLogout();
                navigate('/'); 
            }
        });
    };

    // Se não estiver logado
    if (!user) {
        return (
            <div style={{ textAlign: 'center', margin: '50px' }}>
                <h2>Por favor, faça o login para ver seu perfil.</h2>
                <button onClick={() => navigate('/Login')}>Ir para Login</button>
            </div>
        );
    }

    return (
        <section className="perfil" id="perfil">
            <div className="perfil-container">
                
                {/* Foto de perfil */}
                <div className="foto_perfil">
                    <img 
                        className="perfil-foto" 
                        src={user.foto || "./public/images/fotousuario.jpg"} 
                        alt="Foto de perfil" 
                    />
                </div>
                <button type="button" className="perfil-btn btn-editar">
                    Carregar foto de perfil
                </button>

                {/* Dados do usuário */}
                <h2 className="perfil-nome">{user.firstName}</h2>
                <p className="perfil-bio">
                    {user.userType === "Farmer" 
                        ? "Agricultor cadastrado na plataforma." 
                        : "ONG/Consumidor ativo no AgroTech."}
                </p>

                <div className="perfil-info">
                    <p><strong>Nome:</strong> {user.firstName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Tipo:</strong> {user.userType}</p>
                    <p><a href="#!">Alterar senha</a></p>
                </div>

                {/* Botão de sair */}
                <button 
                    onClick={handleLogoutClick} 
                    className="perfil-btn btn-sair"
                >
                    Sair
                </button>
            </div>

            {/* Histórico de produtos */}
            <div className="historico">
                <h2 className="label_historico">Histórico de Compras/Vendas</h2>
                <div className="produtos">
                    <div className="produto">
                        <img src="./public/images/tomate.png" alt="Tomate" />
                        <div className="dados_do_produto">
                            <h3>Tomate</h3>
                            <p>Local: São Paulo, SP</p>
                            <p>Validade: 01/01/2025</p>
                        </div>
                    </div>
                    <div className="produto">
                        <img src="./public/images/alface.png" alt="Alface" />
                        <div className="dados_do_produto">
                            <h3>Alface</h3>
                            <p>Local: Santos, SP</p>
                            <p>Validade: 01/01/2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Perfil;
