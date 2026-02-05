import { RouteHandler } from '../components/router.js';

export const alunosPage: RouteHandler = () => `
  <h1 class="page-title">Alunos</h1>

  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-card-label">Total</span>
      <span class="stat-card-value">48</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-label">Ativos</span>
      <span class="stat-card-value">42</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-label">Inativos</span>
      <span class="stat-card-value">6</span>
    </div>
  </div>

  <div class="table-container">
    <div class="table-header">
      <h3>Lista de Alunos</h3>
      <button class="btn btn-primary">+ Novo Aluno</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Plano</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Maria Silva</td>
          <td>maria@email.com</td>
          <td>Premium</td>
          <td><span class="badge badge-success">Ativo</span></td>
        </tr>
        <tr>
          <td>João Santos</td>
          <td>joao@email.com</td>
          <td>Básico</td>
          <td><span class="badge badge-success">Ativo</span></td>
        </tr>
        <tr>
          <td>Ana Costa</td>
          <td>ana@email.com</td>
          <td>Premium</td>
          <td><span class="badge badge-warning">Pendente</span></td>
        </tr>
        <tr>
          <td>Carlos Oliveira</td>
          <td>carlos@email.com</td>
          <td>Básico</td>
          <td><span class="badge badge-danger">Inativo</span></td>
        </tr>
        <tr>
          <td>Fernanda Lima</td>
          <td>fernanda@email.com</td>
          <td>Premium</td>
          <td><span class="badge badge-success">Ativo</span></td>
        </tr>
      </tbody>
    </table>
  </div>
`;
