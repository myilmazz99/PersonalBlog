export const commentValidation = values => {
  let errors = {};
  if (!values.username) {
    errors.username = "İsim girmek zorunludur.";
  } else if (values.username.length > 30) {
    errors.username = "İsim alanı en fazla 30 karakter olmalıdır.";
  }

  if (!values.commentText) {
      errors.commentText = "Yorum kısmı boş bırakılamaz";
  } else if (values.commentText > 140) {
      errors.commentText = "Yorumunuz en fazla 140 karakter olmalıdır.";
  }

  return errors;
};
