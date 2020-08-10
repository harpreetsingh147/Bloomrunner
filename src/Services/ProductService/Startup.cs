using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CategoryService.config;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ProductService.Models;
using ProductService.Repositories;

namespace ProductService
{
    public class Startup
    {
        private ConfigurationSetting _configurationSetting;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //ConfigureConsul(services);
            _configurationSetting = services.RegisterConfiguration(Configuration);
            services.AddConsulConfig(_configurationSetting);
            string connectionString = Configuration.GetConnectionString("AuthConnection");
            services.AddControllers().AddNewtonsoftJson();
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
             {
                 builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
             }));
            services.AddAuthentication("Bearer")
               .AddJwtBearer("Bearer", config =>
               {
                   config.Authority = "https://localhost:9001/";
                   config.Audience = "Products";
               });
            services.AddControllers();
            services.AddApiVersioning(x =>
            {
                x.DefaultApiVersion = new ApiVersion(1, 0);
                x.AssumeDefaultVersionWhenUnspecified = true;
                x.ReportApiVersions = true;
            });
            services.AddOptions<AppConnection>().Bind(Configuration.GetSection("AppConnection"));
            services.AddTransient<IProductRepository, ProductService.Repositories.ProductService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("MyPolicy");

            app.UseConsul(_configurationSetting);

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
        //private void ConfigureConsul(IServiceCollection services)
        //{
        //    var serviceConfig = Configuration.GetServiceConfig();

        //    services.RegisterConsulServices(serviceConfig);
        //}
    }
}
