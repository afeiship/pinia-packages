import React from 'react';
import HelloWorld from '@/components/hello-world';

export default class extends React.Component {
  render() {
    return (
      <div className="hello">
        <h1>Hello world!</h1>
        <p>It works!</p>
        <HelloWorld />
      </div>
    );
  }
}
