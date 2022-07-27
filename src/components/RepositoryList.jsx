import { RepositoryItem } from './RepositoryItem';

const repositoryName = 'unform';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem repository="Repositorio 1" />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
