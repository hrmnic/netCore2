using API.Core.DbModels;
using API.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using System;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        // bu kısma kadar dep.inj 
        private readonly IBasketRepository _basketRepository;
        private readonly IDistributedCache _distributedCache;
        public BasketController(IBasketRepository basketRepository, IDistributedCache distributedCache)
        {
            _basketRepository = basketRepository;
            _distributedCache = distributedCache;
        }
        // using redis cache




        [HttpGet("{id}")]
        public ActionResult<CustomerBasket> GetBasketById(int id)
        {
            return Ok();
            //var basket = await _basketRepository.GetBasketAsync("");
            //return Ok(basket ?? new CustomerBasket(""));
        }

        [HttpPost]
        public ActionResult<CustomerBasket> UpdateBasket(CustomerBasket basket)
        {
            return Ok();
            //if (basket.Id == null)
            //{
            //    var newGuidValue = Guid.NewGuid();
            //    basket.Id = newGuidValue.ToString();
            //}
            //var updatedBasket = await _basketRepository.UpdateBasketAsync(basket);
            //return Ok(updatedBasket);
        }
        [HttpDelete]
        public ActionResult DeleteBasketAsync(string id)
        {
            return Ok();
            //await _basketRepository.DeleteBasketAsync(id);
            
        }
    }
}
