import { RouteHandler } from '../components/router.js';

export const pagamentosPage: RouteHandler = () => `
  <h1 class="page-title">Pagamentos</h1>

  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-card-label">Recebido este mês</span>
      <span class="stat-card-value">R$ 12.600</span>
      <span class="stat-card-sub positive">+8% vs anterior</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-label">Pendente</span>
      <span class="stat-card-value">R$ 1.500</span>
      <span class="stat-card-sub negative">5 cobranças</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-label">Inadimplência</span>
      <span class="stat-card-value">10,4%</span>
      <span class="stat-card-sub negative">+2% vs anterior</span>
    </div>
  </div>

  <div class="table-container">
    <div class="table-header">
      <h3>Histórico de Pagamentos</h3>
      <button class="btn btn-primary">+ Registrar Pagamento</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Aluno</th>
          <th>Valor</th>
          <th>Vencimento</th>
          <th>Pagamento</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Maria Silva</td>
          <td>R$ 300,00</td>
          <td>05/02/2026</td>
          <td>05/02/2026</td>
          <td><span class="badge badge-success">Pago</span></td>
        </tr>
        <tr>
          <td>João Santos</td>
          <td>R$ 200,00</td>
          <td>05/02/2026</td>
          <td>04/02/2026</td>
          <td><span class="badge badge-success">Pago</span></td>
        </tr>
        <tr>
          <td>Ana Costa</td>
          <td>R$ 300,00</td>
          <td>05/02/2026</td>
          <td>—</td>
          <td><span class="badge badge-warning">Pendente</span></td>
        </tr>
        <tr>
          <td>Carlos Oliveira</td>
          <td>R$ 200,00</td>
          <td>05/01/2026</td>
          <td>—</td>
          <td><span class="badge badge-danger">Atrasado</span></td>
        </tr>
        <tr>
          <td>Fernanda Lima</td>
          <td>R$ 300,00</td>
          <td>05/02/2026</td>
          <td>03/02/2026</td>
          <td><span class="badge badge-success">Pago</span></td>
        </tr>
      </tbody>
    </table>
  </div>
`;
