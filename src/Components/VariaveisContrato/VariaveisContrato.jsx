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
import ArrowDown from '../../Assets/SVG/arrow-down.svg'
import Search from '../../Assets/SVG/search.svg'

import './VariaveiaContrato.scss';
import Modal from './Modal';


const VariaveisContrato = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [nome, setNome] = React.useState();
  const [variavel, setVariavel] = React.useState();
  const [descricao, setDescricao] = React.useState();
  const [categoriasMobile, setCategoriasMobile] = React.useState();

  const searchClient = algoliasearch('89C7L2D0QR', 'eb362a15143717c276fb2564b952f880');
  
  function Hit({ hit }) {
    return (
      <article className='hit-wrap'>
        <div className="hit" onClick={() => handleOpenModal(hit)}>
          <div className="hit-content">
            <div>
              <div className="hit-name">{hit.nome}</div>
              <div className="hit-description copy-content">{hit.variavel}</div>
            </div>
          </div>
        </div>
        <ClicktoCopy copyText={hit.variavel} />
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

  function handleOpenModal(hit){
    if(hit){
      setIsOpen(!isOpen);
      setNome(hit.nome);
      setVariavel(hit.variavel);
      setDescricao(hit.descricao);
    }else{
      setIsOpen(false);
    }
  }

  function handleCategoriasMobile(){
    setCategoriasMobile(!categoriasMobile);
  }

  return (
    <div className='container'>
      <InstantSearch searchClient={searchClient} indexName="producao">
      <Configure hitsPerPage={40} />
      <div className="searchBox">
        <div className="searchBox--icon">
          <img src={Search} alt="" />
        </div>
        <SearchBox placeholder="Digite o nome da variável Ex:Estado Civil"  searchAsYouType={true} autoFocus={false} />
      </div>
      <div className="variaveis-wrap">
        <div className="--left-column">
          <h3 className='categorias-title'>Categorias</h3>
          <button className={`btn-collapse-categoria ${categoriasMobile ? 'active' : ''}`} onClick={handleCategoriasMobile}>
            Ver Categorias
            <img src={ArrowDown} alt="" />
          </button>
          <RefinementList attribute="categoria" className={categoriasMobile ? 'active' : ''} sortBy={['name:asc']} limit={30}  />
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
    <Modal
      isOpen={isOpen}
      onClick={handleOpenModal}
      nome={nome}
      variavel={variavel}
      descricao={descricao}
    />
    </div>
  )
}

export default VariaveisContrato