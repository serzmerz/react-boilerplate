function createCanceledException() {
  const exception = new Error('Promise was cancelled');
  exception.isCanceled = true;
  return exception;
}

/**
 * @param promise
 * @returns {{promise: Promise, cancel$(): void}}
 */
export function makeCancelable(promise) {
  let hasCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCanceled ? reject(createCanceledException()) : resolve(val)),
      error => (hasCanceled ? reject(createCanceledException()) : reject(error)),
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
}
