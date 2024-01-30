import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { katex } from 'katex';
import 'katex/dist/katex.min.css';

const LaTeXCodeBlock = ({ latexCode }) => {
    const latexHtml = katex.renderToString(latexCode, {
        throwOnError: false
    });

    return (
        <SyntaxHighlighter language="latex" style={docco}>
            {latexHtml}
        </SyntaxHighlighter>
    );
};

export default LaTeXCodeBlock;