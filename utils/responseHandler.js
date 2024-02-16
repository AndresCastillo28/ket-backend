const sendResponse = (
  res,
  success,
  statusCode,
  message,
  data = {},
  error = {}
) => {
  if (success) {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  } else {
    res.status(statusCode).json({
      success: false,
      message,
      error,
    });
  }
};

module.exports = { sendResponse };
