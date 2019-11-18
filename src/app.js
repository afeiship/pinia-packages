import React from 'react';
import HelloWorld from '@/components/hello-world';
import ColorfulButton from '@/components/colorful-button';
import InputApp from '@/components/input-attrs';

export default class extends React.Component {
  render() {
    return (
      <div className="hello">
        <h1>Hello world!</h1>
        <p>It works!</p>
        <HelloWorld />
        <ColorfulButton />
        <InputApp />
      </div>
    );
  }
}
