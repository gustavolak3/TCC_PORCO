using Dapper;

using API_POUPAPORCO.MODEL;
using Dapper;

namespace API_POUPAPORCO.DAO
{
    public class FaqDAO
    {
        public void cadsuporte(Suporte faq)
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "insert INTO faq (faqs) Values (@faq)";

            conexao.Execute(sql, faq);
        }
    }
}
