// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react'. Did you mean to set th... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react-dom'. Did you mean to se... Remove this comment to see the full error message
import { render } from 'react-dom';

import Installation from './Installation';
import BasicExample from './BasicExample';
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '../../src'. Did you mean to se... Remove this comment to see the full error message
import Modali, { useModali } from '../../src';
import Button from './Button';
import MultipleModalsExample from './MultipleModalsExample';
import OptionsModalsExample from './OptionsModalsExample';
import CompleteExample from './CompleteExample';
import GithubRibbon from './GithubRibbon';

const App = () => {
  const [exampleModal, toggleExampleModal] = useModali({
    animated: true,
    title: 'Lobster Ipsum',
    message: 'This is the modal body. You can write whatever you want, or even pass in your own React component.',
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleExampleModal()}
      />,
      <Modali.Button
        label="Delete"
        isStyleDestructive
        onClick={() => toggleExampleModal()}
      />,
    ],
  });
  return (
    <React.Fragment>
      <GithubRibbon />
      <div className="container my-5">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <img src="https://upmostly.com/wp-content/uploads/modali-logo.png" alt="modali logo" style={{ height: '250px' }} />
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <Button handleClick={toggleExampleModal}>
              Click me to open a Modal!
            </Button>
            <Modali.Modal {...exampleModal} />
          </div>
        </div>
        <Installation />
        <BasicExample />
        <CompleteExample />
        <MultipleModalsExample />
        <OptionsModalsExample />
      </div>
    </React.Fragment>
  );
};

render(<App />, document.getElementById('root'));
