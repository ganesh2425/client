import React from 'react';
import Header from '../../config/Header';
import Sidebar from '../../config/Sidebar';

function QleFaqAdd() {
  return (
    <>
    <div className='container-scroller'>
    <Sidebar/>
      <div className='container-fluid page-body-wrapper'>
      <Header/>
        <div className='main-panel'>
          <div className='content-wrapper pb-0'>
            <div className='page-header flex-wrap'>
              <h3 className='mb-0'> QLE / FAQ </h3>
              <div className='d-flex'>

              </div>
            </div>

            <div className='card'>
              <div className='card-body overflow-hidden'>
                <div className='form-group'>
                  <label>Question</label>
                  <input
                    type='text'
                    className='form-control'
                    id=''
                    value=''
                  />
                </div>
                <div className='form-group'>
                  <label>Answer</label>
                  
                </div>
                
                <div className="text-right">
                    <a href="/qleFaq" className="btn btn-secondary btn-comm-save"> Cancel </a> 
                    <a href="/qleFaq" className="btn btn-primary ml-3 ms-3 "> Save </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default QleFaqAdd
