using System;
using Microsoft.AsNetCore.Mvc;
using NomeCompletoDevWeb.

namespace NomeCompletoDevWeb.Controllers
{
    [ApiController]
    public class NomecompretoDevWeb
    {
        [httpPost]
        public Nomes Post(NomeCliente nomeRecebido)
        {

            var nomeProcessado = new Nomes {
                NomeCompreto = $"{nomeRecebido.nome} {nomeRecebido.sobrenome}",
                NomeCatalogo = $"{nomeRecebido.sobrenome.ToUpper()}, {nomeRecebido.nome}",
            };

            return nomeProcessado;
        }
    }
}