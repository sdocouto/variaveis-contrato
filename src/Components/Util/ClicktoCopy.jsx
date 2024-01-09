import React from 'react'
import { Tooltip } from 'react-tooltip'
import Check from '../../Assets/SVG/check.svg'
import Copy from '../../Assets/SVG/copy.svg'

const ClicktoCopy = ({ copyText }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }
  
  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Tooltip id="clicktoCopy" style={{ backgroundColor: "#409A75", color: "white", borderRadius: '4px', fontSize: '12px'}} />
      <input type="hidden" value={copyText} readOnly />
      <button 
        data-tooltip-id="clicktoCopy"
        data-tooltip-content="Clique para copiar"
        data-tooltip-place="left"
        className={"btnCopy " + (isCopied ? '-copied' : '')} 
        onClick={handleCopyClick}
      >
        {isCopied ? 
           <img src={Check} alt="" />
          : 
          <img src={Copy} alt="" />
        }
      </button>
    </div>
  );
}

export default ClicktoCopy