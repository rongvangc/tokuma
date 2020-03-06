import React from 'react'

import classes from './Spinner.module.css'

const Spinner = () => (
  <div className={classes.Spinner}>
    <img src="https://firebasestorage.googleapis.com/v0/b/tokuma-b8f4d.appspot.com/o/images%2F66cb261dbe95e8dd613137fddd3fec96.gif?alt=media&token=fbdb5b67-108b-4dd2-8a7d-f6c53ce2fddf" alt=""/>
    <h3>Wait a Seconds</h3>
  </div>
)

export default Spinner