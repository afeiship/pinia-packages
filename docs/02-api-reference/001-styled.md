# styled

```js
import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;
```

## override
```js
// import styled from 'styled-components'
const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`
// will override the background in TomatoButton Component
const TomatoButton = styled(Button)`
  background: tomato; 
`
render(
  <>
    <Button>I'm purple.</Button>
    <br />
    <TomatoButton>I'm red.</TomatoButton>
  </>
)
```


## get all support tags
```js
import styled from 'styled-components';

// ...
componentDidMount() {
  console.log('tags start');
  console.dir(styled);
  console.log('tags end');
}
// ...
```
