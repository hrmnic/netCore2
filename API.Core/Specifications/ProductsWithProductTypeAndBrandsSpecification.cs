using API.Core.DbModels;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace API.Core.Specifications
{
    public class ProductsWithProductTypeAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithProductTypeAndBrandsSpecification(ProductSpecParams productSpecParams) //filtreleme
            : base(x =>
             (string.IsNullOrWhiteSpace(productSpecParams.Search) || x.Name.ToLower().Contains(productSpecParams.Search))
             &&
             (!productSpecParams.BrandId.HasValue || x.ProductBrandId == productSpecParams.BrandId)
                 &&
                 (!productSpecParams.TypeId.HasValue || x.ProductTypeId == productSpecParams.TypeId)
                 )

        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductType);
            //AddOrderBy(x => x.Name);   // ilerde id vs ye göre de sıralama(sort) böyle tek bir yerden olur

            ApplyPaging(productSpecParams.PageSize * (productSpecParams.PageIndex - 1), productSpecParams.PageSize); //sayfalama işlemi 



            if (!string.IsNullOrWhiteSpace(productSpecParams.Sort))  //bir değer girilmiş ve girilmiş değer mantıklı bir şeyse
            {
                switch (productSpecParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(x => x.Name);
                        break;

                }
            }
        }
        public ProductsWithProductTypeAndBrandsSpecification(int id)
            : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductType);
        }
    }
}

