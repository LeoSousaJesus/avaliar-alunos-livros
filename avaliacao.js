var livros = [];

function adicionarLivro() {
  var nomeLivro = document.getElementById('nomeLivro').value;
  var nomeAutor = document.getElementById('nomeAutor').value;
  var avaliacao = parseFloat(document.getElementById('avaliacao').value);
  var resultado = document.getElementById('resultado');

  if (nomeLivro.trim() === '' || nomeAutor.trim() === '') {
    resultado.innerHTML = 'Por favor, insira o nome do livro e do autor.';
    return;
  }

  if (isNaN(avaliacao) || avaliacao < 0 || avaliacao > 10) {
    resultado.innerHTML =
      'Por favor, insira uma avaliação válida entre 0 e 10.';
    return;
  }

  var livro = {
    nome: nomeLivro,
    autor: nomeAutor,
    avaliacao: avaliacao,
  };

  livros.push(livro);

  mostrarLivros();
}

function mostrarLivros() {
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (livros.length === 0) {
    resultado.innerHTML = 'Nenhum livro cadastrado ainda.';
    return;
  }

  var melhorAvaliacao = livros[0];
  for (var i = 0; i < livros.length; i++) {
    var livro = livros[i];
    resultado.innerHTML += 'Livro: ' + livro.nome + '<br>';
    resultado.innerHTML += 'Autor: ' + livro.autor + '<br>';
    resultado.innerHTML +=
      'Avaliação: ' + livro.avaliacao.toFixed(1) + '<br><br>';

    if (livro.avaliacao > melhorAvaliacao.avaliacao) {
      melhorAvaliacao = livro;
    }
  }

  resultado.innerHTML +=
    'O livro com a melhor avaliação é: ' +
    melhorAvaliacao.nome +
    ' (Avaliação: ' +
    melhorAvaliacao.avaliacao.toFixed(1) +
    ')';
}
