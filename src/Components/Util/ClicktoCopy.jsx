import React from 'react'

const ClicktoCopy = ({ copyText }) => {
    const [isCopied, setIsCopied] = React.useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
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
        <input type="hidden" value={copyText} readOnly />
        {/* Bind our handler function to the onClick button property */}
        <button className={"btnCopy " + (isCopied ? '-copied' : '')} onClick={handleCopyClick}>
          {isCopied ? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check"><path fill="#0092E4" d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path></svg> 
            : 
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.25 7.195C17.2405 7.11079 17.222 7.02783 17.195 6.9475V6.865C17.1509 6.77075 17.0921 6.68411 17.0208 6.60834L11.5208 1.10834C11.4451 1.03703 11.3584 0.978243 11.2642 0.934169C11.2368 0.930283 11.209 0.930283 11.1817 0.934169C11.0885 0.880765 10.9857 0.846485 10.8792 0.833336H7.16667C6.43732 0.833336 5.73785 1.12307 5.22212 1.63879C4.7064 2.15452 4.41667 2.85399 4.41667 3.58334V4.5H3.5C2.77065 4.5 2.07118 4.78973 1.55546 5.30546C1.03973 5.82118 0.75 6.52066 0.75 7.25V16.4167C0.75 17.146 1.03973 17.8455 1.55546 18.3612C2.07118 18.8769 2.77065 19.1667 3.5 19.1667H10.8333C11.5627 19.1667 12.2622 18.8769 12.7779 18.3612C13.2936 17.8455 13.5833 17.146 13.5833 16.4167V15.5H14.5C15.2293 15.5 15.9288 15.2103 16.4445 14.6945C16.9603 14.1788 17.25 13.4794 17.25 12.75V7.25C17.25 7.25 17.25 7.25 17.25 7.195ZM11.75 3.95917L14.1242 6.33334H12.6667C12.4236 6.33334 12.1904 6.23676 12.0185 6.06485C11.8466 5.89294 11.75 5.65979 11.75 5.41667V3.95917ZM11.75 16.4167C11.75 16.6598 11.6534 16.8929 11.4815 17.0649C11.3096 17.2368 11.0764 17.3333 10.8333 17.3333H3.5C3.25688 17.3333 3.02373 17.2368 2.85182 17.0649C2.67991 16.8929 2.58333 16.6598 2.58333 16.4167V7.25C2.58333 7.00689 2.67991 6.77373 2.85182 6.60182C3.02373 6.42991 3.25688 6.33334 3.5 6.33334H4.41667V12.75C4.41667 13.4794 4.7064 14.1788 5.22212 14.6945C5.73785 15.2103 6.43732 15.5 7.16667 15.5H11.75V16.4167ZM15.4167 12.75C15.4167 12.9931 15.3201 13.2263 15.1482 13.3982C14.9763 13.5701 14.7431 13.6667 14.5 13.6667H7.16667C6.92355 13.6667 6.69039 13.5701 6.51849 13.3982C6.34658 13.2263 6.25 12.9931 6.25 12.75V3.58334C6.25 3.34022 6.34658 3.10706 6.51849 2.93516C6.69039 2.76325 6.92355 2.66667 7.16667 2.66667H9.91667V5.41667C9.91667 6.14602 10.2064 6.84549 10.7221 7.36121C11.2378 7.87694 11.9373 8.16667 12.6667 8.16667H15.4167V12.75Z" fill="#409A75"/></svg>
          }
        </button>
      </div>
    );
}

export default ClicktoCopy