using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Result
{
    public class DataResult<T> : Result
    {
        public DataResult(bool success, string message, T data) : base(success, message)
        {
            Data = data;
        }

        public DataResult(bool success, T data) : base(success)
        {
            Data = data;
        }

        public DataResult(bool success, string message) : base(success, message)
        {

        }

        public T Data { get; set; }
    }
}
