import React from 'react';
import './css/reset.css';
import './css/listpage.css';
import Form from './form.js';

const Listpage = () => {
    return (
      <div className="list_wrapper">
        <div className="list_title">
            Listpage
        </div>
        <div className="list_form">
            <Form />
        </div>
        <div className="list_footer">
            <span>Copyright (c) 李彥杰 </span>
        </div>
      </div>
    );
}

export default Listpage;
