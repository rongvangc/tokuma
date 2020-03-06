import React, {Component, Fragment} from 'react';
import Toaster from './components/UI/Toaster/Toaster';

const withErrorHandler = ( WrappedComponent, axios ) => {
  return class extends Component {
    state = {
      error: null
    }

    UNSAFE_componentWillMount  () {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })
      this.reqInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error}) 
      })
      console.log(this.state);
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.reqInterceptor)
      console.log('Will Unmount', this.reqInterceptor, this.reqInterceptor);
    }


    render() {
      console.log(this.state.error);

      const errorImage = 'https://firebasestorage.googleapis.com/v0/b/tokuma-b8f4d.appspot.com/o/images%2F7c2826e0a694f7036eacd5e7f294e3de.gif?alt=media&token=b996b67f-74dc-49b3-8890-beee3dd72edb'
      
      return (
        <Fragment>
          {/* <Modal show={this.state.error} >
            {this.state.error ? this.state.error.message : null}
          </Modal> */}
          <Toaster show={this.state.error}>
            <img src={errorImage} alt="" style={{ width: '100%' }}/>
          </Toaster>
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}

export default withErrorHandler