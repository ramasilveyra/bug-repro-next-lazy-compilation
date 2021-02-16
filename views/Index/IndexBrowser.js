import React from 'react';

export default function Home() {
  const onClick = () => {
    console.log('loading module')
    import('../../lib/some-module');
  };
  return <div>Hello <button onClick={onClick}>Load Module</button></div>;
}
