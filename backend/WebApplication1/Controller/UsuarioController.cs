using System.Security.Cryptography.X509Certificates;
using API_POUPAPORCO.DAO;
using API_POUPAPORCO.DTO;
using API_POUPAPORCO.MODEL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mysqlx.Crud;

namespace API_POUPAPORCO.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        #region post
        [HttpPost]

        public IActionResult Cadastrar([FromBody] Usuario usuario)
        {
            try
            {
                var dao = new UsuarioDAO();
                dao.Cadastrar(usuario);
                return StatusCode(201, new { messagem = "Cadastrado com sucesso!" });

            }
            catch (Exception error)
            {
                return StatusCode(400, new { erro = error.Message.ToString() });
            }

        }


        #endregion




        //Método, rota e status
        [HttpGet]
        public IActionResult Listar()
        {
            var dao = new UsuarioDAO();
            var usuarios = dao.ObterTodos();

            return Ok(usuarios);
        }
        [HttpPost("login")]
        public IActionResult EfetuarLogin([FromBody] UsuarioDTO usuarioDTO)
        {
            try
            {
                var dao = new UsuarioDAO();
                var usuarioRetornado = dao.Login(usuarioDTO.nome, usuarioDTO.senha);
                if (usuarioRetornado == null)
                {
                    return StatusCode(401, new { erro = "Email ou senha inválidos" });
                }
                return StatusCode(200, new { mensagem = "Autenticado com sucesso!", idusuario = usuarioRetornado });
            }
            catch (Exception error)
            {
                return StatusCode(401, new { erro = error.Message.ToString() });
            }
        }
    }
}
