# Boas Práticas para Next.js

1. **Estrutura de Pastas**
   - Organize componentes, páginas e estilos em pastas separadas.
   - Use a pasta `components` para componentes reutilizáveis.

2. **Rotas e Páginas**
   - Utilize o sistema de rotas do Next.js (`app` directory).
   - Prefira rotas dinâmicas para conteúdos variáveis.

3. **SEO**
   - Use o componente `Head` para definir meta tags.

4. **Performance**
   - Implemente lazy loading para imagens e componentes pesados.
   - Utilize o `Image` do Next.js para otimização de imagens.

5. **API Routes**
   - Centralize lógica de backend em rotas API (`pages/api`).
   - Valide dados recebidos nas rotas.

6. **TypeScript**
   - Prefira TypeScript para tipagem estática e segurança.

7. **Ambiente**
   - Use variáveis de ambiente via `.env.local`.
   - Nunca exponha segredos no frontend.

8. **Acessibilidade**
   - Siga boas práticas de acessibilidade (alt em imagens, labels em inputs).

9.  **Documentação**
    - Documente componentes e funções importantes.
