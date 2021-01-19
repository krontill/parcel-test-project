import * as React from 'react';
import { Title } from './App.styled'

export interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <Title>
          Hello {name}
        </Title>
      </>
    );
  }
}

export default App;
