import React, { useState } from "react";
import { Document, Page } from "react-pdf";

import samplePDF from "./dummy2.pdf";
import mockData from "./mock.json";

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  console.log(samplePDF, "mock data");
  return (
    <>
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          renderAnnotationLayer={false}
          renderTextLayer={false}
          pageNumber={pageNumber}
        />
      </Document>
      <div style={{ marginBottom: "300px" }}>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type='button' disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type='button'
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
export default App;
