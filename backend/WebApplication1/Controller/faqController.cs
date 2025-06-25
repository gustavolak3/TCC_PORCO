using API_POUPAPORCO.DAO;
using API_POUPAPORCO.MODEL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_POUPAPORCO.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaqController : ControllerBase
    {
        #region POST - Cadastrar FAQ
        [HttpPost]
        public IActionResult CadastrarFaq([FromBody] Suporte faq)
        {
            try
            {
                var dao = new FaqDAO();
                dao.cadsuporte(faq);
                return StatusCode(201, new { mensagem = "FAQ cadastrado com sucesso!" });
            }
            catch (Exception erro)
            {
                return StatusCode(400, new { erro = erro.Message.ToString() });
            }
        }
        #endregion
    }
}
