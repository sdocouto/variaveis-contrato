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
  ClearRefinements,
  Stats,
  useStats,
  HitsPerPage
} from 'react-instantsearch';
import ClicktoCopy from '../Util/ClicktoCopy';

import './VariaveiaContrato.scss';

const searchClient = algoliasearch('89C7L2D0QR', 'eb362a15143717c276fb2564b952f880');

function Hit({ hit }) {
  return (
    <article>
      {/* <p>{hit.categoria[0]}</p>
      <h1>{hit.nome}</h1>
      <p>${hit.descricao}</p>
      <p>${hit.variavel}</p>
      <p>${hit.variavel_word}</p>
      <Highlight attribute="nome" hit={hit} /> */}

      <div className="hit">
        <div className="hit-content">
          <div>
            <div className="hit-name">{hit.nome}</div>
            <div className="hit-description copy-content">{hit.variavel}</div>
          </div>
        </div>
        <button className="btnCopy">
          <ClicktoCopy copyText={hit.variavel} />
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.25 7.195C17.2405 7.11079 17.222 7.02783 17.195 6.9475V6.865C17.1509 6.77075 17.0921 6.68411 17.0208 6.60834L11.5208 1.10834C11.4451 1.03703 11.3584 0.978243 11.2642 0.934169C11.2368 0.930283 11.209 0.930283 11.1817 0.934169C11.0885 0.880765 10.9857 0.846485 10.8792 0.833336H7.16667C6.43732 0.833336 5.73785 1.12307 5.22212 1.63879C4.7064 2.15452 4.41667 2.85399 4.41667 3.58334V4.5H3.5C2.77065 4.5 2.07118 4.78973 1.55546 5.30546C1.03973 5.82118 0.75 6.52066 0.75 7.25V16.4167C0.75 17.146 1.03973 17.8455 1.55546 18.3612C2.07118 18.8769 2.77065 19.1667 3.5 19.1667H10.8333C11.5627 19.1667 12.2622 18.8769 12.7779 18.3612C13.2936 17.8455 13.5833 17.146 13.5833 16.4167V15.5H14.5C15.2293 15.5 15.9288 15.2103 16.4445 14.6945C16.9603 14.1788 17.25 13.4794 17.25 12.75V7.25C17.25 7.25 17.25 7.25 17.25 7.195ZM11.75 3.95917L14.1242 6.33334H12.6667C12.4236 6.33334 12.1904 6.23676 12.0185 6.06485C11.8466 5.89294 11.75 5.65979 11.75 5.41667V3.95917ZM11.75 16.4167C11.75 16.6598 11.6534 16.8929 11.4815 17.0649C11.3096 17.2368 11.0764 17.3333 10.8333 17.3333H3.5C3.25688 17.3333 3.02373 17.2368 2.85182 17.0649C2.67991 16.8929 2.58333 16.6598 2.58333 16.4167V7.25C2.58333 7.00689 2.67991 6.77373 2.85182 6.60182C3.02373 6.42991 3.25688 6.33334 3.5 6.33334H4.41667V12.75C4.41667 13.4794 4.7064 14.1788 5.22212 14.6945C5.73785 15.2103 6.43732 15.5 7.16667 15.5H11.75V16.4167ZM15.4167 12.75C15.4167 12.9931 15.3201 13.2263 15.1482 13.3982C14.9763 13.5701 14.7431 13.6667 14.5 13.6667H7.16667C6.92355 13.6667 6.69039 13.5701 6.51849 13.3982C6.34658 13.2263 6.25 12.9931 6.25 12.75V3.58334C6.25 3.34022 6.34658 3.10706 6.51849 2.93516C6.69039 2.76325 6.92355 2.66667 7.16667 2.66667H9.91667V5.41667C9.91667 6.14602 10.2064 6.84549 10.7221 7.36121C11.2378 7.87694 11.9373 8.16667 12.6667 8.16667H15.4167V12.75Z" fill="#409A75"/>
          </svg>
        </button>
      </div>
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
          <h3>Categorias</h3>
          <RefinementList attribute="categoria" sortBy={['name:asc']} limit={30}  />
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
          <div className="refinements">
            <CurrentRefinements title="My custom title" />
            <ClearRefinements 
              translations={{
                resetButtonText: 'Limpar busca',
              }}
            />
          </div>
          <Hits hitComponent={Hit} />
          <div className="pagination">
            <Pagination showFirst={false} showPrevious={false} showNext={false} showLast={false} />
            <HitsPerPage
              items={[
                { label: 'Exibir 10 por página', value: 10, default: true },
                { label: 'Exibir 20 por página', value: 20 },
                { label: 'Exibir 30 por página', value: 30 },
                { label: 'Exibir 50 por página', value: 50 },
                { label: 'Exibir 100 por página', value: 100 },
              ]}
            />
          </div>
        </div>
      </div>      
    </InstantSearch>

    </div>
  )
}

export default VariaveisContrato