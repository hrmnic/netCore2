using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace API.Core.Specifications
{
    public interface ISpecification<T>
    {
        Expression<Func<T,bool>> Criteria { get; }
        List<Expression<Func<T,object>>> Includes { get; }
        Expression<Func<T,object>> OrderBy { get; }
        Expression<Func<T,object>> OrderByDescending { get; }
        int Take { get; } //sayfada kaç ürün gösterilecek onu tutar
        int Skip { get; } //atlanacak ürün sayısı 
        bool IsPagingEnabled { get; } //sayfalama yapılsın mı yapılmasın mı


    }
}
