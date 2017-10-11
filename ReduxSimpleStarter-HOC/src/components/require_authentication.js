import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    // 定義要存取的 context
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      console.log('jj');
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    // state 有變化時，呼叫
    componentWillUpdate(nextProps) {
      console.log('props:', this.props.authenticated);
      console.log('nextProps:', nextProps.authenticated);
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      /*  
     console.log(this.props.resources); // => resourceList
      */
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}

/* 
    // In some other location... Not in this file...
    // We want to use this HOC
    import Authentication; // This is my HOC
    import Resources; // This is the component I want to wrap

    const ComposedComponent = Authentication(Resources);

    // In some render method...
    <ComposedComponent resources={resourceList}/>
*/
