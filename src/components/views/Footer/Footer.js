import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='text-center text-lg-left'>
      <div className='text-center p-3'>
        Copyright&copy;{' '}
        <a className='text-dark' href='https://github.com/asasn23'>
          PizzeriaApp
        </a>
        {' '}{new Date().getFullYear()}
      </div>
    </MDBFooter>
  );
}

export default Footer;