import * as React from 'react';
import { Title } from './App.styled'
import { TableExample } from "./TableExample";

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
        <TableExample />
      </>
    );
  }
}

export default App;
