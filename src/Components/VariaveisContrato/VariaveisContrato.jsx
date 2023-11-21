import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { 
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
  Pagination,
  Configure,
  CurrentRefinements,
  Stats,
  useStats
} from 'react-instantsearch';
import './VariaveiaContrato.scss';

const searchClient = algoliasearch('89C7L2D0QR', 'eb362a15143717c276fb2564b952f880');

function Hit({ hit }) {
  return (
    <article>
      <p>{hit.categoria[0]}</p>
      <h1>{hit.nome}</h1>
      <p>${hit.descricao}</p>
      <p>${hit.variavel}</p>
      <p>${hit.variavel_word}</p>
      <Highlight attribute="nome" hit={hit} />
    </article>
  );
}

function CustomStats() {
  let {
    nbPages,
    page,
  } = useStats();

  if(nbPages == 0){
    nbPages = 1;
  }

  return <div className='pagesCount'>Página {page + 1} de {nbPages}</div>;
}

const VariaveisContrato = () => {
  return (
    <div className='container'>
    <InstantSearch searchClient={searchClient} indexName="producao">
      <Configure hitsPerPage={40} />
      <div className="searchBox">
        <div className="searchBox--icon">
          <svg xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-13" viewBox="0 0 28 28" width="100%" height="100%">
            <path d="M24.5817 19.635L22.1667 17.1617C21.6472 16.6679 20.9919 16.3407 20.2851 16.2222C19.5783 16.1037 18.8521 16.1993 18.2 16.4967L17.15 15.4467C18.3873 13.7934 18.9524 11.7328 18.7315 9.67964C18.5106 7.6265 17.52 5.73326 15.9593 4.38107C14.3986 3.02887 12.3836 2.31812 10.32 2.39188C8.25627 2.46565 6.29715 3.31846 4.83697 4.77863C3.3768 6.23881 2.52399 8.19793 2.45022 10.2616C2.37646 12.3253 3.08721 14.3403 4.43941 15.901C5.7916 17.4617 7.68484 18.4522 9.73799 18.6731C11.7911 18.8941 13.8517 18.329 15.505 17.0917L16.5433 18.13C16.2109 18.7829 16.0918 19.5237 16.2028 20.2479C16.3137 20.9721 16.6491 21.6432 17.1617 22.1667L19.635 24.64C20.2913 25.2954 21.1808 25.6636 22.1083 25.6636C23.0358 25.6636 23.9254 25.2954 24.5817 24.64C24.915 24.314 25.1799 23.9248 25.3608 23.495C25.5416 23.0653 25.6347 22.6037 25.6347 22.1375C25.6347 21.6713 25.5416 21.2097 25.3608 20.78C25.1799 20.3502 24.915 19.961 24.5817 19.635ZM14.6883 14.6883C13.872 15.5027 12.8325 16.0568 11.7014 16.2807C10.5702 16.5045 9.39809 16.3882 8.33304 15.9462C7.268 15.5043 6.35783 14.7566 5.71751 13.7976C5.07718 12.8387 4.73544 11.7114 4.73544 10.5583C4.73544 9.40524 5.07718 8.27801 5.71751 7.31904C6.35783 6.36007 7.268 5.61239 8.33304 5.17045C9.39809 4.72851 10.5702 4.61212 11.7014 4.83601C12.8325 5.0599 13.872 5.614 14.6883 6.42833C15.2316 6.9702 15.6626 7.61392 15.9567 8.32261C16.2507 9.0313 16.4021 9.79105 16.4021 10.5583C16.4021 11.3256 16.2507 12.0854 15.9567 12.7941C15.6626 13.5028 15.2316 14.1465 14.6883 14.6883ZM22.9367 22.9367C22.8282 23.046 22.6992 23.1328 22.557 23.192C22.4148 23.2513 22.2624 23.2818 22.1083 23.2818C21.9543 23.2818 21.8018 23.2513 21.6597 23.192C21.5175 23.1328 21.3885 23.046 21.28 22.9367L18.8067 20.4633C18.6973 20.3549 18.6105 20.2258 18.5513 20.0837C18.4921 19.9415 18.4616 19.789 18.4616 19.635C18.4616 19.481 18.4921 19.3285 18.5513 19.1863C18.6105 19.0442 18.6973 18.9151 18.8067 18.8067C18.9151 18.6973 19.0442 18.6105 19.1863 18.5513C19.3285 18.4921 19.481 18.4616 19.635 18.4616C19.789 18.4616 19.9415 18.4921 20.0837 18.5513C20.2259 18.6105 20.3549 18.6973 20.4633 18.8067L22.9367 21.28C23.046 21.3885 23.1328 21.5175 23.1921 21.6597C23.2513 21.8018 23.2818 21.9543 23.2818 22.1083C23.2818 22.2624 23.2513 22.4148 23.1921 22.557C23.1328 22.6992 23.046 22.8282 22.9367 22.9367Z" fill="#409A75" fillRule="evenodd">
            </path>
          </svg>
        </div>
        <SearchBox placeholder="Digite o nome da variável Ex:Estado Civil"  searchAsYouType={true} autoFocus={false} />
      </div>
      <div className="variaveis-wrap">
        <div className="--left-column">
          <h3>Objetos</h3>
          <RefinementList attribute="categoria" sortBy={['count:desc', 'name:asc']} />
        </div>
        <div className="--right-column">
          <div className="--header">
            <Stats 
              translations={{
                rootElementText({ nbHits}) {
                  return <div className='stats'><h2>Variáveis de Contrato</h2> <span>{nbHits} Resultados</span></div>;
                }
              }}
            />
            <CustomStats />
          </div>
          <CurrentRefinements />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </div>
      
      
      
      
      
    </InstantSearch>
    </div>
  )
}

export default VariaveisContrato