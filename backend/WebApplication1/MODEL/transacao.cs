namespace API_POUPAPORCO.MODEL
{
    public class Transacao
    {
        public int id_usuario { get; set; }

        public int id { get; set; }
        public string tipo { get; set; } 
        
        public string descricao { get; set; }

        public DateTime data { get; set; }

        public string valor { get; set; }

    }
}
