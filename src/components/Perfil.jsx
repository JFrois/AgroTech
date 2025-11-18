import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import '../styles/perfil.css';

function Perfil({ user: initialUser, onLogout, historico = [] }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(initialUser); 
    const [isEditing, setIsEditing] = useState(false);
    const [nome, setNome] = useState(initialUser?.firstName || '');
    const [bio, setBio] = useState(initialUser?.bio || '');
    const [foto, setFoto] = useState(initialUser?.foto || '');

    useEffect(() => {
        setUser(initialUser);
        if (initialUser) {
            setNome(initialUser.firstName || '');
            setBio(initialUser.bio || '');
            setFoto(initialUser.foto || '');
        }
    }, [initialUser]);

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

    const handleSave = () => {
        const updatedUser = {
            ...user,
            firstName: nome,
            bio,
            foto
        };
        setUser(updatedUser);
        setIsEditing(false);
        Swal.fire('Sucesso!', 'Perfil atualizado com sucesso.', 'success');
    };

    if (!initialUser) {
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
                <div className="foto_perfil">
                    {isEditing ? (
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={e => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => setFoto(reader.result);
                                    reader.readAsDataURL(file);
                                }
                            }} 
                        />
                    ) : (
                        <img 
                            className="perfil-foto" 
                            src={foto || "/images/fotousuario.jpg"} 
                            alt="Foto de perfil" 
                        />
                    )}
                </div>

                {isEditing ? (
                    <>
                        <input 
                            type="text" 
                            value={nome} 
                            placeholder="Nome"    
                            onChange={e => setNome(e.target.value)} 
                        />
                        <textarea 
                            value={bio} 
                            placeholder="Digite sua bio"
                            onChange={e => setBio(e.target.value)} 
                        />
                    </>
                ) : (
                    <h2 className="perfil-nome">
                        {user?.firstName || 'Nome'}
                    </h2>
                )}

                <div className="perfil-info">
                    <p><strong>Email:</strong> {user?.email}</p>
                    <p><strong>Tipo:</strong> {user?.userType}</p>
                    <p><a href="#!">Alterar senha</a></p>
                </div>

                {isEditing ? (
                    <button onClick={handleSave} className="perfil-btn btn-editar">Salvar</button>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="perfil-btn btn-editar">Editar Perfil</button>
                )}
                <button onClick={handleLogoutClick} className="perfil-btn btn-sair">Sair</button>
            </div>
            
            <div className="historico">
                <h2 className="label_historico">Histórico do Usuário</h2>
                <div className="produtos">
                    

                    {historico && historico.length > 0 ? (
                        historico.map(item => (
                            <div className="produto" key={item.idHistorico || item.id}>
                                <img src={item.img} alt={item.nome} />
                                <div className="dados_do_produto">
                                    <h3>{item.nome} (Qtd: {item.quantidade})</h3>
                                    <p>Local: {item.local}</p>
                                    <p>Validade: {item.validade ? new Date(item.validade).toLocaleDateString('pt-BR') : 'Não definida'}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                            Seu histórico de pedidos está vazio.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Perfil;