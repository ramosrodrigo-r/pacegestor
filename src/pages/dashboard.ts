import { RouteHandler } from '../components/router.js';

export const dashboardPage: RouteHandler = () => `
  <h1 class="page-title">Dashboard</h1>

  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-card-label">Total de Alunos</span>
      <span class="stat-card-value">48</span>
      <span class="stat-card-sub positive">+3 este mês</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-label">Alunos Ativos</span>
      <span class="stat-card-value">42</span>
      <span class="stat-card-sub">87.5% do total</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-label">Receita Mensal</span>
      <span class="stat-card-value">R$ 12.600</span>
      <span class="stat-card-sub positive">+8% vs mês anterior</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-label">Pagamentos Pendentes</span>
      <span class="stat-card-value">5</span>
      <span class="stat-card-sub negative">R$ 1.500 em aberto</span>
    </div>
  </div>

  <div class="table-container">
    <div class="table-header">
      <h3>Atividade Recente</h3>
    </div>
    <table>
      <thead>
        <tr>
          <th>Aluno</th>
          <th>Evento</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Maria Silva</td>
          <td>Pagamento recebido</td>
          <td>05/02/2026</td>
          <td><span class="badge badge-success">Concluído</span></td>
        </tr>
        <tr>
          <td>João Santos</td>
          <td>Novo cadastro</td>
          <td>04/02/2026</td>
          <td><span class="badge badge-success">Ativo</span></td>
        </tr>
        <tr>
          <td>Ana Costa</td>
          <td>Pagamento pendente</td>
          <td>03/02/2026</td>
          <td><span class="badge badge-warning">Pendente</span></td>
        </tr>
        <tr>
          <td>Carlos Oliveira</td>
          <td>Plano cancelado</td>
          <td>01/02/2026</td>
          <td><span class="badge badge-danger">Cancelado</span></td>
        </tr>
      </tbody>
    </table>
  </div>
`;
