using API.Core.DbModels;
using API.Core.Interfaces;
using API.Core.Specifications;
using API.Dtos;
using API.Helpers;
using API.Infrastructure.DataContext;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    //
    //https:localhost:5001/api/products/GetProduct
    //[Route("api/[controller]")]
    //[ApiController]
    public class ProductsController : BaseApiController
    {
        ////private readonly StoreContext _context;
        //private readonly IProductRepository _productRepository;
        private readonly IGenericRepository<Product> _productRepository;
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;

        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productRepository,
            IGenericRepository<ProductBrand> productBrandRepository,
            IGenericRepository<ProductType> productTypeRepository,IMapper mapper)
        {
            _productRepository = productRepository;
            _productBrandRepository = productBrandRepository;
            _productTypeRepository = productTypeRepository;
            //_context= context;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts([FromQuery]ProductSpecParams productspecParams)        //https://localhost:5001/api/products (GET)
        {
            var spec = new ProductsWithProductTypeAndBrandsSpecification(productspecParams);   //string sort,int? brandId,int? typeId parametreleri yerine

            var countSpec = new ProductWithFiltersForCountSpecification(productspecParams);

            var totalItems = await _productRepository.CountAsync(countSpec);
            var products = await _productRepository.ListAsync(spec);

            var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);
            
            return Ok(new Pagination<ProductToReturnDto>(productspecParams.PageIndex,productspecParams.PageSize,totalItems,data));
            
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDto>>  GetProduct(int id)       //https://localhost:5001/api/products/2 
        {
            var spec = new ProductsWithProductTypeAndBrandsSpecification(id);
            // return await _productRepository.GetEntityWithSpec(spec);
            var product = await _productRepository.GetEntityWithSpec(spec);
            //return new ProductToReturnDto
            {
                //Id = product.Id,
                //Name = product.Name,
                //Description = product.Description,
                //PictureUrl=product.PictureUrl,
                //Price=product.Price,
                //ProductBrand=product.ProductBrand != null ? product.ProductBrand.Name : string.Empty, //ternary if
                //ProductType=product.ProductType != null ? product.ProductType.Name : string.Empty
                return _mapper.Map<Product, ProductToReturnDto>(product);

        };
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()       
        {
            return Ok (await _productBrandRepository.ListAllAsync());
        }
        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productTypeRepository.ListAllAsync());
        }
    }
}
