export const getErrorMessage = (error: any): string => {
  let errorMsg: string = '';

  if (typeof error === 'string') {
    errorMsg = error;
  } else if (error instanceof Error) {
    errorMsg = error.message;
  }

  console.log(errorMsg);
  return errorMsg;
};
