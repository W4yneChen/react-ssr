export const useData = promise => {
  switch (promise.status) {
    case 'fulfilled':
      return promise.value;
    case 'rejected':
      throw promise.reason;
    case 'pending':
      throw promise;
    default: {
      promise.status = 'pending';
      promise.then(result => {
        promise.status = 'fulfilled';
        promise.value = result;
      }, reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      });
      throw promise;
    }
  }
}

let promise = null;

export const fetchData = () => {
  if (!promise) {
    promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('mock data');
      }, 5000);
    });
  }
  return promise;
}

export const resetPromise = () => promise = null;
