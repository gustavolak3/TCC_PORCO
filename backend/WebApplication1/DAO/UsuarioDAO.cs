using API_POUPAPORCO.MODEL;

using Dapper;
using Org.BouncyCastle.Crypto.Digests;

namespace API_POUPAPORCO.DAO
{
    public class UsuarioDAO
    {
        #region cadastro
        public void Cadastrar(Usuario usuario)
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "insert INTO usuario (nome,senha) Values (@Nome,@Senha)";

            conexao.Execute(sql, usuario);
        }
        #endregion
        #region atualizar senha
        public void Atualizar(Usuario usuario)
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "update usuarios SET nome = @Nome, senha = @Senha WHERE id = @id";

            conexao.Execute(sql, usuario);
        }
        #endregion
        #region excluir 
        public void Excluir(int Id)
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "delete FROM usuario WHERE id = @Id";
            conexao.Execute(sql, Id);
        }
        #endregion
        #region puxar todos 
        public IEnumerable<Usuario> ObterTodos()
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "SELECT * FROM usuario";

            return conexao.Query<Usuario>(sql);
        }
        #endregion
        public int? Login(string nome, string senha)
        {
            //1 passo - Abrir a conexão    
            using var conexao = ConnectionFactory.Build();
            //2 passo - Criar o comando SQL
            var sql = "SELECT * FROM usuario WHERE nome = @nome AND senha = @senha";
            //3 passo - Executar o comando SQL
            var id = conexao.QueryFirstOrDefault<int>(sql, new { nome = nome, senha = senha });

            return id;
        }
    }
}
