using API.Core.Interfaces;
using API.Infrastructure.Implements;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection services)
        {
            services.AddScoped<IProductRepository, ProductRepository>();  //dependency inj için
            services.AddScoped<IBasketRepository, BasketRepository>();//su basketrepository icindeki deger alamadigi icin boyle yapiyor
            services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>)));
            return services;
        }
    }
}
