// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react'. Did you mean to set th... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react-syntax-highlighter'. Did... Remove this comment to see the full error message
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react-syntax-highlighter/dist/... Remove this comment to see the full error message
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { basicExample } from './snippets/snippets';

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '../../src'. Did you mean to se... Remove this comment to see the full error message
import Modali, { useModali } from '../../src';
import Button from './Button';

const BasicExample = () => {
  const [exampleModal, toggleExampleModal] = useModali();
  return (
    <div className="row mt-5">
      <div className="col-12">
        <h4>
          Basic Example
        </h4>
      </div>
      <div className="col-12 mt-2">
        <Button handleClick={toggleExampleModal}>
          Click me to open a basic modal
        </Button>
      </div>
      <div className="col-12">
        <SyntaxHighlighter language="jsx" style={okaidia}>{basicExample}</SyntaxHighlighter>
      </div>
      <Modali.Modal {...exampleModal}>
        <div className="row my-3">
          <div className="col-12 d-flex justify-content-center">
            <p>
              Hi, I'm a Modal! 👋
            </p>
          </div>
        </div>
      </Modali.Modal>
    </div>
  );
};
export default BasicExample;
