import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div className="page-error">
      <h2 className="text-warning">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h2>
      <span className="small clearfix d-block text-center my-2">
        <Link href="/">
          <a className="text-light font-weight-bold">
            <i className="fas fa-home"></i> Back to Home
          </a>
        </Link>
      </span>
    </div>
  );
}

export default Error;
