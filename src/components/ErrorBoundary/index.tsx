import { Component } from 'react';

export default class ErrorBoundary extends Component<any, any> {

  constructor(props: {}) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div style={{ display: 'flex', width: '18rem', margin: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg height="30" viewBox="0 0 512 512" width="30">
              <g>
                <path d="m507.606 145.568-141.174-141.174c-2.813-2.813-6.628-4.394-10.606-4.394h-199.652c-3.978 0-7.793 1.581-10.606 4.394l-141.174 141.174c-2.813 2.813-4.394 6.628-4.394 10.606v199.651c0 3.978 1.581 7.793 4.394 10.606l141.174 141.174c2.813 2.813 6.628 4.394 10.606 4.394h199.651c3.978 0 7.793-1.581 10.606-4.394l141.174-141.174c2.813-2.813 4.394-6.628 4.394-10.606v-199.651c.001-3.978-1.58-7.793-4.393-10.606z" fill="#f25a3c" />
                <path d="m512 156.17v199.66c0 3.97-1.58 7.79-4.39 10.6l-141.18 141.18c-2.81 2.81-6.63 4.39-10.6 4.39h-99.83v-512h99.83c3.97 0 7.79 1.58 10.6 4.39l141.18 141.18c2.81 2.81 4.39 6.63 4.39 10.6z" fill="#e43539" />
                <path d="m237.171 106h37.658c8.728 0 15.613 7.422 14.958 16.126l-12.793 170c-.589 7.826-7.11 13.874-14.958 13.874h-12.073c-7.848 0-14.369-6.049-14.958-13.874l-12.792-170c-.654-8.704 6.23-16.126 14.958-16.126z" fill="#e9f3fb" />
                <path d="m289.79 122.13-12.8 170c-.58 7.82-7.11 13.87-14.95 13.87h-6.04v-200h18.83c8.73 0 15.61 7.42 14.96 16.13z" fill="#d6e9f8" />
                <path d="m226.05 375.95v.1c0 16.541 13.409 29.95 29.95 29.95 16.541 0 29.95-13.409 29.95-29.95v-.1c0-16.541-13.409-29.95-29.95-29.95-16.541 0-29.95 13.409-29.95 29.95z" fill="#e9f3fb" />
                <path d="m285.95 375.95v.1c0 8.27-3.35 15.76-8.77 21.18s-12.91 8.77-21.18 8.77v-60c16.54 0 29.95 13.41 29.95 29.95z" fill="#d6e9f8" />
              </g>
            </svg>
          </div>
          <div style={{ paddingLeft: '.5rem' }}>
            An error has been detected. We are already working on it
          </div>
        </div>
      );
    }

    const { children } = this.props;
    return children;
  }
}
