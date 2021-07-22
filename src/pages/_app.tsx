import NextApp, { AppProps } from 'next/app';
import { AppDataContext } from 'src/client/ssr/appData';
import { AppData } from 'src/shared/types/app-data';

class App extends NextApp<AppProps> {
  appData: AppData;

  constructor(props: AppProps) {
    super(props);

    this.appData = props.pageProps.appData || {};
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppDataContext.Provider value={this.appData}>
        <Component {...pageProps} />
      </AppDataContext.Provider>
    );
  }
}

export default App;
