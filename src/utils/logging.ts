

export const logInfo = (logger: string, message: string, object?: any) => {
  if (process.env.NODE_ENV !== "production") {
    var time = new Date().toJSON();
    console.info(`[${time}][${logger}] ${message}`, object? object:'');
  }
};
export const logWarning = (logger: string, message: string, object?: any) => {
  if (process.env.NODE_ENV !== "production") {
    var time = new Date().toJSON();
    console.warn(`[${time}][${logger}] ${message}`, object? object:'');
  }
};

export const logError = (logger: string, message: string, object?: any) => {
  // if (process.env.NODE_ENV !== "production") {
    var time = new Date().toJSON();
    console.error(`[${time}][${logger}] ${message}`, object? object:'');
  // }
};