using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductService.Repositories;
using ProductService.ViewModel.RequestModel;
using ProductService.ViewModel.ResponseModel;

namespace ProductService.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repo;
        public ProductController(IProductRepository repo)
        {
            this._repo = repo;
        }
        [HttpGet]
        [Route("List")]

        public async Task<IActionResult> Get([FromQuery] ProductRequestModel search)
        {
            var students = await _repo.Get(search);
            return Ok(students);
        }

        [HttpPut]
        [Route("UpdateMe")]
        public async Task<IActionResult> Update([FromBody] UpdateProductRequestModel model)
        {
            var students = await _repo.Update(model);
            return Ok();
        }

        [HttpPost]
        [Route("PostMe")]
        public async Task<IActionResult> Post([FromBody] AddProductRequestModel model)
        {
            var students = await _repo.Add(model);
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteMe")]
        public async Task<IActionResult> Delete(int StudentId)
        {
            var response = await _repo.Delete(StudentId);
            return Ok();
        }
    }
}