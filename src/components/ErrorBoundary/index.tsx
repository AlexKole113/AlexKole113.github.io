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
        <div >
          Похоже, что-то пошло не так
        </div>
      );
    }

    const { children } = this.props;

    return children;
  }
}
