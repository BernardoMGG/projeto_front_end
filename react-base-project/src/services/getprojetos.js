export const getProjetos = async () => {
    try {
      const response = await fetch('projetos.json'); // Caminho relativo à pasta public
      if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo JSON');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return { code: 400, message: "Erro ao buscar os projetos", original: error.message };
    }
  };
