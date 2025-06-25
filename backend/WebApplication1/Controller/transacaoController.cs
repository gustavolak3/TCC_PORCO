using API_POUPAPORCO.DAO;
using API_POUPAPORCO.MODEL;
using Microsoft.AspNetCore.Mvc;

namespace API_POUPAPORCO.Controller
{
 

        [ApiController]
        [Route("api/[controller]")]
        public class TransacaoController : ControllerBase
        {
            [HttpPost]
            public IActionResult CadastrarTransacao([FromBody] Transacao transacao)
            {
                try
                {
                    // Validação básica
                    if (transacao == null || transacao.id_usuario <= 0)
                        return BadRequest("Dados inválidos ou usuário não identificado.");

                    // Chama o DAO para inserir no banco
                    var dao = new transacaoDAO();
                    dao.cadtrans(transacao);

                    return Ok(new { mensagem = "Transação cadastrada com sucesso!" });
                }
                catch (Exception ex)
                {
                    return StatusCode(500, new { erro = "Erro ao cadastrar transação.", detalhes = ex.Message });
                }
            }
        }
    }


