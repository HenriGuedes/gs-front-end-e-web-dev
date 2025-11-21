import { useState } from "react";
import candidatos from "../data/profissionais.json";

export default function PerfisProfissionais() {
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);
  const [mensagemAtiva, setMensagemAtiva] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [filtro, setFiltro] = useState("");

  function abrirPerfil(pessoa) {
    setPerfilSelecionado(pessoa);
  }

  function fecharPerfil() {
    setPerfilSelecionado(null);
    setMensagemAtiva(false);
    setMensagem("");
  }

  function enviarMensagem() {
    if (mensagem.trim() === "") return;
    alert("Mensagem enviada com sucesso!");
    setMensagem("");
    setMensagemAtiva(false);
  }

  function recomendar() {
    alert("Profissional recomendado!");
  }

  const listaFiltrada = candidatos.filter((pessoa) => {
    const localizacao = (pessoa.localizacao || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const termoBusca = (filtro || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return localizacao.includes(termoBusca);
  });

  return (
    <div className="min-h-screen bg-[#F9F7F3] dark:bg-[#0D0D0D] px-10 py-16 flex flex-col items-center">
      <h1 className="text-5xl font-serif text-[#1F2937] dark:text-white mb-10 mt-6">
        Perfis Profissionais
      </h1>

      <div className="w-full max-w-2xl mb-14">
        <input
          type="text"
          placeholder="Buscar por cidade..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
          bg-white dark:bg-[#1A1A1A] text-gray-800 dark:text-gray-200 shadow-sm 
          outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl w-full">
        {listaFiltrada.map((pessoa) => (
          <div
            key={pessoa.id}
            onClick={() => abrirPerfil(pessoa)}
            className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-8 shadow-md border 
            border-[#E6E1D8] dark:border-gray-700 cursor-pointer hover:scale-[1.02] 
            hover:shadow-xl transition"
          >
            <div className="w-full h-48 rounded-2xl overflow-hidden bg-[#EDE7DF]">
              <img src={pessoa.foto} className="w-full h-full object-cover" />
            </div>

            <h2 className="text-2xl font-serif mt-5 text-[#1F2937] dark:text-white">
              {pessoa.nome}
            </h2>

            <p className="text-gray-600 dark:text-gray-300">{pessoa.cargo}</p>

            <p className="text-gray-600 dark:text-gray-300">
              {pessoa.localizacao}
            </p>
          </div>
        ))}
      </div>

      {perfilSelecionado && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center px-6 backdrop-blur-sm">
          <div
            className="bg-white dark:bg-[#1A1A1A] p-10 rounded-3xl max-w-3xl w-full shadow-xl 
          border border-[#E6E1D8] dark:border-gray-700"
          >
            <h2 className="text-4xl font-serif text-[#1F2937] dark:text-white">
              {perfilSelecionado.nome}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {perfilSelecionado.cargo}
            </p>

            <Info titulo="Localização" valor={perfilSelecionado.localizacao} />
            <Info titulo="Área" valor={perfilSelecionado.area} />

            <Lista
              titulo="Habilidades"
              itens={perfilSelecionado.habilidadesTecnicas}
            />
            <Lista titulo="Soft Skills" itens={perfilSelecionado.softskills} />

            <div className="flex gap-4 mt-8">
              <Botao texto="Recomendar" cor="bg-[#D8F1E3]" acao={recomendar} />

              <Botao
                texto="Enviar mensagem"
                cor="bg-[#E6DAF7]"
                acao={() => setMensagemAtiva(true)}
              />

              <button
                onClick={fecharPerfil}
                className="ml-auto text-gray-500 dark:text-gray-300 underline"
              >
                Fechar
              </button>
            </div>

            {mensagemAtiva && (
              <div className="mt-8">
                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="w-full h-32 p-3 rounded-xl border bg-[#F9F7F3] 
                  dark:bg-[#2A2A2A] outline-none text-black dark:text-white"
                />

                <div className="flex justify-between pt-4">
                  <Botao
                    texto="Enviar"
                    cor="bg-[#D8F1E3]"
                    acao={enviarMensagem}
                  />

                  <button
                    onClick={() => setMensagemAtiva(false)}
                    className="text-gray-500 dark:text-gray-300 underline"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ titulo, valor }) {
  return (
    <p className="text-[#1F2937] dark:text-gray-200">
      <span className="font-semibold">{titulo}: </span>
      {valor}
    </p>
  );
}

function Lista({ titulo, itens }) {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-black dark:text-gray-200">{titulo}</h3>

      <ul className="flex flex-wrap gap-2 mt-2">
        {itens.map((item, i) => (
          <li
            key={i}
            className="px-3 py-1 rounded-xl bg-[#F2E6CE] dark:bg-[#333333] 
            text-[#1F2937] dark:text-gray-200 text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Botao({ texto, acao, cor }) {
  return (
    <button
      onClick={acao}
      className={`${cor} px-5 py-3 rounded-xl font-semibold hover:scale-[1.03] 
      transition text-black dark:text-black`}
    >
      {texto}
    </button>
  );
}
