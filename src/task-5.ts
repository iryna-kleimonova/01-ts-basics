type OrderStatus = 'loading' | 'success' | 'error';

function logStatus(status: OrderStatus): void {
  if (status === 'loading') {
    console.log('Loading...');
  } else if (status === 'success') {
    console.log('Success!');
  } else if (status === 'error') {
    console.log('Something went wrong');
  }
}

logStatus('loading');
