using Microsoft.AspNetCore.Identity;

namespace Core.Utilities
{
    public class IdentityErrorDescriberTurkish : IdentityErrorDescriber
    {
        public override IdentityError DuplicateEmail(string email)
        {
            return new IdentityError
            {
                Code = nameof(DuplicateEmail),
                Description = $"{email} email'i zaten kullanımda. Lütfen farklı bir email deneyiniz."
            };
        }

        public override IdentityError InvalidEmail(string email)
        {
            return new IdentityError
            {
                Code = nameof(InvalidEmail),
                Description = $"Email adresi{email} geçersizdir."
            };
        }

        public override IdentityError PasswordMismatch()
        {
            return new IdentityError
            {
                Code = nameof(PasswordMismatch),
                Description = "Girdiğiniz şifre ile hesap uyuşmuyor."
            };
        }

        public override IdentityError PasswordRequiresDigit()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresDigit),
                Description = "Şifreniz en az bir adet rakam içermelidir."
            }; ;
        }

        public override IdentityError PasswordRequiresLower()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresLower),
                Description = "Şifreniz en az bir adet küçük harf içermelidir."
            };
        }

        public override IdentityError PasswordRequiresNonAlphanumeric()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresNonAlphanumeric),
                Description = "Şifreniz en az bir adet harf ve rakam olmayan bir karakter içermelidir. (!, +, -, ?, ., ...)"
            };
        }

        public override IdentityError PasswordRequiresUpper()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresUpper),
                Description = "Şifreniz en az bir adet büyük harf içermelidir."
            };
        }

        public override IdentityError PasswordTooShort(int length)
        {
            return new IdentityError
            {
                Code = nameof(PasswordTooShort),
                Description = $"Şifreniz en az {length} karakter uzuluğunda olmalıdır."
            };
        }

        public override IdentityError DuplicateUserName(string userName)
        {
            return new IdentityError
            {
                Code = nameof(DuplicateUserName),
                Description = $"Kullanıcı adı {userName} zaten kullanımda. Farklı bir kullanıcı adı deneyiniz."
            };
        }

        public override IdentityError InvalidUserName(string userName)
        {
            return new IdentityError { Code = nameof(userName), Description = $"Kullanıcı adı {userName} geçersizdir." };
        }
    }
}
