using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductService.ViewModel.RequestModel
{
    public class AddProductRequestModel
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Marks { get; set; }
        public string Subject { get; set; }
        public string Class { get; set; }
    }
}
