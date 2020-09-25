using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Result
{
    public class SuccessDataResult<T> : DataResult<T>
    {
        public SuccessDataResult(string message, T data) : base(true, message, data)
        {

        }

        public SuccessDataResult(string message) : base(true, message)
        {

        }

        public SuccessDataResult(T data) : base(true, data)
        {

        }
    }
}
