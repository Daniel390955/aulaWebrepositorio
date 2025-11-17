(function (window) {
  const Templates = {};

  // Página Início
  Templates.inicio = `
    <section class="grid" aria-labelledby="titulo-sobre">
      <article class="card col-8">
        <h2 id="titulo-sobre">Quem Somos</h2>
        <p>
          Somos uma organização sem fins lucrativos dedicada a transformar vidas
          por meio de ações sociais, voluntariado e doações.
          Nosso foco está em oferecer oportunidades e esperança para comunidades em vulnerabilidade.
        </p>
        <figure>
          <img src="img/prop02-111820.jpg" alt="Equipe de voluntários">
          <figcaption>Voluntários da Organização Solidária em ação.</figcaption>
        </figure>
      </article>

      <aside class="card col-4" aria-labelledby="titulo-contato">
        <h3 id="titulo-contato">Contato</h3>
        <address>
          <p><strong>Email:</strong> <a href="mailto:contato@organizacaosolidaria.org">contato@organizacaosolidaria.org</a></p>
          <p><strong>Telefone:</strong> (11) 99999-9999</p>
          <p><span class="badge">Atendimento das 9h às 18h</span></p>
        </address>
      </aside>
    </section>

    <section class="grid" aria-labelledby="titulo-projetos">
      <h2 id="titulo-projetos" class="col-12">Nossos Projetos</h2>

      <article class="card col-4">
        <figure>
          <img src="img/DSC06761-1024x683.jpg" alt="Entrega de alimentos para famílias">
          <figcaption>Mutirão de doações alimentares.</figcaption>
        </figure>
        <h3>Projeto Alimentação</h3>
        <p>Distribuímos cestas básicas e promovemos segurança alimentar em comunidades carentes.</p>
        <p><a class="btn" href="#projetos">Saiba Mais</a></p>
      </article>

      <article class="card col-4">
        <figure>
          <img src="img/como-elaborar-um-projeto-de-educacao-infantil-adequado.jpg" alt="Crianças em aula de reforço escolar">
          <figcaption>Turma de reforço educacional.</figcaption>
        </figure>
        <h3>Projeto Educação</h3>
        <p>Oferecemos aulas de reforço, alfabetização de adultos e oficinas culturais gratuitas.</p>
        <p><a class="btn" href="#projetos">Saiba Mais</a></p>
      </article>

      <article class="card col-4">
        <figure>
          <img src="img/prop02-111820.jpg" alt="Voluntários reformando casas populares">
          <figcaption>Reformas solidárias em moradias.</figcaption>
        </figure>
        <h3>Projeto Moradia</h3>
        <p>Reformamos e melhoramos moradias de famílias em situação de vulnerabilidade social.</p>
        <p><a class="btn" href="#projetos">Saiba Mais</a></p>
      </article>
    </section>

    <section class="card col-12" aria-labelledby="titulo-voluntario">
      <h2 id="titulo-voluntario">Junte-se a Nós</h2>
      <p>
        Quer fazer parte dessa transformação? Seja um voluntário e contribua para nossas ações sociais.  
        Seu tempo e dedicação fazem toda a diferença!
      </p>
      <p><a href="#cadastro" class="btn">Cadastre-se Agora</a></p>
    </section>
  `;

  // Página Projetos
  Templates.projetos = `
    <header class="card col-12">
      <h1>Projetos Sociais</h1>
      <p>
        Conheça as principais frentes de atuação da <strong>Organização Solidária</strong> —
        promovendo dignidade, inclusão e desenvolvimento comunitário.
      </p>
    </header>

    <section class="grid" aria-labelledby="titulo-projetos">
      <article id="alimentacao" class="card col-12" aria-labelledby="titulo-alimentacao">
        <h2 id="titulo-alimentacao">Projeto Alimentação</h2>
        <figure>
          <img src="img/DSC06761-1024x683.jpg" alt="Distribuição de alimentos a famílias carentes">
          <figcaption>Mutirão de entrega de cestas básicas em comunidades.</figcaption>
        </figure>
        <p>
          Este projeto atua na arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade social.  
          Além das doações, promovemos campanhas de conscientização sobre segurança alimentar e combate ao desperdício.
        </p>
        <ul>
          <li>Distribuição semanal de cestas básicas;</li>
          <li>Campanhas mensais de arrecadação;</li>
          <li>Parcerias com mercados e ONGs locais.</li>
        </ul>
      </article>

      <article id="educacao" class="card col-12" aria-labelledby="titulo-educacao">
        <h2 id="titulo-educacao">Projeto Educação</h2>
        <figure>
          <img src="img/Educador-Social-Voluntario-Foto-Wladimir-Luz.jpg" alt="Aulas comunitárias para jovens e adultos">
          <figcaption>Turmas de reforço escolar e oficinas educativas.</figcaption>
        </figure>
        <p>
          O Projeto Educação oferece reforço escolar, aulas de alfabetização de adultos e oficinas profissionalizantes.  
          Nosso objetivo é fortalecer a inclusão educacional e ampliar oportunidades de aprendizado.
        </p>
        <ul>
          <li>Reforço escolar gratuito para alunos do ensino fundamental e médio;</li>
          <li>Oficinas de leitura e escrita para adultos;</li>
          <li>Parcerias com professores voluntários.</li>
        </ul>
      </article>

      <article id="moradia" class="card col-12" aria-labelledby="titulo-moradia">
        <h2 id="titulo-moradia">Projeto Moradia</h2>
        <figure>
          <img src="img/prop02-111820.jpg" alt="Voluntários reformando casas populares">
          <figcaption>Reformas e melhorias em moradias de famílias carentes.</figcaption>
        </figure>
        <p>
          O Projeto Moradia tem como foco melhorar as condições habitacionais de famílias de baixa renda.  
          Atuamos com reformas, pequenas construções e adequações para acessibilidade.
        </p>
        <ul>
          <li>Mutirões de reforma com voluntários;</li>
          <li>Fornecimento de materiais de construção doados;</li>
          <li>Projetos de adaptação para pessoas com deficiência.</li>
        </ul>
      </article>
    </section>
  `;

  // Página Cadastro
  Templates.cadastro = `
    <header class="card col-12">
      <h1>Cadastro de Voluntário</h1>
      <p>
        Faça parte do nosso time de voluntários e ajude a transformar vidas!  
        Preencha o formulário abaixo com suas informações para participar dos nossos projetos sociais.
      </p>
      <figure>
        <img src="img/funiber-concurso-publicacion-solidaria-ideas-solidarias.jpg" alt="Voluntários em ação">
        <figcaption>Junte-se à nossa rede solidária.</figcaption>
      </figure>
    </header>

    <section class="card col-12" aria-labelledby="titulo-form">
      <h2 id="titulo-form">Formulário de Inscrição</h2>

      <form id="cadastro-form" method="post" novalidate>
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required placeholder="Seu nome completo">

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required placeholder="seuemail@email.com">

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00" pattern="^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$">

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000" pattern="^\\(?\\d{2}\\)?\\s?\\d{4,5}-\\d{4}$">

          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required>

          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" placeholder="Rua, número, bairro">

          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="^\\d{5}-?\\d{3}$">

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade">

          <label for="estado">Estado:</label>
          <input type="text" id="estado" name="estado">

          <button type="submit" class="btn" id="submitBtn">Enviar Cadastro</button>
        </fieldset>
      </form>
    </section>

    <dialog id="successDialog">
      <article class="modal-content">
        <h3>Cadastro Enviado!</h3>
        <p>Obrigado! Sua inscrição foi recebida com sucesso.</p>
        <menu>
          <button class="btn" id="closeModal">Fechar</button>
        </menu>
      </article>
    </dialog>
  `;

  window.Templates = Templates;
})(window);
