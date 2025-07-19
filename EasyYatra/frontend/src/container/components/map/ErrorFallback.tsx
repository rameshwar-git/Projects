import React from 'react';

interface Props {
  error: { code: number; message: string };
}

const ErrorFallback: React.FC<Props> = ({ error }) => (
  <div role="alert" style={{ padding: '1rem', color: '#b00020' }}>
    <h3>Location Error</h3>
    <p>
      {error.message} ({error.code})
    </p>
    <p>
      Check browser permissions or enable location access, then refresh the
      page.
    </p>
  </div>
);

export default ErrorFallback;
