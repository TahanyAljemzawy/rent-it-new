import React from 'react';

const Create = ()=>(
  <div className="container p-5">
    <h2> Wellcome</h2>
    <h2> Please enter your information to log in </h2>
    <form>
        <div className="form-group">
            <label className="text-muted"> Name: </label>
            <input type="text" className="form-control" placeholder="Enter Your name" required/>
        </div>
  
        <div className="form-group">
            <label className="text-muted"> Email </label>
            <input type="text" className="form-control" placeholder="Enter Your email" required/>
        </div>
        <div className="form-group">
            <label className="text-muted"> Password </label>
            <input type="text" className="form-control" placeholder="Enter Your Password" required/>
        </div>
        <div className="form-group">
            <label className="text-muted"> Confarm  </label>
            <input type="text" className="form-control" placeholder="Enter Your password again" required/>
        </div>
        <div>
            <button className="btn btn-primary"> Submit </button>
        </div>
    </form>
  </div>
);

export default Create;