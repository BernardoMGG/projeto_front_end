import { Paginas } from "./style";

const Paginacao = ({ currentPage, totalPages, onPageChange }) => {
  return (

    <Paginas>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </Paginas>
  );
};

export default Paginacao;
