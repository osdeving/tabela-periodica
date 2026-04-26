# tabela-periodica

Site estático com uma tabela periódica interativa e uma página complementar de compostos inorgânicos.

## Estrutura

- `index.html`: página principal da tabela periódica.
- `compostos_inorganicos_interativo.html`: página complementar com compostos inorgânicos.
- `tabela_periodica_interativa_sp_clean.css`: estilos da aplicação.
- `tabela_periodica_interativa_sp_clean.js`: lógica da tabela periódica, filtros e quiz.

## Rodando localmente

Use um servidor HTTP simples na raiz do projeto:

```bash
python3 -m http.server 4173
```

Depois acesse `http://localhost:4173`.

## Publicação

O repositório está configurado para publicar no GitHub Pages via GitHub Actions a cada push na branch `main`.
