using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductService.ViewModel.RequestModel
{
    public class ProductRequestModel
    {
       public string SearchColumn { get; set; }
       public string SearchValue { get; set; }
       public int PageNo { get; set; }

       public int PageSize { get; set; }
    }
}
