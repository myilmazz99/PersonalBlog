using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Result
{
    public interface IResult
    {
        bool Success { get; set; }
        string Message { get; set; }
    }
}
