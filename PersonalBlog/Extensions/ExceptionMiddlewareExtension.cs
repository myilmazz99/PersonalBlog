using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.Extensions.Logging;

namespace PersonalBlog.Extensions
{
    public static class ExceptionMiddlewareExtension
    {
        public static void ConfigureExceptionHandler(this IApplicationBuilder app, ILogger<Startup> logger)
        {

            app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (contextFeature != null)
                    {
                        await Task.Run(() =>
                        {
                            Exception ex = CheckInnerException(contextFeature.Error);
                            logger.LogError(ex.Message);
                        });

                        context.Response.StatusCode = 500;
                    }
                });
            });
        }

        private static Exception CheckInnerException(Exception ex)
        {
            if (ex.InnerException != null) CheckInnerException(ex.InnerException);

            return ex;
        }
    }
}
