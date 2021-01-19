
import * as React from 'react';

export interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
      </>
    );
  }
}

export default App;
