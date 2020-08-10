using ProductService.ViewModel.RequestModel;
using ProductService.ViewModel.ResponseModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductService.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<ProductModel>> Get(ProductRequestModel model);
        Task<int> Delete(int Id);
        Task<int> Update(UpdateProductRequestModel model);

        Task<int> Add(AddProductRequestModel model);
    }
}
