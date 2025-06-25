using System.Reflection.Metadata.Ecma335;
using MySql.Data.MySqlClient;

namespace API_POUPAPORCO.DAO
{
    public class ConnectionFactory
    {
       public static MySqlConnection Build()
        {
            return new MySqlConnection("Server=localhost;port=3306;database=poupaporco;uid=root;Pwd=root");
        }

    }
}
