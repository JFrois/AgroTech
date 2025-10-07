import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

function Perfil({ user, onLogout }) {
    const navigate = useNavigate();

    // 2. Modifique a função de logout
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
            // 3. Verifique se o usuário confirmou a ação
            if (result.isConfirmed) {
                onLogout();
                navigate('/'); // Redireciona para a home após o logout
            }
        });
    };

    if (!user) {
        return (
            <div style={{ textAlign: 'center', margin: '50px' }}>
                <h2>Por favor, faça o login para ver seu perfil.</h2>
                <button onClick={() => navigate('/Login')}>Ir para Login</button>
            </div>
        );
    }

    return (
        <div>
            <section className="perfil" id="perfil">
                <div className="configuracoes">
                    <div className="foto_perfil">
                        <img className="prof_pic" src="./src/images/profile_pic.png" alt="profile_pic" />
                    </div>
                    <button type="button" className="botao_foto_perfil">Carregar foto de perfil</button>
                    <div className="dados_box">
                        <div className="dados">
                            <ul>
                                <li><strong>Nome:</strong> {user.firstName}</li>
                                <li><strong>Email:</strong> {user.email}</li>
                                <li><strong>Tipo:</strong> {user.userType}</li>
                                <li><a href="#!">Alterar senha</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* O botão agora chama a nova função com o alerta */}
                    <button onClick={handleLogoutClick} className="btn-default" style={{ background: '#d9534f', marginTop: '20px' }}>
                        Sair
                    </button>
                </div>
                <div className="historico">
                    <h2 className="label_historico">Histórico de Compras/Vendas</h2>
                    <div className="produtos">
                        <div className="produto">
                            <img src="./src/images/tomate.png" alt="imagem_do_produto" />
                            <div className="dados_do_produto">
                                <h3>Tomate</h3>
                                <p>local: São Paulo, SP</p>
                                <p>validade: 01/01/2025</p>
                            </div>
                        </div>
                        <div className="produto">
                            <img src="./src/images/alface.png" alt="imagem_do_produto" />
                            <div className="dados_do_produto">
                                <h3>Alface</h3>
                                <p>local: Santos, SP</p>
                                <p>validade: 01/01/2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Perfil;