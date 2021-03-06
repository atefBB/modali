// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react'. Did you mean to set th... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react-syntax-highlighter'. Did... Remove this comment to see the full error message
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react-syntax-highlighter/dist/... Remove this comment to see the full error message
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { multiple } from './snippets/snippets';

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '../../src'. Did you mean to se... Remove this comment to see the full error message
import Modali, { useModali } from '../../src';
import Button from './Button';

const MultipleModalsExample = () => {
  const [firstModal, toggleFirstModal] = useModali();
  const [secondModal, toggleSecondModal] = useModali();
  return (
    <div className="row mt-5">
      <div className="col-12">
        <h4>
          Multiple Modals
        </h4>
      </div>
      <div className="col-12 mt-2">
        <Button handleClick={toggleFirstModal}>
          Click me to open the first modal
        </Button>
        <span className="ml-2">
          <Button handleClick={toggleSecondModal}>
            Click me to open the second modal
          </Button>
        </span>
      </div>
      <div className="col-12">
        <SyntaxHighlighter language="jsx" style={okaidia}>{multiple}</SyntaxHighlighter>
      </div>
      <Modali.Modal {...firstModal}>
        <div className="row my-3">
          <div className="col-12 d-flex justify-content-center">
            <h3>
              I'm the first modal 🔥
            </h3>
          </div>
        </div>
      </Modali.Modal>
      <Modali.Modal {...secondModal}>
        <div className="row my-3">
          <div className="col-12 d-flex justify-content-center">
            <h3>
              I'm the second modal ✌️
            </h3>
          </div>
        </div>
      </Modali.Modal>
    </div>
  );
};
export default MultipleModalsExample;
