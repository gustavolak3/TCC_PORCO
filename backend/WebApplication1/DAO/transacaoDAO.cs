using API_POUPAPORCO.MODEL;
using Dapper;

namespace API_POUPAPORCO.DAO
{
    public class transacaoDAO
    {
        public void cadtrans(Transacao transacao)
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "insert INTO transacao (id_usuario,tipo,descricao,data,valor) Values (@id_usuario,@tipo,@descricao,@data,@valor)";

            conexao.Execute(sql, transacao);
        }
    }
}
